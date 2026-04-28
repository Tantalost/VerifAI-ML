import { createSupabaseClient } from './supabaseClient';

const HISTORY_PAYLOAD_SEPARATOR = ' || ';

function safeJsonParse(value) {
  if (value == null) return null;
  if (typeof value !== 'string') return value;
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
}

function splitDetectionResult(value) {
  const text = String(value || '');
  const separatorIndex = text.indexOf(HISTORY_PAYLOAD_SEPARATOR);
  if (separatorIndex === -1) {
    return { displayText: text, payload: null };
  }

  const displayText = text.slice(0, separatorIndex).trim();
  const payloadText = text.slice(separatorIndex + HISTORY_PAYLOAD_SEPARATOR.length).trim();
  return { displayText, payload: safeJsonParse(payloadText) };
}

function encodeDetectionResult(detectionResult, payload) {
  const displayText = String(detectionResult || '').trim();
  const payloadText = JSON.stringify(payload || {});
  return `${displayText}${HISTORY_PAYLOAD_SEPARATOR}${payloadText}`;
}

function buildHistoryDetection(row) {
  const confidence = Number(row.confidence_score || 0);
  const { displayText, payload } = splitDetectionResult(row.detection_result);
  const detectionText = displayText;
  const normalized = detectionText.toLowerCase();
  const hasStoredBreakdown =
    payload != null ||
    row.ai_share != null ||
    row.model_ai_share != null ||
    row.forensic_ai_share != null ||
    row.heuristic_ai_share != null ||
    row.forensic_metrics != null ||
    row.ensemble_models != null;

  const modelAiShare = Number(payload?.modelAiShare ?? row.model_ai_share ?? row.modelAiShare ?? 0);
  const forensicAiShare = Number(payload?.forensicAiShare ?? row.forensic_ai_share ?? row.forensicAiShare ?? 0);
  const heuristicAiShare = Number(payload?.heuristicAiShare ?? row.heuristic_ai_share ?? row.heuristicAiShare ?? 0);
  const ensembleModels = payload?.ensembleModels ?? row.ensemble_models ?? [];
  const forensicMetrics = payload?.forensicMetrics ?? row.forensic_metrics ?? null;

  let aiShare;
  if (hasStoredBreakdown) {
    aiShare = Number(payload?.aiShare ?? row.ai_share ?? row.aiShare ?? 0);
  } else if (normalized.includes('highly likely ai') || normalized.includes('ai/manipulated')) {
    // Keep AI-classified entries visibly on the AI side in history.
    aiShare = Math.max(61, confidence);
  } else if (normalized.includes('suspicious')) {
    // Suspicious/Modified band should stay in the middle bucket.
    aiShare = Math.max(56, Math.min(60, confidence || 58));
  } else if (normalized.includes('likely real') || normalized.includes('real')) {
    aiShare = Math.min(50, confidence || 45);
  } else {
    // Fallback if older records have unknown text.
    aiShare = Math.max(0, Math.min(100, 100 - confidence));
  }

  return {
    name: detectionText || 'Scan Result',
    preview: row.image_url,
    confidence,
    aiShare,
    artifacts: Math.max(0, 100 - aiShare),
    verdict: detectionText || null,
    modelAiShare,
    forensicAiShare,
    heuristicAiShare,
    ensembleModels,
    forensicMetrics,
  };
}

function resolveModeFromResult(detectionResult) {
  const value = String(detectionResult || '').toLowerCase();
  return value.includes('[batch]') ? 'batch' : 'single';
}

export async function fetchUserScanHistory({ userId, accessToken }) {
  if (!userId) return [];

  const supabase = createSupabaseClient(accessToken);
  const extendedSelect = 'id, image_url, detection_result, confidence_score, model_ai_share, forensic_ai_share, heuristic_ai_share, ai_share, forensic_metrics, ensemble_models, created_at';
  const basicSelect = 'id, image_url, detection_result, confidence_score, created_at';

  let data = null;
  let error = null;

  ({ data, error } = await supabase
    .from('scan_history')
    .select(extendedSelect)
    .eq('user_id', userId)
    .order('created_at', { ascending: false }));

  if (error && /does not exist|column/i.test(error.message || '')) {
    ({ data, error } = await supabase
      .from('scan_history')
      .select(basicSelect)
      .eq('user_id', userId)
      .order('created_at', { ascending: false }));
  }

  if (error) throw error;

  return (data || []).map((row) => ({
    id: row.id,
    mode: resolveModeFromResult(row.detection_result),
    scannedAt: new Date(row.created_at).toLocaleString(),
    detections: [buildHistoryDetection(row)],
  }));
}

export async function insertScanHistoryRecord({
  userId,
  accessToken,
  imageUrl,
  detectionResult,
  confidenceScore,
  aiShare,
  modelAiShare,
  forensicAiShare,
  heuristicAiShare,
  ensembleModels,
  forensicMetrics,
}) {
  if (!userId) {
    throw new Error('Missing user id for scan history insert.');
  }

  const supabase = createSupabaseClient(accessToken);
  const storedDetectionResult = encodeDetectionResult(detectionResult, {
    aiShare,
    modelAiShare,
    forensicAiShare,
    heuristicAiShare,
    ensembleModels,
    forensicMetrics,
  });

  const fullPayload = {
    user_id: userId,
    image_url: imageUrl,
    detection_result: storedDetectionResult,
    confidence_score: confidenceScore,
    ai_share: aiShare,
    model_ai_share: modelAiShare,
    forensic_ai_share: forensicAiShare,
    heuristic_ai_share: heuristicAiShare,
    ensemble_models: ensembleModels,
    forensic_metrics: forensicMetrics,
  };

  let response = await supabase
    .from('scan_history')
    .insert(fullPayload)
    .select('id')
    .single();

  if (response.error && /does not exist|column/i.test(response.error.message || '')) {
    response = await supabase
      .from('scan_history')
      .insert({
        user_id: userId,
        image_url: imageUrl,
        detection_result: storedDetectionResult,
        confidence_score: confidenceScore,
      })
      .select('id')
      .single();
  }

  if (response.error) throw response.error;
  return response.data;
}

