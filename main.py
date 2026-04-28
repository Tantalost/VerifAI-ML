import io
import os
from pathlib import Path
from typing import Optional

import cv2
import numpy as np
from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image

# Import our custom YOLO engine
from yolo_engine import YOLODetector

app = FastAPI(title="VerifAI Backend - YOLO Detection")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def resolve_model_path() -> str:
    env_model_path = os.getenv("MODEL_PATH")
    candidates = [
        env_model_path,
        "weights/best.pt",
        "backend/weights/best.pt",
        "yolov5s.pt",
    ]

    for candidate in candidates:
        if not candidate:
            continue
        if Path(candidate).exists():
            return candidate

    # Keep a deterministic fallback and fail with a clear error in YOLODetector.
    return env_model_path or "weights/best.pt"


# Initialize the model once at startup
MODEL_PATH = resolve_model_path()
detector = YOLODetector(model_path=MODEL_PATH)
DETECTION_CONFIDENCE_THRESHOLD = float(os.getenv("DETECTION_CONFIDENCE_THRESHOLD", "0.20"))


def _to_cv_bgr(image: Image.Image) -> np.ndarray:
    rgb = np.array(image.convert("RGB"))
    return cv2.cvtColor(rgb, cv2.COLOR_RGB2BGR)


def compute_forensic_metrics(image: Image.Image, image_bytes: bytes, metadata_ai_flag: bool) -> dict:
    bgr = _to_cv_bgr(image)
    gray = cv2.cvtColor(bgr, cv2.COLOR_BGR2GRAY).astype(np.float32)
    h, w = gray.shape[:2]

    # FFT radial high-frequency ratio
    fft_shift = np.fft.fftshift(np.fft.fft2(gray))
    magnitude = np.abs(fft_shift) + 1e-8
    y, x = np.ogrid[:h, :w]
    cy, cx = h / 2.0, w / 2.0
    radius = np.sqrt((x - cx) ** 2 + (y - cy) ** 2)
    high_mask = radius > (min(h, w) * 0.18)
    fft_noise_uniformity = float((magnitude[high_mask].mean() / magnitude.mean()) * 10.0)

    # ELA-style score via JPEG recompression diff
    encode_param = [int(cv2.IMWRITE_JPEG_QUALITY), 90]
    _, enc = cv2.imencode(".jpg", bgr, encode_param)
    recompressed = cv2.imdecode(enc, cv2.IMREAD_COLOR)
    ela_diff = cv2.absdiff(bgr, recompressed)
    ela_artifacts = float(np.mean(ela_diff))

    # Entropy of grayscale histogram
    hist = cv2.calcHist([gray.astype(np.uint8)], [0], None, [256], [0, 256]).flatten()
    probs = hist / (hist.sum() + 1e-8)
    color_distribution_entropy = float(-(probs * np.log2(probs + 1e-12)).sum())

    # Edge coherence variance (Laplacian variance)
    lap = cv2.Laplacian(gray, cv2.CV_32F)
    edge_coherence_variance = float(np.var(lap))

    # JPEG block artifact std proxy
    gy = np.abs(gray[:, 8:] - gray[:, :-8])
    gx = np.abs(gray[8:, :] - gray[:-8, :])
    jpeg_artifacts_std = float(np.std(np.concatenate([gx.flatten(), gy.flatten()])))

    # High-frequency noise from high-pass filtering
    blur = cv2.GaussianBlur(gray, (0, 0), 1.2)
    high_freq = gray - blur
    high_frequency_noise = float(np.std(high_freq) * 40.0)

    # Texture consistency (local binary variation proxy)
    ksize = 9
    mean = cv2.blur(gray, (ksize, ksize))
    sqmean = cv2.blur(gray * gray, (ksize, ksize))
    local_var = np.maximum(sqmean - (mean * mean), 0.0)
    texture_consistency = float(np.std(local_var) * 15.0)

    # Chromatic aberration proxy: channel edge misalignment
    b, g, r = cv2.split(bgr.astype(np.float32))
    grad_r = cv2.Sobel(r, cv2.CV_32F, 1, 0, ksize=3)
    grad_b = cv2.Sobel(b, cv2.CV_32F, 1, 0, ksize=3)
    chromatic_aberration = float(np.mean(np.abs(grad_r - grad_b)) / 255.0)

    # Score each metric to [0..1] AI-risk contributions.
    def low_is_ai(v: float, low: float, high: float) -> float:
        return float(np.clip((high - v) / max(high - low, 1e-6), 0.0, 1.0))

    def high_is_ai(v: float, low: float, high: float) -> float:
        return float(np.clip((v - low) / max(high - low, 1e-6), 0.0, 1.0))

    metric_risk = {
        "fft_noise_uniformity": low_is_ai(fft_noise_uniformity, 4.0, 8.0),
        "ela_artifacts": low_is_ai(ela_artifacts, 18.0, 40.0),
        "color_distribution_entropy": low_is_ai(color_distribution_entropy, 5.8, 7.2),
        "edge_coherence_variance": high_is_ai(edge_coherence_variance, 800.0, 2600.0),
        "jpeg_artifacts_std": low_is_ai(jpeg_artifacts_std, 5.0, 30.0),
        "high_frequency_noise": low_is_ai(high_frequency_noise, 500.0, 950.0),
        "texture_consistency": high_is_ai(texture_consistency, 420.0, 980.0),
        "chromatic_aberration": low_is_ai(chromatic_aberration, 0.45, 1.15),
    }

    weights = {
        "fft_noise_uniformity": 0.14,
        "ela_artifacts": 0.14,
        "color_distribution_entropy": 0.08,
        "edge_coherence_variance": 0.12,
        "jpeg_artifacts_std": 0.08,
        "high_frequency_noise": 0.14,
        "texture_consistency": 0.16,
        "chromatic_aberration": 0.14,
    }

    forensic_probability = float(sum(metric_risk[k] * weights[k] for k in metric_risk))
    if metadata_ai_flag:
        forensic_probability = min(1.0, forensic_probability + 0.12)

    def classify_metric(risk: float) -> str:
        if risk >= 0.66:
            return "ai_like"
        if risk <= 0.33:
            return "normal"
        return "borderline"

    metrics = {
        "metadata_ai_flag": metadata_ai_flag,
        "fft_noise_uniformity": fft_noise_uniformity,
        "ela_artifacts": ela_artifacts,
        "color_distribution_entropy": color_distribution_entropy,
        "edge_coherence_variance": edge_coherence_variance,
        "jpeg_artifacts_std": jpeg_artifacts_std,
        "high_frequency_noise": high_frequency_noise,
        "texture_consistency": texture_consistency,
        "chromatic_aberration": chromatic_aberration,
        "classifier_ai_probability": forensic_probability,
    }

    labels = {k: classify_metric(v) for k, v in metric_risk.items()}
    return {"metrics": metrics, "labels": labels, "forensic_ai_probability": forensic_probability}

def calculate_credibility(detections: list) -> dict:
    """
    Calculates a verdict using model class labels and confidence values.
    If class names contain AI/Real semantics, aggregate those confidences.
    Fall back to anomaly-style scoring only when labels are not informative.
    """
    ai_keywords = ("ai", "fake", "synthetic", "generated", "manipulated")
    real_keywords = ("real", "authentic", "genuine")

    ai_conf = 0.0
    real_conf = 0.0
    unknown_conf = 0.0
    detection_count = len(detections)

    # If there are no detections, do not force a "Likely Real" verdict.
    # Keep this neutral so frontend hybrid logic can still use heuristic signals.
    if detection_count == 0:
        return {
            "score": 50.0,
            "status": "Inconclusive",
            "anomalies_found": 0,
            "ai_confidence_sum": 0.0,
            "real_confidence_sum": 0.0,
            "unknown_confidence_sum": 0.0,
        }

    for det in detections:
        confidence = float(det.get("confidence", 0.0))
        label = str(det.get("class_name", "")).strip().lower()

        if any(keyword in label for keyword in ai_keywords):
            ai_conf += confidence
        elif any(keyword in label for keyword in real_keywords):
            real_conf += confidence
        else:
            unknown_conf += confidence

    # Primary path: label-aware decision.
    if ai_conf > 0.0 or real_conf > 0.0:
        total_known = ai_conf + real_conf
        ai_probability = (ai_conf / total_known) if total_known > 0 else 0.0
        credibility_score = max(0.0, min(100.0, (1.0 - ai_probability) * 100.0))

        if ai_probability >= 0.65:
            status = "Highly Likely AI/Manipulated"
        elif ai_probability >= 0.4:
            status = "Suspicious"
        else:
            status = "Likely Real"

        return {
            "score": round(credibility_score, 2),
            "status": status,
            "anomalies_found": detection_count,
            "ai_confidence_sum": round(ai_conf, 4),
            "real_confidence_sum": round(real_conf, 4),
            "unknown_confidence_sum": round(unknown_conf, 4),
        }

    # Fallback path: anomaly-style scoring when classes are not AI/Real.
    base_score = 100.0
    total_penalty = sum(float(det.get("confidence", 0.0)) * 35.0 for det in detections)
    final_score = max(0.0, base_score - total_penalty)

    if final_score < 40.0:
        status = "Highly Likely AI/Manipulated"
    elif final_score < 75.0:
        status = "Suspicious"
    else:
        status = "Likely Real"

    return {
        "score": round(final_score, 2),
        "status": status,
        "anomalies_found": detection_count,
        "ai_confidence_sum": 0.0,
        "real_confidence_sum": 0.0,
        "unknown_confidence_sum": round(unknown_conf, 4),
    }


def load_image_from_bytes(image_bytes: bytes) -> tuple[Image.Image, np.ndarray]:
    image_array = np.frombuffer(image_bytes, dtype=np.uint8)
    bgr = cv2.imdecode(image_array, cv2.IMREAD_COLOR)
    if bgr is None:
        raise HTTPException(status_code=400, detail="Unable to decode the uploaded image.")

    rgb = cv2.cvtColor(bgr, cv2.COLOR_BGR2RGB)
    return Image.fromarray(rgb), bgr

async def analyze_uploaded_file(file: UploadFile) -> dict:
    content_type = file.content_type or ""
    if not content_type.startswith("image/"):
        raise HTTPException(status_code=400, detail=f"Invalid file type for {file.filename}.")

    image_bytes = await file.read()
    image, _ = load_image_from_bytes(image_bytes)
    filename_l = (file.filename or "").lower()
    metadata_ai_flag = any(token in filename_l for token in ("ai", "generated", "midjourney", "dalle", "sdxl"))

    # 1. Run YOLO Inference
    detections = detector.predict(
        image,
        confidence_threshold=DETECTION_CONFIDENCE_THRESHOLD,
    )

    # 2. Calculate Credibility Score
    credibility_report = calculate_credibility(detections)
    forensic = compute_forensic_metrics(image, image_bytes, metadata_ai_flag)
    blended_ai = ((100.0 - credibility_report["score"]) * 0.55) + (forensic["forensic_ai_probability"] * 100.0 * 0.45)
    blended_ai = max(0.0, min(100.0, blended_ai))
    confidence = min(100.0, abs(blended_ai - 50.0) * 2.0)

    credibility_report["score"] = round(100.0 - blended_ai, 2)
    credibility_report["status"] = (
        "Highly Likely AI/Manipulated" if blended_ai >= 65.0 else
        "Suspicious" if blended_ai >= 40.0 else
        "Likely Real"
    )
    credibility_report["ai_likelihood"] = round(blended_ai, 2)
    credibility_report["confidence"] = round(confidence, 2)

    # 3. Format Response for the Frontend
    return {
        "filename": file.filename,
        "dimensions": image.size,
        "analysis": credibility_report,
        "forensic_metrics": forensic,
        "detections": detections,  # Array of bounding boxes to draw on the UI
        "model_path": MODEL_PATH,
        "detection_confidence_threshold": DETECTION_CONFIDENCE_THRESHOLD,
        "message": "Analysis complete."
    }


@app.post("/api/v1/analyze")
async def analyze_image(
    files: list[UploadFile] = File(default=[]),
    file: Optional[UploadFile] = File(default=None)
):
    uploaded_files: list[UploadFile] = []
    if files:
        uploaded_files.extend(files)
    if file is not None:
        uploaded_files.append(file)

    if not uploaded_files:
        raise HTTPException(status_code=400, detail="No files provided.")

    try:
        results = [await analyze_uploaded_file(uploaded_file) for uploaded_file in uploaded_files]

        if len(results) == 1:
            return results[0]

        return {
            "count": len(results),
            "results": results,
            "model_path": MODEL_PATH,
            "message": "Batch analysis complete."
        }
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
