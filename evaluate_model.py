import argparse
import csv
import importlib.util
from pathlib import Path

from PIL import Image
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix


def load_yolo_detector_class():
    """Resolve YOLODetector from common project layouts."""
    # 1) Standard root import: yolo_engine.py beside this script or on PYTHONPATH
    try:
        from yolo_engine import YOLODetector as detector_cls  # type: ignore
        return detector_cls
    except Exception:
        pass

    # 2) Backend module import: backend/yolo_engine.py
    try:
        from backend.yolo_engine import YOLODetector as detector_cls  # type: ignore
        return detector_cls
    except Exception:
        pass

    # 3) Explicit file load relative to this script (root or backend)
    current_dir = Path(__file__).resolve().parent
    candidates = [
        current_dir / "yolo_engine.py",
        current_dir / "backend" / "yolo_engine.py",
    ]
    for candidate in candidates:
        if not candidate.exists():
            continue
        spec = importlib.util.spec_from_file_location("yolo_engine_dynamic", candidate)
        if spec is None or spec.loader is None:
            continue
        module = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(module)
        detector_cls = getattr(module, "YOLODetector", None)
        if detector_cls is not None:
            return detector_cls

    raise ModuleNotFoundError(
        "Could not find YOLODetector. Expected 'yolo_engine.py' in project root or 'backend/yolo_engine.py'."
    )


IMAGE_EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp", ".bmp"}
AI_LABELS = {"ai", "fake", "synthetic", "generated", "manipulated"}
REAL_LABELS = {"real", "authentic", "genuine"}


def infer_ground_truth_from_path(path: Path) -> str | None:
    tokens = [part.lower() for part in path.parts]

    if any(token in AI_LABELS for token in tokens):
        return "ai"
    if any(token in REAL_LABELS for token in tokens):
        return "real"
    return None


def classify_from_detections(detections: list[dict]) -> tuple[str, float, float, float]:
    ai_conf = 0.0
    real_conf = 0.0
    unknown_conf = 0.0

    for det in detections:
        label = str(det.get("class_name", "")).strip().lower()
        conf = float(det.get("confidence", 0.0))

        if any(keyword in label for keyword in AI_LABELS):
            ai_conf += conf
        elif any(keyword in label for keyword in REAL_LABELS):
            real_conf += conf
        else:
            unknown_conf += conf

    # If the detector never produced semantic class labels, default to "real".
    # This is a strong signal that the class-name mapping/training labels need review.
    if ai_conf == 0.0 and real_conf == 0.0:
        return "real", ai_conf, real_conf, unknown_conf

    predicted = "ai" if ai_conf >= real_conf else "real"
    return predicted, ai_conf, real_conf, unknown_conf


def collect_images(data_dir: Path) -> list[Path]:
    return sorted(
        path for path in data_dir.rglob("*")
        if path.is_file() and path.suffix.lower() in IMAGE_EXTENSIONS
    )


def main() -> None:
    parser = argparse.ArgumentParser(
        description=(
            "Evaluate YOLO best.pt accuracy using folder-based labels. "
            "Expected folder names in path: ai/fake/synthetic/generated/manipulated or real/authentic/genuine."
        )
    )
    parser.add_argument("--model", default="backend/weights/best.pt", help="Path to model weights (.pt)")
    parser.add_argument("--data-dir", required=True, help="Directory containing labeled test images")
    parser.add_argument(
        "--output-csv",
        default="evaluation_results.csv",
        help="Where to write per-image predictions",
    )
    args = parser.parse_args()

    model_path = Path(args.model)
    data_dir = Path(args.data_dir)

    if not model_path.exists():
        raise FileNotFoundError(f"Model not found: {model_path}")
    if not data_dir.exists():
        raise FileNotFoundError(f"Data directory not found: {data_dir}")

    YOLODetector = load_yolo_detector_class()
    detector = YOLODetector(model_path=str(model_path))
    image_paths = collect_images(data_dir)
    if not image_paths:
        raise RuntimeError(f"No images found in {data_dir}")

    y_true: list[str] = []
    y_pred: list[str] = []
    rows: list[dict] = []
    skipped = 0

    for image_path in image_paths:
        truth = infer_ground_truth_from_path(image_path)
        if truth is None:
            skipped += 1
            continue

        image = Image.open(image_path).convert("RGB")
        detections = detector.predict(image)
        pred, ai_conf, real_conf, unknown_conf = classify_from_detections(detections)

        y_true.append(truth)
        y_pred.append(pred)
        rows.append(
            {
                "image_path": str(image_path),
                "ground_truth": truth,
                "predicted": pred,
                "correct": pred == truth,
                "detections": len(detections),
                "ai_conf_sum": round(ai_conf, 6),
                "real_conf_sum": round(real_conf, 6),
                "unknown_conf_sum": round(unknown_conf, 6),
            }
        )

    if not y_true:
        raise RuntimeError("No labeled images found. Put images under folders containing 'ai' or 'real' keywords.")

    acc = accuracy_score(y_true, y_pred)
    matrix = confusion_matrix(y_true, y_pred, labels=["real", "ai"])
    report = classification_report(y_true, y_pred, labels=["real", "ai"], digits=4, zero_division=0)

    print("=" * 60)
    print("MODEL EVALUATION RESULTS")
    print("=" * 60)
    print(f"Model: {model_path}")
    print(f"Data directory: {data_dir}")
    print(f"Evaluated images: {len(y_true)}")
    print(f"Skipped (unlabeled path): {skipped}")
    print(f"Accuracy: {acc:.4f} ({acc * 100:.2f}%)")
    print("-" * 60)
    print("Confusion Matrix (rows=true, cols=pred) labels=[real, ai]")
    print(matrix)
    print("-" * 60)
    print("Classification Report")
    print(report)
    print("-" * 60)

    wrong = [row for row in rows if not row["correct"]]
    print(f"Misclassified: {len(wrong)}")
    for row in wrong[:20]:
        print(f"- {row['image_path']} | true={row['ground_truth']} pred={row['predicted']}")

    output_csv = Path(args.output_csv)
    with output_csv.open("w", newline="", encoding="utf-8") as handle:
        writer = csv.DictWriter(
            handle,
            fieldnames=[
                "image_path",
                "ground_truth",
                "predicted",
                "correct",
                "detections",
                "ai_conf_sum",
                "real_conf_sum",
                "unknown_conf_sum",
            ],
        )
        writer.writeheader()
        writer.writerows(rows)

    print("-" * 60)
    print(f"Saved per-image results to: {output_csv.resolve()}")


if __name__ == "__main__":
    main()
