import { createSupabaseClient } from './supabaseClient';

function buildHistoryDetection(row) {
  const confidence = Number(row.confidence_score || 0);
  const detectionText = String(row.detection_result || '');
  const normalized = detectionText.toLowerCase();

  let aiShare;
  if (normalized.includes('highly likely ai') || normalized.includes('ai/manipulated')) {
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
  };
}

function resolveModeFromResult(detectionResult) {
  const value = String(detectionResult || '').toLowerCase();
  return value.includes('[batch]') ? 'batch' : 'single';
}

export async function fetchUserScanHistory({ userId, accessToken }) {
  if (!userId) return [];

  const supabase = createSupabaseClient(accessToken);
  const { data, error } = await supabase
    .from('scan_history')
    .select('id, image_url, detection_result, confidence_score, created_at')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

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
}) {
  if (!userId) {
    throw new Error('Missing user id for scan history insert.');
  }

  const supabase = createSupabaseClient(accessToken);
  const { data, error } = await supabase
    .from('scan_history')
    .insert({
      user_id: userId,
      image_url: imageUrl,
      detection_result: detectionResult,
      confidence_score: confidenceScore,
    })
    .select('id')
    .single();

  if (error) throw error;
  return data;
}

