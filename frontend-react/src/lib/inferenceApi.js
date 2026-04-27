import exifr from 'exifr';

const DEFAULT_API_URL = 'http://127.0.0.1:8010';

function clampPercent(value) {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return 0;
  return Math.max(0, Math.min(100, Number(numeric.toFixed(2))));
}

export async function runModelInference({ file }) {
  if (!file) {
    throw new Error('No image file was provided for inference.');
  }

  const formData = new FormData();
  formData.append('file', file);

  const apiBaseUrl = (import.meta.env.VITE_INFERENCE_API_URL || DEFAULT_API_URL).replace(/\/+$/, '');
  const response = await fetch(`${apiBaseUrl}/api/v1/analyze`, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    let errorDetail = 'Unable to analyze image.';
    try {
      const payload = await response.json();
      errorDetail = payload?.detail || payload?.message || errorDetail;
    } catch {
      // Keep the fallback error message when response is not JSON.
    }
    throw new Error(errorDetail);
  }

  const payload = await response.json();
  const backendCredibilityScore = clampPercent(payload?.analysis?.score);
  const backendAiLikelihood = clampPercent(
    payload?.analysis?.ai_likelihood ?? (100 - backendCredibilityScore)
  );
  const heuristicAiLikelihood = await estimateHeuristicAiLikelihood(file).catch(() => 50);
  const modelAiLikelihood = backendAiLikelihood;
  const forensicAiLikelihood = clampPercent(
    Number(payload?.forensic_metrics?.metrics?.classifier_ai_probability || 0) * 100
  );
  // Strict heuristic-only mode for final decision.
  const aiLikelihood = clampPercent(heuristicAiLikelihood);
  const credibilityScore = clampPercent(100 - aiLikelihood);
  const confidenceScore = clampPercent(Math.max(aiLikelihood, 100 - aiLikelihood));
  const artifactsScore = clampPercent(computeArtifactsScore(payload?.forensic_metrics, aiLikelihood));

  const detectionResult = aiLikelihood >= 61
    ? 'Highly Likely AI/Manipulated'
    : aiLikelihood <= 55
      ? 'Likely Real'
      : aiLikelihood <= 60
      ? 'Suspicious/Modified'
        : 'Likely Real';

  return {
    detectionResult,
    confidenceScore,
    credibilityScore,
    aiLikelihood,
    modelAiLikelihood,
    forensicAiLikelihood,
    heuristicAiLikelihood,
    ensembleModels: [
      { id: 'yolov8', label: 'YOLOv8 Detector', aiLikelihood: modelAiLikelihood, weight: 0.0 },
      { id: 'forensic-safe', label: 'SAFE Forensic Analyzer', aiLikelihood: forensicAiLikelihood, weight: 0.0 },
      { id: 'metadata-provenance', label: 'Metadata Provenance Analyzer', aiLikelihood: heuristicAiLikelihood, weight: 1.0 },
    ],
    artifactsScore,
    forensicMetrics: payload?.forensic_metrics || null,
    raw: payload,
  };
}

function computeArtifactsScore(forensicMetrics, aiLikelihood) {
  const labels = forensicMetrics?.labels;
  const metrics = forensicMetrics?.metrics;
  if (!labels || !metrics) {
    return aiLikelihood;
  }
  const keys = Object.keys(labels);
  if (!keys.length) return aiLikelihood;
  const aiLikeCount = keys.filter((key) => labels[key] === 'ai_like').length;
  const borderlineCount = keys.filter((key) => labels[key] === 'borderline').length;
  const ratio = ((aiLikeCount + (borderlineCount * 0.5)) / keys.length) * 100;
  return ratio;
}

async function estimateHeuristicAiLikelihood(file) {
  if (!file) return 50;

  const exif = await exifr.parse(file).catch(() => ({}));
  const mime = String(file.type || '').toLowerCase();
  const fileName = String(file.name || '').toLowerCase();
  const software = String(exif?.Software || '').toLowerCase();
  const exifKeys = Object.keys(exif || {});
  const dimensions = await getImageDimensions(file).catch(() => ({ width: 0, height: 0 }));
  const hasProvenance = await hasC2paMarkers(file).catch(() => false);

  const hasMake = Boolean(exif?.Make);
  const hasModel = Boolean(exif?.Model);
  const hasLens = Boolean(exif?.LensModel);
  const hasExposureParams = ['FNumber', 'ExposureTime', 'ISOSpeedRatings', 'ISO', 'FocalLength']
    .some((key) => exif?.[key] != null && exif?.[key] !== '');
  const hasDate = Boolean(exif?.DateTimeOriginal);
  const hasGps = exif?.GPSLatitude != null && exif?.GPSLongitude != null;

  const aiToolHints = [
    'midjourney', 'stability', 'stable diffusion', 'sdxl', 'comfyui', 'invokeai',
    'automatic1111', 'dalle', 'openai', 'firefly', 'bing image creator', 'leonardo ai',
    'playground ai', 'ideogram', 'pixray', 'nightcafe', 'craiyon', 'flux', 'recraft',
  ];

  if (aiToolHints.some((hint) => software.includes(hint))) {
    return 95;
  }

  let deviceEvidence = 0;
  if (hasMake && hasModel) deviceEvidence += 2;
  if (hasExposureParams) deviceEvidence += 1;
  if (hasGps) deviceEvidence += 1;
  if (hasLens || hasDate) deviceEvidence += 0.5;

  // Strong camera metadata means likely real.
  if (exifKeys.length > 0 && (hasMake || hasModel || hasExposureParams || hasDate || hasGps)) {
    const confidence = Math.min(96, 70 + Math.round(deviceEvidence * 8));
    return clampPercent(100 - confidence);
  }

  // Messaging-app re-encode often strips EXIF from real photos.
  const messagingIndicators = ['whatsapp', 'wa', 'telegram', 'signal', 'messenger', 'wechat', 'snapchat', 'instagram'];
  const looksMessagingName = messagingIndicators.some((w) => fileName.includes(w)) || /^(img[-_]|img_\d|pxl_)/i.test(fileName);
  const w = Number(dimensions.width) || 0;
  const h = Number(dimensions.height) || 0;
  const minSide = Math.min(w, h);
  const maxSide = Math.max(w, h);
  const aspect = w && h ? (maxSide / Math.max(minSide, 1)) : 0;
  const commonMessagingMax = maxSide > 600 && maxSide <= 2048;
  const commonAspect = aspect > 1.2 && aspect < 2.0;
  if (exifKeys.length === 0 && (looksMessagingName || (commonMessagingMax && commonAspect))) {
    return 45;
  }

  // Otherwise build AI-leaning score from weaker hints.
  let score = 58;
  if (mime.includes('png') && exifKeys.length === 0) score += 8;
  if ((mime.includes('jpeg') || mime.includes('jpg')) && exifKeys.length === 0) score += 2;
  if (hasProvenance) {
    score -= 6;
  }
  if (/midjourney|dalle|sdxl|stable[-_ ]?diffusion|generated|ai/i.test(fileName)) {
    score += 15;
  }
  if (software.includes('photoshop') || software.includes('lightroom') || software.includes('gimp')) {
    score += 4;
  }

  return clampPercent(score);
}

async function hasC2paMarkers(file) {
  const bytes = new Uint8Array(await file.arrayBuffer());
  const maxProbe = Math.min(bytes.length, 512 * 1024);
  const chunk = bytes.slice(0, maxProbe);
  const text = new TextDecoder().decode(chunk);
  return /JUMBF|c2pa/i.test(text);
}

async function getImageDimensions(file) {
  return new Promise((resolve, reject) => {
    const imageUrl = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      const result = { width: img.naturalWidth, height: img.naturalHeight };
      URL.revokeObjectURL(imageUrl);
      resolve(result);
    };
    img.onerror = (error) => {
      URL.revokeObjectURL(imageUrl);
      reject(error);
    };
    img.src = imageUrl;
  });
}
