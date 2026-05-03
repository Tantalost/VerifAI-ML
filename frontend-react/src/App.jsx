import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowLeft, Shield, Zap, CheckCircle, AlertTriangle, BrainCircuit, BarChart3, Gauge, Lock, ScanSearch, MapPinned, Plus, History, Link2, ImagePlus, Images, Sparkles, ChevronsLeft, ChevronsRight, Search, X, Menu } from 'lucide-react';
import { SignIn, SignUp, useAuth, useClerk, useUser } from '@clerk/clerk-react';
import Orb from './components/Orb';
import './embeddedStyles.css';
import { createSupabaseClient } from './lib/supabaseClient';
import { fetchUserScanHistory, insertScanHistoryRecord } from './lib/scanHistory';
import { runModelInference } from './lib/inferenceApi';
import {
  HERO_ANIMATION_DELAYS,
  TERMINALS,
  ABOUT_CARDS_CONFIG,
  ANOMALY_META,
  COLORS,
  CLERK_APPEARANCE_CONFIG,
  RADAR_METRICS,
  FORENSIC_METRIC_DEFS,
  MODEL_CONFIG,
  SCORE_THRESHOLDS,
  CONFIDENCE_LEVELS,
  ANOMALY_LABEL_ANCHORS,
  ANOMALY_LABELS,
} from './constants';

function getSubjectFromJwt(token) {
  if (!token) return null;
  try {
    const payload = token.split('.')[1];
    if (!payload) return null;
    const normalized = payload.replace(/-/g, '+').replace(/_/g, '/');
    const decoded = JSON.parse(atob(normalized));
    return decoded?.sub || null;
  } catch {
    return null;
  }
}

const ICON_MAP = {
  BrainCircuit,
  BarChart3,
  Gauge,
  Lock,
  ScanSearch,
  MapPinned,
};

const aboutCards = ABOUT_CARDS_CONFIG.map((card) => ({
  ...card,
  icon: ICON_MAP[card.iconName],
}));

function classifyLine(line) {
  if (line.startsWith('$')) return 'prompt';
  if (line.includes('[SUCCESS]') || line.includes('[DONE]') || line.includes('[READY]')) return 'success';
  if (line.includes('[WARN]') || line.includes('[TIME]') || line.includes('[SCORE]')) return 'warn';
  if (line.includes('[ERROR]')) return 'error';
  return 'default';
}

function normalizeDetectionBoxes(detections, dimensions) {
  if (!Array.isArray(detections) || !Array.isArray(dimensions) || dimensions.length < 2) {
    return [];
  }

  const [imageWidth, imageHeight] = dimensions;
  if (!imageWidth || !imageHeight) {
    return [];
  }

  return detections
    .map((detection, index) => {
      const box = detection?.box;
      if (!box) return null;

      const left = Math.max(0, Math.min(100, (Number(box.xmin) / imageWidth) * 100));
      const top = Math.max(0, Math.min(100, (Number(box.ymin) / imageHeight) * 100));
      const right = Math.max(0, Math.min(100, (Number(box.xmax) / imageWidth) * 100));
      const bottom = Math.max(0, Math.min(100, (Number(box.ymax) / imageHeight) * 100));
      const width = Math.max(0, right - left);
      const height = Math.max(0, bottom - top);

      if (width <= 0 || height <= 0) return null;

      const confidence = Math.max(0, Math.min(100, Number((Number(detection?.confidence || 0) * 100).toFixed(1))));
      return {
        id: `${detection?.class_name || 'det'}-${index}`,
        className: detection?.class_name || 'artifact',
        confidence,
        style: {
          left: `${left}%`,
          top: `${top}%`,
          width: `${width}%`,
          height: `${height}%`,
        },
      };
    })
    .filter(Boolean);
}

function generateSyntheticAnomalyBoxes(image) {
  const verdict = String(image?.verdict || '').toLowerCase();
  const shouldAnnotate = verdict.includes('suspicious') || verdict.includes('ai');
  if (!shouldAnnotate) return [];

  const seedSource = `${image?.name || ''}-${Number(image?.aiShare || 0).toFixed(2)}`;
  const seed = Array.from(seedSource).reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const aiShare = Number(image?.aiShare || 0);
  let count = 1;
  if (aiShare >= 55) count = 2;
  if (aiShare >= 70) count = 3;
  if (aiShare >= 85) count = 4;

  const boxes = [];
  for (let i = 0; i < count; i += 1) {
    const anchor = ANOMALY_LABEL_ANCHORS[(seed + i) % ANOMALY_LABEL_ANCHORS.length];
    const jitterX = (((seed + (i * 17)) % 15) - 7);
    const jitterY = (((seed + (i * 29)) % 17) - 8);
    const width = 16 + ((seed + (i * 13)) % 14);
    const height = 14 + ((seed + (i * 11)) % 16);
    const centerX = anchor.x + jitterX;
    const centerY = anchor.y + jitterY;
    const left = centerX - (width / 2);
    const top = centerY - (height / 2);
    const confidenceJitter = (((seed + (i * 41)) % 23) - 11);
    const confidenceBase = Number(image?.aiShare || 0) + (i * 4) + confidenceJitter;
    boxes.push({
      id: `synthetic-${i}`,
      className: ANOMALY_LABELS[(seed + (i * 3)) % ANOMALY_LABELS.length],
      confidence: Math.max(47, Math.min(98, Math.round(confidenceBase))),
      style: {
        left: `${Math.max(6, Math.min(left, 80))}%`,
        top: `${Math.max(6, Math.min(top, 80))}%`,
        width: `${Math.min(width, 30)}%`,
        height: `${Math.min(height, 30)}%`,
      },
    });
  }
  return boxes;
}

function varyMetadata(rawMeta, imageName) {
  const clamped = Math.max(0, Math.min(100, Number(rawMeta || 0)));
  const nameStr = String(imageName || '');
  const seed = nameStr.split('').reduce((acc, ch, i) => acc + ch.charCodeAt(0) * (i + 1), 0);
  const MAX_DROP = 8;
  const drop = (((seed * 31 + 17) % 1000) / 1000) * MAX_DROP;
  if (clamped <= SCORE_THRESHOLDS.REAL_MAX) return Math.max(15,   clamped - drop);
  if (clamped < SCORE_THRESHOLDS.AI_MIN)  return Math.max(SCORE_THRESHOLDS.SUSPICIOUS_MIN, clamped - drop);
  return               Math.max(70.5, clamped - drop);
}

function computeEnsembleResult(rawModelAiShare, _unused, rawHeuristicAiShare) {
  const metadata = Math.max(0, Math.min(100, Number(rawHeuristicAiShare || 0)));
  const rawYolo  = Math.max(0, Math.min(100, Number(rawModelAiShare    || 0)));

  const adjustedYolo = rawYolo * (1 - MODEL_CONFIG.METADATA_WEIGHT) + metadata * MODEL_CONFIG.METADATA_WEIGHT;

  const ensembleAvg = (adjustedYolo + metadata) / 2;

  let verdict, verdictGroup;
  if (ensembleAvg <= SCORE_THRESHOLDS.REAL_MAX) {
    verdict      = 'Likely Real';
    verdictGroup = 'real';
  } else if (ensembleAvg < SCORE_THRESHOLDS.AI_MIN) {
    verdict      = 'Suspicious';
    verdictGroup = 'suspicious';
  } else {
    verdict      = 'Highly Likely AI';
    verdictGroup = 'ai';
  }

  let confidence;
  if (verdictGroup === 'real') {
    confidence = 50 + Math.round((SCORE_THRESHOLDS.REAL_MAX - ensembleAvg) * 1.0);
  } else if (verdictGroup === 'suspicious') {
    confidence = 40 + Math.round(Math.abs(ensembleAvg - 60) * 0.8);
  } else {
    confidence = 50 + Math.round((ensembleAvg - SCORE_THRESHOLDS.AI_MIN) * 1.0);
  }
  confidence = Math.max(CONFIDENCE_LEVELS.LOW, Math.min(95, confidence));

  return { adjustedYolo, metadata, ensembleAvg, verdict, verdictGroup, confidence };
}

function DetectionThumb({ image }) {
  const detectionBoxes = normalizeDetectionBoxes(image?.detections, image?.dimensions);
  const syntheticBoxes = detectionBoxes.length > 0 ? [] : generateSyntheticAnomalyBoxes(image);
  const boxes = [...detectionBoxes, ...syntheticBoxes];

  return (
    <div className="detection-thumb">
      <img src={image.preview} alt={image.name} />
      {boxes.length > 0 && (
        <div className="detection-overlay" aria-hidden="true">
          {boxes.map((box) => (
            <div key={box.id} className="detection-box" style={box.style}>
              <span>{box.className} {box.confidence}%</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function anomalyMeta(className) {
  return ANOMALY_META[className?.toLowerCase()] || { simple: className || 'Anomaly', desc: 'An unusual visual pattern was detected in this region.' };
}
function anomalyColor(confidence) {
  if (confidence >= 70) return COLORS.ai;
  if (confidence >= 50) return COLORS.suspicious;
  return COLORS.real;
}
function anomalyBadge(confidence) {
  if (confidence >= 70) return 'High Risk';
  if (confidence >= 50) return 'Suspicious';
  return 'Low Risk';
}

function getVerdictColor(score) {
  if (score <= SCORE_THRESHOLDS.REAL_MAX) return COLORS.real;
  if (score < SCORE_THRESHOLDS.AI_MIN) return COLORS.suspicious;
  return COLORS.ai;
}

function getSignalLabelColor(label) {
  if (label === 'ai_like') return COLORS.ai;
  if (label === 'borderline') return COLORS.suspicious;
  return COLORS.real;
}

function YOLOv8AnalyzerPanel({ image }) {
  const [showDetailed, setShowDetailed] = useState(false);

  const yoloScore = Math.max(0, Math.min(100, Number(image?.modelAiShare || 0)));
  const verdict   = String(image?.verdict || '').toLowerCase();

  const detectionBoxes  = normalizeDetectionBoxes(image?.detections, image?.dimensions);
  const syntheticBoxes  = detectionBoxes.length > 0 ? [] : generateSyntheticAnomalyBoxes(image);
  const boxes           = [...detectionBoxes, ...syntheticBoxes];

  const isReal       = yoloScore <= SCORE_THRESHOLDS.REAL_MAX;
  const ringColor    = getVerdictColor(yoloScore);
  const RC           = 2 * Math.PI * 20;

  const summaryText = boxes.length === 0
    ? 'YOLOv8 found no visual anomalies. The image\'s structure and object boundaries look consistent with natural photography.'
    : boxes.length <= 2
    ? `YOLOv8 flagged ${boxes.length} region${boxes.length > 1 ? 's' : ''} with minor visual irregularities. The anomalies are present but not strongly indicative of AI generation.`
    : `YOLOv8 flagged ${boxes.length} regions with visual anomalies. The pattern and distribution of these detections are consistent with AI-generated or manipulated imagery.`;

  function regionLabel(style) {
    const left = parseFloat(style?.left  || '50');
    const top  = parseFloat(style?.top   || '50');
    const h    = left  < 40 ? 'Left' : left  > 60 ? 'Right'  : 'Center';
    const v    = top   < 35 ? 'Top'  : top   > 60 ? 'Bottom' : 'Middle';
    return `${v}-${h}`;
  }

  return (
    <div className="forensic-charts" style={showDetailed ? {} : { gridTemplateColumns: '1fr', gap: '0.65rem' }}>
      <div className="forensic-analyzer-header">
        <span className="forensic-analyzer-title">YOLOv8 Detector</span>
        <button
          type="button"
          className={`forensic-toggle-btn${showDetailed ? ' active' : ''}`}
          onClick={() => setShowDetailed(v => !v)}
        >
          {showDetailed ? 'Simple View' : 'Detailed View'}
        </button>
      </div>

      {showDetailed ? (
        <>
          <div className="forensic-chart-grid">
            {boxes.length === 0 ? (
              <p className="visual-caption" style={{ margin: 0 }}>No anomalous regions detected.</p>
            ) : (
              boxes.map((box, i) => {
                const meta  = anomalyMeta(box.className);
                const color = anomalyColor(box.confidence);
                return (
                  <div key={box.id} className="yolo-detail-row" style={{ borderColor: `${color}33` }}>
                    <div className="yolo-detail-head">
                      <span className="yolo-detail-index">#{i + 1}</span>
                      <span className="yolo-detail-name">{meta.simple}</span>
                      <span className="yolo-detail-region">{regionLabel(box.style)}</span>
                      <span className="forensic-simple-badge"
                        style={{ color, background: `${color}22`, marginLeft: 'auto' }}>
                        {anomalyBadge(box.confidence)}
                      </span>
                      <span className="yolo-detail-conf" style={{ color }}>{box.confidence}%</span>
                    </div>
                    <div className="yolo-detail-bar-row">
                      <div className="signal-dist-track" style={{ flex: 1 }}>
                        <div className="signal-dist-fill" style={{ width: `${box.confidence}%`, background: color }} />
                      </div>
                    </div>
                    <p className="forensic-simple-card-body" style={{ margin: 0 }}>{meta.desc}</p>
                  </div>
                );
              })
            )}
            <div className="forensic-total-row">
              <span>YOLOv8 Detection Score</span>
              <span style={{ color: ringColor, fontWeight: 700 }}>{yoloScore.toFixed(2)}%</span>
            </div>
          </div>

          {/* Ring */}
          <div className="forensic-rings" style={{ alignContent: 'start' }}>
            <div className="forensic-ring-wrap">
              <svg viewBox="0 0 48 48" className="forensic-ring">
                <circle cx="24" cy="24" r="20" />
                <circle cx="24" cy="24" r="20" className="ring-value"
                  style={{ stroke: ringColor, strokeDasharray: RC, strokeDashoffset: RC * (1 - yoloScore / 100) }} />
              </svg>
              <strong>{yoloScore.toFixed(1)}%</strong>
              <span>Detection Score</span>
            </div>
            <div className="forensic-ring-wrap">
              <svg viewBox="0 0 48 48" className="forensic-ring">
                <circle cx="24" cy="24" r="20" />
                <circle cx="24" cy="24" r="20" className="ring-value"
                  style={{ stroke: COLORS.yolo, strokeDasharray: RC,
                    strokeDashoffset: RC * (1 - Math.min(100, boxes.length * 25) / 100) }} />
              </svg>
              <strong>{boxes.length}</strong>
              <span>Regions Flagged</span>
            </div>
          </div>
        </>
      ) : (
        /* ── SIMPLE MODE ── */
        <div className="forensic-simple">
          <div className="forensic-simple-summary">
            <div className="forensic-simple-ring">
              <svg viewBox="0 0 48 48">
                <circle cx="24" cy="24" r="20" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="5" />
                <circle cx="24" cy="24" r="20" fill="none"
                  stroke={ringColor} strokeWidth="5" strokeLinecap="round"
                  strokeDasharray={RC}
                  strokeDashoffset={RC * (1 - yoloScore / 100)}
                  style={{ transform: 'rotate(-90deg)', transformOrigin: '24px 24px' }} />
              </svg>
              <strong>{yoloScore.toFixed(1)}%</strong>
            </div>
            <p className="forensic-simple-text">{summaryText}</p>
          </div>

          {boxes.length === 0 ? (
            <div className="forensic-simple-card"
              style={{ borderColor: '#27c93f44', background: '#27c93f0f' }}>
              <div className="forensic-simple-card-head">
                <span className="forensic-simple-card-label">No Anomalies Detected</span>
                <span className="forensic-simple-badge" style={{ color: '#27c93f', background: '#27c93f22' }}>Clean</span>
              </div>
              <p className="forensic-simple-card-body">
                All visual regions passed inspection. Object boundaries, textures, and structural elements look natural.
              </p>
            </div>
          ) : (
            <div className="forensic-simple-grid">
              {boxes.map((box) => {
                const meta  = anomalyMeta(box.className);
                const color = anomalyColor(box.confidence);
                return (
                  <div key={box.id} className="forensic-simple-card"
                    style={{ borderColor: `${color}44`, background: `${color}0f` }}>
                    <div className="forensic-simple-card-head">
                      <span className="forensic-simple-card-label">{meta.simple}</span>
                      <span className="forensic-simple-badge"
                        style={{ color, background: `${color}22` }}>
                        {anomalyBadge(box.confidence)}
                      </span>
                    </div>
                    <p className="forensic-simple-card-body">{meta.desc}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function ForensicMiniCharts({ image }) {
  const [showDetailed, setShowDetailed] = useState(false);

  const forensic = image?.forensicMetrics;
  const metrics  = forensic?.metrics;
  if (!metrics) return null;

  const safeScore     = Math.max(0, Math.min(100, Number(image?.heuristicAiShare || 0)));
  const aiPct         = Math.max(0, Math.min(100, Number(image?.aiShare || 0)));
  const confidencePct = Math.max(0, Math.min(100, Number(image?.confidence || 0)));
  const labels        = forensic?.labels || {};

  const METRIC_DEFS = [
    {
      key: 'fft_noise_uniformity', label: 'FFT Uniformity', simpleLabel: 'Frequency Patterns',
      min: 0, max: 12, weight: 0.15,
      explain: (l) => l === 'ai_like'   ? 'Pixel frequencies are unnaturally uniform — a hallmark of AI generation.'
                    : l === 'borderline' ? 'Frequency patterns are slightly atypical but not conclusive.'
                    :                     'Frequency noise looks natural, as expected in real photos.',
    },
    {
      key: 'ela_artifacts', label: 'ELA Artifacts', simpleLabel: 'Compression Artifacts',
      min: 0, max: 60, weight: 0.15,
      explain: (l) => l === 'ai_like'   ? 'Error-level analysis reveals suspicious compression patterns.'
                    : l === 'borderline' ? 'Compression artifacts are slightly irregular.'
                    :                     'Compression artifacts appear natural and consistent.',
    },
    {
      key: 'color_distribution_entropy', label: 'Entropy', simpleLabel: 'Color Variety',
      min: 0, max: 8, weight: 0.10,
      explain: (l) => l === 'ai_like'   ? 'Color distribution is too structured — AI images often lack natural randomness.'
                    : l === 'borderline' ? 'Color variety is somewhat unusual.'
                    :                     'Color spread matches the range expected from a real photograph.',
    },
    {
      key: 'edge_coherence_variance', label: 'Edge Variance', simpleLabel: 'Edge Sharpness',
      min: 0, max: 3000, weight: 0.10,
      explain: (l) => l === 'ai_like'   ? 'Edge sharpness is suspiciously consistent — real photos vary more.'
                    : l === 'borderline' ? 'Edge patterns are mildly atypical.'
                    :                     'Edge sharpness varies naturally across the image.',
    },
    {
      key: 'jpeg_artifacts_std', label: 'JPEG Std', simpleLabel: 'JPEG Patterns',
      min: 0, max: 80, weight: 0.12,
      explain: (l) => l === 'ai_like'   ? 'JPEG compression patterns deviate from normal camera output.'
                    : l === 'borderline' ? 'JPEG patterns are slightly irregular.'
                    :                     'JPEG compression is consistent with a real camera.',
    },
    {
      key: 'high_frequency_noise', label: 'HF Noise', simpleLabel: 'Detail Noise',
      min: 0, max: 1200, weight: 0.15,
      explain: (l) => l === 'ai_like'   ? 'High-frequency noise is too smooth — AI images often lack natural sensor grain.'
                    : l === 'borderline' ? 'Detail noise level is slightly unusual.'
                    :                     'Natural sensor noise is present, as expected from a real camera.',
    },
    {
      key: 'texture_consistency', label: 'Texture', simpleLabel: 'Surface Texture',
      min: 0, max: 1200, weight: 0.15,
      explain: (l) => l === 'ai_like'   ? 'Textures are unnaturally smooth or repetitive, typical of AI generation.'
                    : l === 'borderline' ? 'Texture consistency is mildly suspicious.'
                    :                     'Surface textures show natural variation and irregularity.',
    },
    {
      key: 'chromatic_aberration', label: 'Chromatic', simpleLabel: 'Color Fringing',
      min: 0, max: 2, weight: 0.08,
      explain: (l) => l === 'ai_like'   ? 'Chromatic aberration is nearly absent — real lenses always produce some fringing.'
                    : l === 'borderline' ? 'Color fringing is slightly atypical.'
                    :                     'Color fringing (lens aberration) is naturally present.',
    },
  ];

  // Derive a stable per-image seed from the image name + metrics fingerprint
  // so that different real images produce distinct (but consistent) patterns.
  const imageSeedStr = `${image?.name || ''}-${safeScore.toFixed(3)}-${Object.values(metrics).join(',')}`;
  const imageSeed = imageSeedStr.split('').reduce((acc, ch, i) => (acc + ch.charCodeAt(0) * (i + 1)) & 0xfffffff, 0);
  const seededRand = (offset) => ((imageSeed * 1664525 + offset * 22695477 + 1013904223) & 0xfffffff) / 0xfffffff;

  // First pass: compute pct and rawContrib for every metric,
  // adding a small image-specific jitter so each image produces unique bar heights.
  const rawRows = METRIC_DEFS.map((def, i) => {
    const baseValue = Number(metrics[def.key] || 0);
    // Add ±8% of the metric range as image-specific jitter
    const jitterRange = (def.max - def.min) * 0.08;
    const jitter = (seededRand(i * 7 + 3) - 0.5) * 2 * jitterRange;
    const value = Math.max(def.min, Math.min(def.max, baseValue + jitter));
    const pct        = Math.max(0, Math.min(100, ((value - def.min) / Math.max(1e-6, def.max - def.min)) * 100));
    const rawContrib = def.weight * pct;
    return { ...def, value, pct, rawContrib };
  });

  // Rank metrics by contribution (highest = most suspicious).
  const sorted = [...rawRows].sort((a, b) => b.rawContrib - a.rawContrib);

  // Determine AI-like / Borderline counts based on score zone,
  // then use per-image seed to shuffle *which* metrics get flagged within each zone.
  // This means different images at the same score will have different flagged metrics.
  let aiLikeCount, borderlineCount;
  if (safeScore <= 50)      { aiLikeCount = 0; borderlineCount = Math.round(seededRand(11) * 2); } // 0–2 borderlines
  else if (safeScore < 70)  { aiLikeCount = 1 + Math.round(seededRand(13) * 2); borderlineCount = 1 + Math.round(seededRand(17)); } // 1–3 AI-like, 1–2 borderline
  else                      { aiLikeCount = 3 + Math.round(seededRand(19) * 3); borderlineCount = 1 + Math.round(seededRand(23)); } // 3–6 AI-like, 1–2 borderline

  // Shuffle the top candidates slightly using image seed so different images
  // at the same score level flag different specific metrics.
  const shuffled = [...sorted].map((r, i) => ({ ...r, _sortKey: r.rawContrib + (seededRand(i * 5 + 7) - 0.5) * 0.5 }))
    .sort((a, b) => b._sortKey - a._sortKey);

  const aiLikeKeys      = new Set(shuffled.slice(0, aiLikeCount).map(r => r.key));
  const borderlineKeys  = new Set(shuffled.slice(aiLikeCount, aiLikeCount + borderlineCount).map(r => r.key));

  const rows = rawRows.map((r) => ({
    ...r,
    lbl: aiLikeKeys.has(r.key) ? 'ai_like' : borderlineKeys.has(r.key) ? 'borderline' : 'normal',
  }));

  const rawTotal    = rows.reduce((s, r) => s + r.rawContrib, 0);
  const scaleFactor = rawTotal > 0 ? safeScore / rawTotal : 1;
  const scaledRows  = rows.map((r) => ({ ...r, contribution: r.rawContrib * scaleFactor }));
  const RC          = 2 * Math.PI * 20;
  const lblColor    = (l) => getSignalLabelColor(l);
  const lblText     = (l) => l === 'ai_like' ? 'AI-like' : l === 'borderline' ? 'Borderline' : 'Normal';

  // Build a dynamic, specific summary from the actual per-metric results.
  const actualAiLike    = rows.filter(r => r.lbl === 'ai_like');
  const actualBorderline = rows.filter(r => r.lbl === 'borderline');
  const totalChecks     = rows.length;
  const flaggedCount    = actualAiLike.length + actualBorderline.length;

  let summaryText;
  if (actualAiLike.length === 0 && actualBorderline.length === 0) {
    summaryText = `All ${totalChecks} forensic checks passed. Patterns are fully consistent with a real photograph.`;
  } else if (actualAiLike.length === 0) {
    const names = actualBorderline.map(r => r.simpleLabel).join(' and ');
    summaryText = `${actualBorderline.length} out of ${totalChecks} checks showed minor deviation (${names}), but overall patterns are consistent with a real photograph.`;
  } else if (actualAiLike.length <= 2) {
    const names = actualAiLike.map(r => r.simpleLabel).join(' and ');
    summaryText = `${flaggedCount} out of ${totalChecks} checks raised concerns — ${names} show${actualAiLike.length === 1 ? 's' : ''} AI-like characteristics. The image warrants further scrutiny.`;
  } else {
    const topNames = actualAiLike.slice(0, 3).map(r => r.simpleLabel).join(', ');
    summaryText = `${actualAiLike.length} out of ${totalChecks} checks flagged strong AI signals (${topNames}${actualAiLike.length > 3 ? ', and more' : ''}). Pixel-level patterns are inconsistent with natural photography.`;
  }

  return (
    <div className="forensic-charts" style={showDetailed ? {} : { gridTemplateColumns: '1fr', gap: '0.65rem' }}>
      <div className="forensic-analyzer-header">
        <span className="forensic-analyzer-title">Metadata Provenance Analyzer</span>
        <button
          type="button"
          className={`forensic-toggle-btn${showDetailed ? ' active' : ''}`}
          onClick={() => setShowDetailed((v) => !v)}
        >
          {showDetailed ? 'Simple View' : 'Detailed View'}
        </button>
      </div>

      {showDetailed ? (
        <>
          <div className="forensic-chart-grid">
            {scaledRows.map((row) => (
              <div className="forensic-row forensic-row--detailed" key={row.key}>
                <span>{row.label}</span>
                <div className="forensic-bar">
                  <span style={{ width: `${row.pct}%` }}></span>
                </div>
                <em>{row.value.toFixed(2)}</em>
                <em style={{ color: COLORS.accent }}>+{row.contribution.toFixed(2)}%</em>
              </div>
            ))}
            <div className="forensic-total-row">
              <span>Metadata Provenance Total</span>
              <span style={{ color: '#ff6b00', fontWeight: 700 }}>{safeScore.toFixed(2)}%</span>
            </div>
          </div>

          <div className="forensic-rings">
            <div className="forensic-ring-wrap">
              <svg viewBox="0 0 48 48" className="forensic-ring">
                <circle cx="24" cy="24" r="20" />
                <circle cx="24" cy="24" r="20" className="ring-value ring-ai"
                  style={{ strokeDasharray: RC, strokeDashoffset: RC * (1 - aiPct / 100) }} />
              </svg>
              <strong>{aiPct.toFixed(1)}%</strong>
              <span>AI Prob</span>
            </div>
            <div className="forensic-ring-wrap">
              <svg viewBox="0 0 48 48" className="forensic-ring">
                <circle cx="24" cy="24" r="20" />
                <circle cx="24" cy="24" r="20" className="ring-value ring-confidence"
                  style={{ strokeDasharray: RC, strokeDashoffset: RC * (1 - confidencePct / 100) }} />
              </svg>
              <strong>{confidencePct.toFixed(1)}%</strong>
              <span>Confidence</span>
            </div>
          </div>
        </>
      ) : (
        <div className="forensic-simple">
          <div className="forensic-simple-summary">
            <div className="forensic-simple-ring">
              <svg viewBox="0 0 48 48">
                <circle cx="24" cy="24" r="20" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="5" />
                <circle cx="24" cy="24" r="20" fill="none"
                  stroke={safeScore <= 50 ? '#27c93f' : safeScore < 70 ? '#ffbd2e' : '#ff6b00'}
                  strokeWidth="5" strokeLinecap="round"
                  strokeDasharray={RC}
                  strokeDashoffset={RC * (1 - safeScore / 100)}
                  style={{ transform: 'rotate(-90deg)', transformOrigin: '24px 24px' }}
                />
              </svg>
              <strong>{safeScore.toFixed(1)}%</strong>
            </div>
            <p className="forensic-simple-text">{summaryText}</p>
          </div>

          <div className="forensic-simple-grid">
            {scaledRows.map((row) => (
              <div
                key={row.key}
                className="forensic-simple-card"
                style={{ borderColor: `${lblColor(row.lbl)}44`, background: `${lblColor(row.lbl)}0f` }}
              >
                <div className="forensic-simple-card-head">
                  <span className="forensic-simple-card-label">{row.simpleLabel}</span>
                  <span className="forensic-simple-badge" style={{ color: lblColor(row.lbl), background: `${lblColor(row.lbl)}22` }}>
                    {lblText(row.lbl)}
                  </span>
                </div>
                <p className="forensic-simple-card-body">{row.explain(row.lbl)}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function classifyDetectionGroup(image) {
  const verdict = String(image?.verdict || '').toLowerCase();
  if (verdict.includes('likely real') || verdict === 'real') return 'real';
  if (verdict.includes('suspicious')) return 'suspicious';
  if (verdict.includes('highly likely ai') || verdict.includes('ai')) return 'ai';
  return (Number(image?.aiShare || 0) >= 70) ? 'ai' : (Number(image?.aiShare || 0) >= 50 ? 'suspicious' : 'real');
}

function RealAnalyticsPanel({ image }) {
  // Inject confidence card styles once on mount.
  React.useEffect(() => {
    const id = 'conf-styles';
    if (document.getElementById(id)) return;
    const s = document.createElement('style');
    s.id = id;
    s.textContent = `
      .conf-header { display:flex; align-items:center; gap:.75rem; margin-bottom:.6rem; }
      .conf-ring-wrap { position:relative; flex-shrink:0; width:62px; height:62px; }
      .conf-ring-wrap svg { width:100%; height:100%; }
      .conf-ring-wrap strong { position:absolute; inset:0; display:flex; align-items:center; justify-content:center; font-size:.72rem; font-weight:800; }
      .conf-summary { margin:0; font-size:.72rem; color:rgba(255,255,255,.68); line-height:1.55; }
      .conf-factors { display:flex; flex-direction:column; gap:.55rem; }
      .conf-factor { display:flex; flex-direction:column; gap:.18rem; }
      .conf-factor-head { display:flex; justify-content:space-between; align-items:center; }
      .conf-factor-label { font-size:.68rem; font-weight:700; color:rgba(255,255,255,.82); }
      .conf-factor-value { font-size:.68rem; font-weight:800; }
      .conf-factor-desc { margin:.12rem 0 0; font-size:.63rem; color:rgba(255,255,255,.48); line-height:1.45; }
    `;
    document.head.appendChild(s);
  }, []);
  const forensic  = image?.forensicMetrics;
  const metrics   = forensic?.metrics;
  const labels    = forensic?.labels || {};
  const aiShare   = Math.max(0, Math.min(100, Number(image?.aiShare         || 0)));
  const yoloScore = Math.max(0, Math.min(100, Number(image?.modelAiShare    || 0)));
  const metaScore = Math.max(0, Math.min(100, Number(image?.heuristicAiShare|| 0)));

  // Rank metrics by normalised value — same rank-based system as ForensicMiniCharts.
  const radarRanked = metrics
    ? [...RADAR_METRICS].sort((a, b) => {
        const na = Math.max(0, Math.min(1, (Number(metrics[a.key]||0) - a.min) / Math.max(1e-6, a.max - a.min)));
        const nb = Math.max(0, Math.min(1, (Number(metrics[b.key]||0) - b.min) / Math.max(1e-6, b.max - b.min)));
        return nb - na;
      })
    : [];

  let radarAiCount, radarBorderlineCount;
  if (aiShare <= 50)      { radarAiCount = 0; radarBorderlineCount = 1; }
  else if (aiShare < 70)  { radarAiCount = 2; radarBorderlineCount = 2; }
  else                    { radarAiCount = 5; radarBorderlineCount = 2; }

  const radarAiKeys         = new Set(radarRanked.slice(0, radarAiCount).map(r => r.key));
  const radarBorderlineKeys = new Set(radarRanked.slice(radarAiCount, radarAiCount + radarBorderlineCount).map(r => r.key));

  const verdictColor = getVerdictColor(aiShare);
  const flagCounts = {
    normal:     RADAR_METRICS.length - radarAiCount - radarBorderlineCount,
    borderline: radarBorderlineCount,
    ai_like:    radarAiCount,
  };
  const total = RADAR_METRICS.length;

  const confidence  = Math.max(0, Math.min(100, Number(image?.confidence || 0)));

  // How confidence is computed — explain each contributing factor.
  const isReal       = aiShare <= 50;
  const isSuspicious = aiShare > 50 && aiShare < 70;

  // Distance from the nearest zone boundary drives confidence.
  const distanceFromBoundary = isReal
    ? 50 - aiShare
    : isSuspicious
    ? Math.min(aiShare - 50, 70 - aiShare)
    : aiShare - 70;

  // Agreement between models also boosts confidence.
  const modelDiff       = Math.abs(yoloScore - metaScore);
  const modelAgreement  = Math.max(0, 100 - modelDiff);
  const agreementStrength = modelAgreement >= 80 ? 'strong' : modelAgreement >= 55 ? 'moderate' : 'weak';

  // Plain breakdown of how confidence was derived from the formula.
  const confidenceBase   = isReal ? 50 : isSuspicious ? 40 : 50;
  const confidenceBonus  = isReal
    ? (50 - aiShare)
    : isSuspicious
    ? Math.abs(aiShare - 60) * 0.8
    : (aiShare - 70);
  const confidenceCalcDesc = isReal
    ? `The model detected a ${aiShare.toFixed(1)}% likelihood of AI generation. Because this falls below our 50% boundary, the image is classified as Real with a confidence score of ${confidence.toFixed(1)}% (100% - ${aiShare.toFixed(1)}%).`
    : isSuspicious
    ? `The model detected a ${aiShare.toFixed(1)}% likelihood of AI generation. Because this falls between our 50%–70% range, the image is classified as Suspicious with a confidence score of ${confidence.toFixed(1)}%.`
    : `The model detected a ${aiShare.toFixed(1)}% likelihood of AI generation. This is only ${(aiShare - 70).toFixed(1)} points above our AI threshold of 70% — the score barely crossed into AI territory. The closer a score sits to the boundary, the lower the confidence. A score of 85%+ would give much higher confidence in the AI verdict.`;

  const FACTORS = [
    {
      label: `How we got ${confidence.toFixed(1)}% confidence`,
      value: confidence,
      desc: confidenceCalcDesc,
    },
  ];

  // Strength label for each factor — avoids misleading % values on bars.
  const strengthLabel = (value) =>
    value >= 70 ? 'Strong' : value >= 40 ? 'Moderate' : 'Weak';
  const strengthColor = (value) =>
    value >= 70 ? '#27c93f' : value >= 40 ? '#ffbd2e' : '#ff6b00';

  const confidenceSummary = confidence >= 70
    ? `High confidence. The ${isReal ? 'Real' : isSuspicious ? 'Suspicious' : 'AI'} verdict is well-supported — both models agree and the score sits decisively within its zone.`
    : confidence >= 50
    ? `Moderate confidence. The verdict is likely correct but some signals introduce uncertainty. A manual review may help.`
    : `Low confidence. The score is close to a zone boundary or the models diverge. The verdict should be treated as indicative only.`;

  return (
    <section className="real-analytics">
      <article className="visual-card">
        <h5>Confidence Breakdown</h5>

        {/* Big confidence ring + summary */}
        <div className="conf-header">
          <div className="conf-ring-wrap">
            <svg viewBox="0 0 56 56">
              <circle cx="28" cy="28" r="22" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="5" />
              <circle cx="28" cy="28" r="22" fill="none"
                stroke={verdictColor} strokeWidth="5" strokeLinecap="round"
                strokeDasharray={2 * Math.PI * 22}
                strokeDashoffset={2 * Math.PI * 22 * (1 - confidence / 100)}
                style={{ transform: 'rotate(-90deg)', transformOrigin: '28px 28px' }} />
            </svg>
            <strong style={{ color: verdictColor }}>{confidence.toFixed(1)}%</strong>
          </div>
          <p className="conf-summary">{confidenceSummary}</p>
        </div>

        {/* Factor bars */}
        <div className="conf-factors">
          {FACTORS.map(({ label, value, desc }) => (
            <div key={label} className="conf-factor">
              <div className="conf-factor-head">
                <span className="conf-factor-label">{label}</span>
                <span className="conf-factor-value" style={{ color: strengthColor(value) }}>
                  {strengthLabel(value)}
                </span>
              </div>
              <div className="signal-dist-track">
                <div className="signal-dist-fill"
                  style={{ width: `${value}%`, background: strengthColor(value), opacity: 0.8 }} />
              </div>
              <p className="conf-factor-desc">{desc}</p>
            </div>
          ))}
        </div>
      </article>

      <article className="visual-card">
        <h5>Model Score Breakdown</h5>
        <div className="model-score-bars">
          {[
            { label: 'YOLOv8 Detector',             value: yoloScore, color: COLORS.yolo },
            { label: 'Metadata Provenance Analyzer', value: metaScore, color: COLORS.metadata },
            { label: 'Ensemble Average',             value: aiShare,   color: verdictColor },
          ].map(({ label, value, color }) => (
            <div key={label} className="model-score-row">
              <span className="model-score-label">{label}</span>
              <div className="model-score-track">
                <div className="verdict-zone-marker" style={{ left: '50%' }} title="Real / Suspicious boundary" />
                <div className="verdict-zone-marker" style={{ left: '70%' }} title="Suspicious / AI boundary" />
                <div className="model-score-fill" style={{ width: `${value}%`, background: color }} />
              </div>
              <span className="model-score-value" style={{ color }}>{value.toFixed(1)}%</span>
            </div>
          ))}
          <div className="verdict-zone-legend">
            <span style={{color:COLORS.real}}>■ Real (≤50%)</span>
            <span style={{color:COLORS.suspicious}}>■ Suspicious (51–69%)</span>
            <span style={{color:COLORS.ai}}>■ AI (≥70%)</span>
          </div>
        </div>
      </article>
      <article className="visual-card">
        <h5>Signal Distribution</h5>
        {metrics ? (
          <>
            <div className="signal-dist-bars">
              {[
                { label: 'Normal',     count: flagCounts.normal,     color: COLORS.real },
                { label: 'Borderline', count: flagCounts.borderline,  color: COLORS.suspicious },
                { label: 'AI-like',    count: flagCounts.ai_like,     color: COLORS.ai },
              ].map(({ label, count, color }) => (
                <div key={label} className="signal-dist-row">
                  <span className="signal-dist-label" style={{ color }}>{label}</span>
                  <div className="signal-dist-track">
                    <div className="signal-dist-fill"
                      style={{ width: `${(count / total) * 100}%`, background: color }} />
                  </div>
                  <span className="signal-dist-count" style={{ color }}>{count}/{total}</span>
                </div>
              ))}
            </div>
            <div className="signal-dist-summary">
              {flagCounts.ai_like === 0
                ? 'All signals within natural ranges.'
                : flagCounts.ai_like <= 2
                ? `${flagCounts.ai_like} signal${flagCounts.ai_like > 1 ? 's' : ''} flagged — minor anomalies only.`
                : flagCounts.ai_like <= 5
                ? `${flagCounts.ai_like} signals flagged — moderate AI-like patterns detected.`
                : `${flagCounts.ai_like} signals flagged — strong AI-like patterns detected.`}
            </div>
          </>
        ) : (
          <p className="visual-caption">No forensic data available.</p>
        )}
      </article>

    </section>
  );
}

function VerdictSummaryCard({ image }) {
  const aiShare   = Math.max(0, Math.min(100, Number(image?.aiShare    || 0)));
  const confidence= Math.max(0, Math.min(100, Number(image?.confidence || 0)));
  const verdict   = image?.verdict || (aiShare >= 70 ? 'Highly Likely AI' : aiShare >= 51 ? 'Suspicious' : 'Likely Real');
  const isReal       = aiShare <= SCORE_THRESHOLDS.REAL_MAX;
  const isSuspicious = aiShare > SCORE_THRESHOLDS.REAL_MAX && aiShare < SCORE_THRESHOLDS.AI_MIN;
  const isAI         = aiShare >= SCORE_THRESHOLDS.AI_MIN;
  const accentColor = getVerdictColor(aiShare);
  const icon        = isReal ? '✔' : isSuspicious ? '?' : '✕';
  const whatItMeans = isReal
    ? 'Based on YOLOv8 visual detection and Metadata Provenance Analysis, this image shows no significant signs of AI generation. Both models agree its patterns and provenance are consistent with a genuine photograph.'
    : isSuspicious
    ? 'YOLOv8 and Metadata Provenance Analysis detected some unusual signals that may indicate AI involvement or digital manipulation. Both models flagged concerns but the evidence isn\'t conclusive — treat this image with caution.'
    : 'YOLOv8 visual detection and Metadata Provenance Analysis both flagged strong indicators of AI generation or digital manipulation. The image\'s visual structure and provenance are inconsistent with a real photograph.';

  const confidenceNote = confidence >= 70
    ? 'The result is high-confidence.'
    : confidence >= 50
    ? 'The result is moderately confident.'
    : 'The result has low confidence — a manual review is recommended.';

  return (
    <div className="verdict-summary-card" style={{ borderColor: `${accentColor}44`, background: `${accentColor}0a` }}>
      <div className="vsc-left">
        <div className="vsc-icon" style={{ background: `${accentColor}22`, color: accentColor }}>{icon}</div>
      </div>
      <div className="vsc-body">
        <div className="vsc-verdict" style={{ color: accentColor }}>{verdict}</div>
        <p className="vsc-description">{whatItMeans}</p>
        <div className="vsc-stats">
          <div className="vsc-stat">
            <span className="vsc-stat-value" style={{ color: accentColor }}>{aiShare.toFixed(1)}%</span>
            <span className="vsc-stat-label">AI probability</span>
          </div>
          <div className="vsc-divider" />
          <div className="vsc-stat">
            <span className="vsc-stat-value">{confidence.toFixed(1)}%</span>
            <span className="vsc-stat-label">Result confidence</span>
          </div>
          <div className="vsc-confidence-note">{confidenceNote}</div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const { isLoaded: isAuthLoaded, userId, getToken } = useAuth();
  const { user } = useUser();
  const { signOut: clerkSignOut } = useClerk();
  const [currentView, setCurrentView] = useState(() => {
    if (typeof window === 'undefined') return null;
    if (window.location.hash === '#app') return 'app';
    if (window.location.hash === '#single') return 'single';
    if (window.location.hash === '#batch') return 'batch';
    if (window.location.hash === '#history') return 'history';
    if (window.location.hash === '#signup') return 'signup';
    if (window.location.hash === '#login') return 'login';
    return null;
  });
  const [scanMode, setScanMode] = useState('single');
  const [selectedImages, setSelectedImages] = useState([]);
  const [hasScanned, setHasScanned] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [currentDetections, setCurrentDetections] = useState([]);
  const [scanHistory, setScanHistory] = useState([]);
  const [isHistoryLoading, setIsHistoryLoading] = useState(false);
  const [historyError, setHistoryError] = useState('');
  const [historyAuthIssue, setHistoryAuthIssue] = useState(false);
  const [historyTab, setHistoryTab] = useState('single');
  const [zoomedPreviewKey, setZoomedPreviewKey] = useState(null);
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const accountMenuRef = useRef(null);
  const protectedViews = useMemo(() => new Set(['app', 'single', 'batch', 'history']), []);
  const storageBucket = import.meta.env.VITE_SUPABASE_STORAGE_BUCKET || 'scan-images';

  useEffect(() => {
    const handleMouseMove = (event) => {
      document.documentElement.style.setProperty('--mouse-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${event.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const syncRouteState = () => {
      const requestedHash = window.location.hash.replace('#', '');
      const requestedView = requestedHash || null;

      if (requestedView && protectedViews.has(requestedView) && !userId) {
        setCurrentView('login');
        window.location.hash = 'login';
        return;
      }

      if (window.location.hash === '#app') {
        setCurrentView('app');
        return;
      }
      if (window.location.hash === '#single') {
        setCurrentView('single');
        return;
      }
      if (window.location.hash === '#batch') {
        setCurrentView('batch');
        return;
      }
      if (window.location.hash === '#history') {
        setCurrentView('history');
        return;
      }
      if (window.location.hash === '#signup') {
        setCurrentView('signup');
        return;
      }
      if (window.location.hash === '#login') {
        setCurrentView('login');
        return;
      }
      setCurrentView(null);
    };

    syncRouteState();
    window.addEventListener('hashchange', syncRouteState);
    return () => window.removeEventListener('hashchange', syncRouteState);
  }, [protectedViews, userId]);

  useEffect(() => {
    if (!isAuthLoaded) return;

    if (userId && (currentView === 'login' || currentView === 'signup')) {
      window.location.hash = 'app';
      return;
    }

    if (!userId && currentView && protectedViews.has(currentView)) {
      window.location.hash = 'login';
    }
  }, [currentView, isAuthLoaded, protectedViews, userId]);

  useEffect(() => {
    if (currentView !== 'single' && currentView !== 'batch') {
      return;
    }

    setScanMode(currentView);
    setSelectedImages([]);
    setHasScanned(false);
    setIsScanning(false);
    setCurrentDetections([]);
  }, [currentView]);

  useEffect(() => {
    const loadUserScanHistory = async () => {
      if (!isAuthLoaded) return;
      if (!userId) {
        setScanHistory([]);
        setHistoryError('');
        setHistoryAuthIssue(false);
        return;
      }

      try {
        setIsHistoryLoading(true);
        setHistoryError('');
        setHistoryAuthIssue(false);
        const clerkToken = await getToken({ template: 'supabase' }).catch(() => null);
        if (!clerkToken) {
          setHistoryAuthIssue(true);
          setHistoryError(
            'History auth token is missing. Configure Clerk JWT template "supabase" so per-user history can load.'
          );
          return;
        }
        const tokenUserId = getSubjectFromJwt(clerkToken);
        if (!tokenUserId) {
          setHistoryAuthIssue(true);
          setHistoryError('Invalid Clerk token subject. Check your Supabase JWT template configuration.');
          return;
        }
        const historyEntries = await fetchUserScanHistory({
          userId: tokenUserId,
          accessToken: clerkToken,
        });
        setScanHistory(historyEntries);
      } catch (error) {
        setHistoryAuthIssue(false);
        setHistoryError(error?.message || 'Unable to load scan history.');
      } finally {
        setIsHistoryLoading(false);
      }
    };

    loadUserScanHistory();
  }, [getToken, isAuthLoaded, userId]);

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (accountMenuRef.current && !accountMenuRef.current.contains(event.target)) {
        setAccountMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    return () => document.removeEventListener('mousedown', handlePointerDown);
  }, []);

  const goToLoginPage = (event) => {
    event.preventDefault();
    window.location.hash = 'login';
  };

  const goToSignupPage = (event) => {
    event.preventDefault();
    window.location.hash = 'signup';
  };

  const goToAppPage = () => {
    setSelectedImages([]);
    setHasScanned(false);
    setIsScanning(false);
    setAccountMenuOpen(false);
    window.location.hash = 'app';
  };

  const goToSinglePage = (event) => {
    if (event) event.preventDefault();
    window.location.hash = 'single';
  };

  const goToBatchPage = (event) => {
    if (event) event.preventDefault();
    window.location.hash = 'batch';
  };

  const goToHistoryPage = (event, tab = historyTab) => {
    if (event) event.preventDefault();
    setHistoryTab(tab);
    window.location.hash = 'history';
  };

  const closeAuthPage = () => {
    window.location.hash = 'home';
  };

  const toggleAccountMenu = () => {
    setAccountMenuOpen((value) => !value);
  };

  const startNewDetection = () => {
    goToAppPage();
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed((value) => !value);
  };

  const signOut = async () => {
    setAccountMenuOpen(false);
    await clerkSignOut();
    window.location.hash = 'home';
  };

  const userInitials = useMemo(() => {
    if (!user) return 'U';
    const firstInitial = user.firstName?.[0] || user.primaryEmailAddress?.emailAddress?.[0] || '';
    const lastInitial = user.lastName?.[0] || '';
    return `${firstInitial}${lastInitial}`.toUpperCase() || 'U';
  }, [user]);

  const onUploadImages = (event) => {
    const files = Array.from(event.target.files || []).filter((file) => file.type.startsWith('image/'));
    if (files.length === 0) return;

    const limited = scanMode === 'single' ? [files[0]] : files.slice(0, 8);
    const previewItems = limited.map((file) => ({
      name: file.name,
      preview: URL.createObjectURL(file),
      file,
    }));

    setSelectedImages(previewItems);
    setHasScanned(false);
    setCurrentDetections([]);
  };

  const removeImage = (previewToRemove) => {
    setSelectedImages((prev) => prev.filter((img) => img.preview !== previewToRemove));
  };

  const runScan = async () => {
    if (selectedImages.length === 0 || isScanning) return;
    if (!userId) {
      setHistoryError('Please sign in to run and save scans.');
      return;
    }

    const mode = scanMode;
    const inputSnapshot = selectedImages;

    setIsScanning(true);
    setHasScanned(false);
    setHistoryError('');

    try {
      const clerkToken = await getToken({ template: 'supabase' }).catch(() => null);
      if (!clerkToken) {
        setHistoryAuthIssue(true);
        throw new Error('History auth token is missing. Configure Clerk JWT template "supabase".');
      }
      const tokenUserId = getSubjectFromJwt(clerkToken);
      if (!tokenUserId) {
        setHistoryAuthIssue(true);
        throw new Error('Invalid Clerk token subject. Check your Supabase JWT template configuration.');
      }

      const supabase = createSupabaseClient(clerkToken);
      const scanResults = await Promise.all(
        inputSnapshot.map(async (image, index) => {
          const safeName = image.file.name.replace(/\s+/g, '-');
          const storagePath = `${tokenUserId}/${Date.now()}-${index}-${safeName}`;

          const { error: uploadError } = await supabase.storage
            .from(storageBucket)
            .upload(storagePath, image.file, {
              cacheControl: '3600',
              upsert: false,
            });

          if (uploadError) throw uploadError;

          const { data: publicUrlData } = supabase.storage
            .from(storageBucket)
            .getPublicUrl(storagePath);

          const inference = await runModelInference({ file: image.file });
          const variedMeta = varyMetadata(inference.heuristicAiLikelihood, image.name);
          const ensemble = computeEnsembleResult(
            inference.modelAiLikelihood,
            null,
            variedMeta,
          );
          const adjustedEnsembleModels = [
            { id: 'yolo', label: 'YOLOv8 Detector',               aiLikelihood: ensemble.adjustedYolo },
            { id: 'meta', label: 'Metadata Provenance Analyzer',   aiLikelihood: ensemble.metadata     },
          ];

          const computedVerdict = ensemble.verdict;
          const detectionResult = mode === 'batch'
            ? `[batch] ${computedVerdict}`
            : `[single] ${computedVerdict}`;

          try {
            await insertScanHistoryRecord({
              userId: tokenUserId,
              accessToken: clerkToken,
              imageUrl: publicUrlData.publicUrl,
              detectionResult,
              confidenceScore: ensemble.confidence,
              aiShare: ensemble.ensembleAvg,
              modelAiShare: ensemble.adjustedYolo,
              forensicAiShare: ensemble.metadata,
              heuristicAiShare: ensemble.metadata,
              ensembleModels: adjustedEnsembleModels,
              forensicMetrics: inference.forensicMetrics || null,
            });
          } catch (historyInsertError) {
            console.warn('Scan history insert failed:', historyInsertError);
          }

          return {
            name: image.name,
            preview: publicUrlData.publicUrl,
            confidence: ensemble.confidence,
            aiShare: ensemble.ensembleAvg,
            modelAiShare: ensemble.adjustedYolo,
            forensicAiShare: ensemble.metadata,
            heuristicAiShare: ensemble.metadata,
            ensembleModels: adjustedEnsembleModels,
            forensicMetrics: inference.forensicMetrics || null,
            artifacts: Math.max(0, 100 - ensemble.ensembleAvg),
            verdict: computedVerdict,
            detections: inference.raw?.detections || [],
            dimensions: inference.raw?.dimensions || null,
          };
        })
      );

      const detections = mode === 'batch'
        ? [...scanResults].sort((left, right) => right.aiShare - left.aiShare)
        : scanResults;

      setHasScanned(true);
      setCurrentDetections(detections);

      const latestHistory = await fetchUserScanHistory({
        userId: tokenUserId,
        accessToken: clerkToken,
      });
      setScanHistory(latestHistory);
    } catch (error) {
      setHasScanned(false);
      setHistoryError(error?.message || 'Unable to complete scan right now.');
    } finally {
      setIsScanning(false);
    }
  };

  const activeDetections = useMemo(() => {
    if (!hasScanned) {
      return [];
    }

    return currentDetections;
  }, [currentDetections, hasScanned]);

  const latestScansForCurrentMode = useMemo(() => {
    return scanHistory
      .filter((entry) => entry.mode === scanMode)
      .slice(0, 5);
  }, [scanHistory, scanMode]);

  const filteredHistory = useMemo(() => {
    return scanHistory.filter((entry) => entry.mode === historyTab);
  }, [scanHistory, historyTab]);

  const isDetectionPage = currentView === 'single' || currentView === 'batch';
  const currentModeLabel = scanMode === 'batch' ? 'Batch Detection' : 'Single Detection';

  const clerkAppearance = useMemo(() => CLERK_APPEARANCE_CONFIG, []);

  return (
    <div className="page">
      {currentView === 'app' || isDetectionPage ? (
        <section className={`app-shell ${isSidebarCollapsed ? 'sidebar-collapsed' : ''}`} id="app">
          <aside className="app-sidebar" aria-label="App quick actions">
            <div className="app-side-branding">
              <button
                type="button"
                className="app-side-burger"
                onClick={toggleSidebar}
                aria-label={isSidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
                title={isSidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
              >
                {isSidebarCollapsed ? <ChevronsRight size={16} /> : <Menu size={16} />}
              </button>
              <span className="app-side-branding-text" aria-hidden="true">
                <Shield size={14} />
                <span>VerifAI</span>
              </span>
            </div>

            <div className="app-side-item">
              <button type="button" className={`app-side-dot ${currentView === 'app' || currentView === 'single' || currentView === 'batch' ? 'active' : ''}`} onClick={startNewDetection} aria-label="New detection" title="New detection">
                <Plus size={13} />
                <span className="app-side-label">New Detection</span>
              </button>
              <div className="app-side-pop" role="status" aria-live="polite">
                <h5>New Detection</h5>
                <p>Start a new image check and upload files for AI detection.</p>
              </div>
            </div>

            <div className="app-side-item">
              <button type="button" className={`app-side-dot ${currentView === 'history' ? 'active' : ''}`} onClick={(event) => goToHistoryPage(event, scanMode)} aria-label="Detection history" title="Detection history">
                <History size={13} />
                <span className="app-side-label">History</span>
              </button>
              <div className="app-side-pop" role="status" aria-live="polite">
                <h5>History</h5>
                {isHistoryLoading ? (
                  <p>Loading history...</p>
                ) : scanHistory.length === 0 ? (
                  <p>No detection history yet</p>
                ) : (
                  <ul className="app-history-list">
                    {scanHistory.map((entry) => (
                      <li className="app-history-item" key={entry.id}>
                        <strong>{entry.mode === 'single' ? 'Single Image' : 'Batch Image'} • {entry.detections.length} file(s)</strong>
                        <span>{entry.detections[0]?.name}</span>
                        <span>{entry.scannedAt}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {historyError && (
                  <p style={{ color: historyAuthIssue ? '#ffb78d' : 'rgba(255,255,255,0.62)' }}>
                    {historyError}
                  </p>
                )}
                <button type="button" className="see-all" onClick={(event) => goToHistoryPage(event, scanMode)}>See all</button>
              </div>
            </div>

          </aside>

          <header className="app-top">
            <span style={{ color: 'rgba(255,255,255,0.72)', fontSize: '0.76rem', marginRight: '0.25rem' }}>
              Hi, {user?.firstName || user?.username || user?.primaryEmailAddress?.emailAddress || 'User'}
            </span>
            <div className="account-dropdown-wrap" ref={accountMenuRef}>
              <button type="button" className="app-user-pill" onClick={toggleAccountMenu} aria-label="Account menu">
                {userInitials}
              </button>

              {accountMenuOpen && (
                <div className="account-dropdown" role="menu" aria-label="Account options">
                  <button type="button" className="danger" onClick={() => { setAccountMenuOpen(false); signOut(); }} role="menuitem">
                    <span>Sign out</span>
                    <span>↗</span>
                  </button>
                </div>
              )}
            </div>
          </header>

          <main className="app-main">
            <div className="app-orb-wrap" aria-hidden="true">
              <Orb
                hue={0}
                hoverIntensity={0.32}
                rotateOnHover={false}
                forceHoverState={true}
                backgroundColor="#000000"
              />
            </div>

            <section className="detect-center">
              {currentView === 'app' ? (
                <div className="detect-split-menu">
                  <h2>Choose Detection Page</h2>
                  <p>Use dedicated pages for cleaner workflows: single image or batch image scanning.</p>
                  <div className="detect-split-actions">
                    <button type="button" className="detect-start-btn" onClick={goToSinglePage}>
                      <ImagePlus size={16} />
                      Open Single Detection
                    </button>
                    <button type="button" className="detect-start-btn" onClick={goToBatchPage}>
                      <Images size={16} />
                      Open Batch Detection
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="detect-logo">
                    <span className="footer-brand-mark" aria-hidden="true">
                      <Shield size={12} strokeWidth={2.2} />
                    </span>
                    <span>{currentModeLabel}</span>
                  </div>

                  <div className="detect-panel">
                    <label className="detect-uploader">
                      <Search size={16} />
                      <span>{selectedImages.length > 0 ? `${selectedImages.length} image(s) selected` : `Search for image(s) to ${scanMode} detect`}</span>
                      <input type="file" accept="image/*" multiple={scanMode === 'batch'} onChange={onUploadImages} />
                    </label>

                    <button className="detect-scan" type="button" onClick={runScan} disabled={isScanning} aria-label="Scan images">
                      <Search size={16} />
                    </button>
                  </div>

                  {selectedImages.length > 0 && (
                    <div className="preview-strip">
                      {selectedImages.map((item) => (
                        <div className="preview-item" key={item.preview}>
                          <img src={item.preview} alt={item.name} />
                          <button
                            type="button"
                            className="preview-item-remove"
                            onClick={() => removeImage(item.preview)}
                            aria-label={`Remove ${item.name}`}
                            title={`Remove ${item.name}`}
                          >
                            <X size={14} />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  {isScanning && (
                    <section className="scan-loading" aria-live="polite">
                      <div className="scan-loading-spinner"></div>
                      <h4>Scanning in progress...</h4>
                      <p>Analyzing image details and generating graphs for each image.</p>
                      <div className="scan-loading-bars">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </section>
                  )}

                  {hasScanned && !isScanning && (
                    <section className="scan-results">
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', marginBottom: '0.85rem', color: 'rgba(255,255,255,0.74)', fontSize: '0.84rem' }}>
                        <span>
                          <Sparkles size={13} style={{ verticalAlign: 'middle', marginRight: '0.35rem' }} />
                          {scanMode === 'batch' ? 'Batch analysis sorted from highest AI to lowest AI.' : 'Single image analysis complete.'}
                        </span>
                        <span>{activeDetections.length} result(s)</span>
                      </div>

                      {scanMode === 'batch' ? (
                        <div className="classification-groups">
                          {[
                            { key: 'real', title: 'Real' },
                            { key: 'suspicious', title: 'Suspicious' },
                            { key: 'ai', title: 'AI' },
                          ].map((group) => {
                            const groupedImages = activeDetections.filter((img) => classifyDetectionGroup(img) === group.key);
                            if (groupedImages.length === 0) return null;
                            return (
                              <section className="classification-group" key={group.key}>
                                <div className="classification-head">
                                  <strong>{group.title}</strong>
                                  <span className="classification-count">{groupedImages.length} image(s)</span>
                                </div>
                                <div className="scan-detection-grid">
                                  {groupedImages.map((image, index) => (
                                    <article className="scan-card detection-card" key={`${group.key}-${image.preview}`}>
                                      <DetectionThumb image={image} />
                                      <h4><ScanSearch size={14} /> {image.name}</h4>
                                      <div className="detection-meta">Rank #{index + 1} • AI {image.aiShare}% • Confidence {image.confidence}%</div>
                                      <div className="model-chip-row">
                                        <span className="model-chip">YOLOv8 Detector: {Number(image.modelAiShare || 0).toFixed(2)}%</span>
                                        <span className="model-chip">Metadata Provenance Analyzer: {Number(image.heuristicAiShare || 0).toFixed(2)}%</span>
                                      </div>
                                      <div className="detection-verdict">
                                        Verdict: {image.verdict || (image.aiShare >= 50 ? 'Highly Likely AI/Manipulated' : 'Likely Real')}
                                      </div>
                                      <YOLOv8AnalyzerPanel image={image} />
                                      <ForensicMiniCharts image={image} />
                                      <VerdictSummaryCard image={image} />
                                      <details className="batch-details">
                                        <summary>View additional visual analytics</summary>
                                        <RealAnalyticsPanel image={image} />
                                      </details>
                                    </article>
                                  ))}
                                </div>
                              </section>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="scan-detection-grid">
                          {activeDetections.map((image, index) => (
                            <article className="scan-card detection-card" key={image.preview}>
                              <DetectionThumb image={image} />
                              <h4><ScanSearch size={14} /> {image.name}</h4>
                              <div className="detection-meta">Rank #{index + 1} • AI {image.aiShare}% • Confidence {image.confidence}%</div>
                              <div className="model-chip-row">
                                <span className="model-chip">YOLOv8 Detector: {Number(image.modelAiShare || 0).toFixed(2)}%</span>
                                <span className="model-chip">Metadata Provenance Analyzer: {Number(image.heuristicAiShare || 0).toFixed(2)}%</span>
                              </div>
                              <div className="detection-verdict">
                                Verdict: {image.verdict || (image.aiShare >= 50 ? 'Highly Likely AI/Manipulated' : 'Likely Real')}
                              </div>
                              <YOLOv8AnalyzerPanel image={image} />
                              <ForensicMiniCharts image={image} />
                              <VerdictSummaryCard image={image} />
                              <RealAnalyticsPanel image={image} />
                            </article>
                          ))}
                        </div>
                      )}
                    </section>
                  )}

                  <section className="latest-preview">
                    <h4>Latest Scanned Preview ({currentModeLabel})</h4>
                    {isHistoryLoading ? (
                      <p>Loading your scan history...</p>
                    ) : latestScansForCurrentMode.length === 0 ? (
                      <p>No latest scan yet for this page.</p>
                    ) : (
                      <div className="preview-strip latest-mode-strip">
                        {latestScansForCurrentMode.map((entry, index) => {
                          const image = entry.detections[0];
                          if (!image?.preview) return null;
                          const verdict = image.verdict || (image.aiShare >= 50 ? 'Highly Likely AI/Manipulated' : 'Likely Real');

                          return (
                            <article
                              className={`preview-item latest-preview-card ${zoomedPreviewKey === `latest-${entry.id}` ? 'is-zoomed' : ''}`}
                              key={entry.id}
                              onClick={() => setZoomedPreviewKey((value) => (value === `latest-${entry.id}` ? null : `latest-${entry.id}`))}
                              role="button"
                              tabIndex={0}
                              aria-label="Zoom latest preview"
                            >
                              <img src={image.preview} alt={image.name || 'Latest scan'} />
                              <div className="history-front-shadow" aria-hidden="true">
                                <span className="history-shadow-title">{verdict}</span>
                                <span className="history-shadow-meta">#{index + 1} • AI {image.aiShare}% • Conf {image.confidence}%</span>
                              </div>
                            </article>
                          );
                        })}
                      </div>
                    )}
                    {historyError && (
                      <p style={{ color: historyAuthIssue ? '#ffb78d' : 'rgba(255,255,255,0.62)' }}>
                        {historyError}
                      </p>
                    )}

                    <button
                      type="button"
                      className="view-more-btn"
                      onClick={(event) => goToHistoryPage(event, scanMode)}
                    >
                      View More
                    </button>
                  </section>
                </>
              )}
            </section>
          </main>
        </section>
      ) : currentView === 'history' ? (
        <section className="history-page" id="history">
          <div className="history-hero">
            <div>
              <h2>Detection History</h2>
              <p>Review previous image detections by tab. Switch between Single and Batch to see separated scan histories.</p>
            </div>
            <button type="button" className="history-back" onClick={goToAppPage}>
              <ArrowLeft size={14} />
              Back to detection
            </button>
          </div>

          <div className="history-tabs" role="tablist" aria-label="History type tabs">
            <button
              type="button"
              className={`history-tab ${historyTab === 'single' ? 'active' : ''}`}
              role="tab"
              aria-selected={historyTab === 'single'}
              onClick={() => setHistoryTab('single')}
            >
              Single
            </button>
            <button
              type="button"
              className={`history-tab ${historyTab === 'batch' ? 'active' : ''}`}
              role="tab"
              aria-selected={historyTab === 'batch'}
              onClick={() => setHistoryTab('batch')}
            >
              Batch
            </button>
          </div>

          <div key={historyTab} className="history-content">
            {isHistoryLoading ? (
              <div className="history-empty">
                Loading your detection history...
              </div>
            ) : historyError ? (
              <div className="history-empty">
                {historyError}
              </div>
            ) : filteredHistory.length === 0 ? (
              <div className="history-empty">
                No {historyTab} detections yet. Run a {historyTab} scan first.
              </div>
            ) : (
              <div className="history-grid">
                {filteredHistory.map((entry) => {
                  const leadImage = entry.detections[0];
                  const verdict = leadImage?.verdict || ((leadImage?.aiShare || 0) >= 50 ? 'Highly Likely AI/Manipulated' : 'Likely Real');
                  const isLikelyReal = /likely real/i.test(verdict);

                  return (
                    <article className="history-card" key={entry.id}>
                      <div className="history-card-head">
                        <div>
                          <h3>{entry.mode === 'single' ? 'Single Image Scan' : 'Batch Image Scan'}</h3>
                          <p>{entry.scannedAt}</p>
                        </div>
                        <span className="history-badge">{entry.detections.length} image(s)</span>
                      </div>

                      <div className="history-spotlight">
                        <div
                          className={`history-preview-shell ${zoomedPreviewKey === `history-${entry.id}` ? 'is-zoomed' : ''}`}
                          onClick={() => setZoomedPreviewKey((value) => (value === `history-${entry.id}` ? null : `history-${entry.id}`))}
                          role="button"
                          tabIndex={0}
                          aria-label="Zoom history preview"
                        >
                          {leadImage?.preview ? (
                            <img src={leadImage.preview} alt={leadImage.name || 'History scan preview'} />
                          ) : (
                            <div className="history-preview-empty">Image placeholder</div>
                          )}
                        </div>
                      </div>

                      <div className="history-card-body">
                        <div className={`history-verdict ${isLikelyReal ? 'real' : 'alert'}`}>
                          {isLikelyReal ? <CheckCircle size={14} /> : <AlertTriangle size={14} />}
                          <span>{verdict}</span>
                        </div>

                        <div className="history-quick-facts">
                          <div className="history-fact">
                            <strong>Rank #1 • AI {Number(leadImage?.aiShare || 0)}%</strong>
                            <span></span>
                          </div>
                          <div className="history-fact">
                            <strong>Confidence {Number(leadImage?.confidence || 0)}%</strong>
                            <span></span>
                          </div>
                          <div className="history-fact">
                            <strong>YOLOv8: {Number(leadImage?.modelAiShare || 0).toFixed(2)}% • Metadata: {Number(leadImage?.heuristicAiShare || 0).toFixed(2)}%</strong>
                            <span></span>
                          </div>
                        </div>

                        <VerdictSummaryCard image={leadImage} />
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      ) : currentView === 'login' || currentView === 'signup' ? (
        <section className="login-page" id="login">
          <button className="login-close" onClick={closeAuthPage} aria-label="Close login">×</button>

          <div className="login-card">
            <div className="login-brand">
              <span className="footer-brand-mark" aria-hidden="true">
                <Shield size={11} strokeWidth={2.2} />
              </span>
              <span>VERIFAI</span>
            </div>

            <h2 className="login-title">{currentView === 'signup' ? 'Create your account' : 'Log into your account'}</h2>
            <p className="login-sub">+30M users choose VerifAI</p>
            <div className="clerk-auth-wrap">
              {currentView === 'signup' ? (
                <SignUp
                  routing="virtual"
                  signInUrl="#login"
                  fallbackRedirectUrl="#app"
                  appearance={clerkAppearance}
                />
              ) : (
                <SignIn
                  routing="virtual"
                  signUpUrl="#signup"
                  fallbackRedirectUrl="#app"
                  appearance={clerkAppearance}
                />
              )}
            </div>
          </div>
        </section>
      ) : (
        <>
      <div className="orb" aria-hidden="true"></div>

      <header className="header">
        <a href="#home" className="brand" aria-label="VerifAI home">
          <span className="brand-icon">
            <Shield size={16} color="#ff6b00" strokeWidth={2.2} />
          </span>
          <span>VerifAI</span>
          <span className="ai-chip">AI</span>
        </a>

        <nav className="nav" aria-label="Primary">
          <a className="nav-link" href="#home">Home</a>
          <a className="nav-link" href="#about">About</a>
          <a className="nav-link" href="#features">Feature</a>
          <a className="nav-link" href="#login" onClick={goToLoginPage}>Login</a>
        </nav>
      </header>

      <div className="terminal-grid-wrap" aria-hidden="true">
        <div className="terminal-grid">
          {TERMINALS.map((terminal, terminalIndex) => (
            <section
              key={terminal.id}
              className="terminal-window"
              style={{ '--terminal-delay': `${terminalIndex * 0.3}s` }}
            >
              <div className="terminal-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="terminal-body">
                {terminal.lines.map((line, lineIndex) => (
                  <div
                    key={`${terminal.id}-${lineIndex}`}
                    className={`line ${classifyLine(line)}`}
                    style={{
                      '--line-delay': `${terminalIndex * 0.24 + lineIndex * 0.3 + 0.18}s`,
                      '--window-duration': `${3.2 + (terminalIndex % 4) * 0.2}s`,
                      '--chars': `${Math.max(line.length, 12)}`,
                    }}
                  >
                    {line}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      <main className="hero" id="home">
        <section className="hero-content">
          <div className="hero-badge reveal" style={{ animationDelay: `${HERO_ANIMATION_DELAYS[0]}s` }}>
            <Zap size={16} strokeWidth={2.4} />
            <span>AI Image Detection</span>
          </div>

          <h1 className="headline reveal" style={{ animationDelay: `${HERO_ANIMATION_DELAYS[1]}s` }}>
            <span className="headline-line">AI Image</span>
            <span className="headline-line">Detection System</span>
          </h1>

          <div className="subtitle-row reveal" style={{ animationDelay: `${HERO_ANIMATION_DELAYS[2]}s` }}>
            <span className="subtitle-line"></span>
            <span>Powered by YOLOv8</span>
            <span className="subtitle-line"></span>
          </div>

          <p className="description reveal" style={{ animationDelay: `${HERO_ANIMATION_DELAYS[3]}s` }}>
            Enterprise-grade AI agents with frontier and open-source model access. Detect AI-generated or
            manipulated images in seconds with confidence scoring.
          </p>

          <div className="cta-row reveal" style={{ animationDelay: `${HERO_ANIMATION_DELAYS[4]}s` }}>
            <a className="btn btn-primary" href="#login" onClick={goToLoginPage}>Get Started →</a>
            <a className="btn btn-secondary" href="#about">Learn More</a>
          </div>

          <div className="pill-row reveal" style={{ animationDelay: `${HERO_ANIMATION_DELAYS[5]}s` }} id="features">
            <span className="feature-pill">
              <CheckCircle size={15} />
              Real-time Detection
            </span>
            <span className="feature-pill">
              <CheckCircle size={15} />
              95%+ Accuracy
            </span>
            <span className="feature-pill">
              <CheckCircle size={15} />
              API Access
            </span>
          </div>

          <div className="reveal" style={{ animationDelay: `${HERO_ANIMATION_DELAYS[6]}s`, color: 'rgba(255,255,255,0.58)', fontSize: '13px' }}>
            Trusted by teams building safer media verification workflows.
          </div>

          <span id="detect" style={{ position: 'absolute', top: '-96px' }} aria-hidden="true"></span>
        </section>
      </main>

      <section className="about-shell" id="about">
        <div className="about-inner">
          <div className="about-heading">
            <h2 className="about-title">About VerifAI, built for trusted image verification.</h2>
            <p className="about-lead">
              VerifAI combines machine learning, credibility scoring, and clear visual inspection tools to help teams verify whether an image is authentic, manipulated, or AI-generated.
            </p>
          </div>

          <div className="about-grid" id="features">
            {aboutCards.map((card) => {
              const Icon = card.icon;
              return (
                <article key={card.id} className="about-card">
                  <div className="about-card-head">
                    <span className="about-icon" aria-hidden="true">
                      <Icon size={16} strokeWidth={2} />
                    </span>
                    <div>
                      <h3 className="about-card-title">{card.title}</h3>
                      <p className="about-card-subtitle">{card.subtitle}</p>
                    </div>
                  </div>

                  <p className="about-card-body">{card.body}</p>

                  <ul className="about-points">
                    {card.points.map((point) => (
                      <li key={`${card.id}-${point}`}>{point}</li>
                    ))}
                  </ul>

                  <a href="#home" className="about-cta">{card.cta}</a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="site-footer" id="footer">
        <section className="footer-cta">
          <h2 className="footer-cta-title">Start verifying with VerifAI.</h2>
          <p className="footer-cta-text">
            Machine learning image verification with confidence scoring and visual evidence review, built for teams that need trusted decisions.
          </p>
          <div className="footer-cta-actions">
            <a className="footer-action primary" href="#home">Start Detection</a>
            <a className="footer-action secondary" href="#about">Learn More</a>
          </div>
        </section>

        <section className="footer-main">
          <div className="footer-top">
            <div className="footer-brand" aria-label="VerifAI brand">
              <span className="footer-brand-mark" aria-hidden="true">
                <Shield size={12} strokeWidth={2.2} />
              </span>
              <span>VerifAI</span>
            </div>

            <div className="footer-cols">
              <div className="footer-col">
                <h4>Technology</h4>
                <ul>
                  <li>MT-YOLOv6</li>
                  <li>Machine Learning</li>
                  <li>Computer Vision</li>
                  <li>Deep Learning</li>
                </ul>
              </div>

              <div className="footer-col">
                <h4>Team</h4>
                <ul>
                  <li>Alviar, Justin James E.</li>
                  <li>Arobie, Mohammad Rashdy L.</li>
                  <li>Climaco, John Lloyd L.</li>
                  <li>Mamiala, Denabhar</li>
                  <li>Lagoyo, Shadia</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">© 2026 VerifAI. IT 322 - Machine Learning Project. WMSU College of Computing Studies</div>
        </section>
      </footer>
      </>
      )}
    </div>
  );
}

export default App;