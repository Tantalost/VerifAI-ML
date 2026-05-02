/**
 * Application Constants
 * Contains all static configuration, data, and theme colors
 */

// ── Animation Configuration ──────────────────────────────────────────────────
export const HERO_ANIMATION_DELAYS = [0.2, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9];

export const TERMINALS = [
  {
    id: 'model-init',
    lines: [
      '$ verifai init --model yolov8',
      '[INFO] Loading YOLOv8 weights...',
      '[SUCCESS] Model initialized',
      '[INFO] GPU acceleration enabled',
      '[READY] Waiting for input',
    ],
  },
  {
    id: 'image-analysis',
    lines: [
      '$ verifai analyze input.jpg',
      '[SCAN] Analyzing image features...',
      '[DETECT] Neural artifacts found',
      '[SCORE] Confidence: 94.7%',
      '[RESULT] AI-generated: TRUE',
    ],
  },
  {
    id: 'batch-process',
    lines: [
      '$ verifai batch --dir ./images',
      '[INFO] Found 247 images',
      '[PROGRESS] Processing... 45/247',
      '[STATS] Real: 132 | AI: 115',
      '[TIME] Avg: 0.32s per image',
    ],
  },
  {
    id: 'api-server',
    lines: [
      '$ verifai serve --port 8080',
      '[SERVER] Starting API server...',
      '[LIVE] https://api.verifai.dev',
      '[HEALTH] All systems operational',
      '[REQUESTS] 1.2M/day processed',
    ],
  },
  {
    id: 'training-log',
    lines: [
      '$ verifai train --epochs 100',
      '[EPOCH 98/100] Loss: 0.0234',
      '[VAL] Accuracy: 96.8%',
      '[CHECKPOINT] Model saved',
      '[DONE] Training complete',
    ],
  },
  {
    id: 'detection-real',
    lines: [
      '$ verifai detect photo_2024.png',
      '[ANALYZING] Compression artifacts',
      '[CHECK] EXIF metadata intact',
      '[SCAN] No AI signatures found',
      '[RESULT] Real image: 98.2%',
    ],
  },
  {
    id: 'security-scan',
    lines: [
      '$ verifai audit --deep-scan',
      '[FORENSIC] Pixel-level analysis',
      '[DETECT] Diffusion patterns found',
      '[TRACE] Generated via Stable Diff.',
      '[CONFIDENCE] 99.1% AI-made',
    ],
  },
  {
    id: 'performance',
    lines: [
      '$ verifai benchmark --gpu',
      '[TEST] Processing 1000 images...',
      '[SPEED] 312 images/second',
      '[MEMORY] 2.4GB VRAM used',
      '[SCORE] Performance: Excellent',
    ],
  },
];

// ── About Section Cards ──────────────────────────────────────────────────────
// NOTE: Icon components (BrainCircuit, BarChart3, etc.) are imported separately in App.jsx
export const ABOUT_CARDS_CONFIG = [
  {
    id: 'ai-tech',
    iconName: 'BrainCircuit',
    title: 'Advanced AI Technology',
    subtitle: 'Powered by MT-YOLOv6 for real-time detection',
    body: 'VerifAI is a cutting-edge Machine Learning-based AI Image Detection System designed to combat the growing threat of AI-generated misinformation.',
    points: ['Real-time inference pipeline', 'Architecture tuned for detection quality', 'Production-grade model serving'],
    cta: 'Learn the Model',
  },
  {
    id: 'credibility',
    iconName: 'BarChart3',
    title: 'Credibility Scoring',
    subtitle: 'Quantitative reliability assessment',
    body: 'The system integrates sophisticated credibility scoring mechanisms to provide users with comprehensive insights about image reliability.',
    points: ['Confidence score breakdown', 'Risk-weighted interpretation', 'Actionable verification hints'],
    cta: 'View Scoring',
  },
  {
    id: 'realtime',
    iconName: 'Gauge',
    title: 'Real-time Processing',
    subtitle: 'Instant analysis and results',
    body: 'Using the advanced MT-YOLOv6 architecture, our system analyzes visual content to determine authenticity with remarkable accuracy.',
    points: ['Fast queue execution', 'Low-latency result delivery', 'Batch and single-image modes'],
    cta: 'Try Processing',
  },
  {
    id: 'privacy',
    iconName: 'Lock',
    title: 'Privacy Protection',
    subtitle: 'Secure image processing',
    body: 'VerifAI helps create a safer digital environment by processing visual evidence with strong privacy-first safeguards.',
    points: ['Secure upload handling', 'Controlled access workflow', 'Safety-focused data flow'],
    cta: 'Read Privacy',
  },
  {
    id: 'visual-features',
    iconName: 'ScanSearch',
    title: 'Visual Feature Extraction',
    subtitle: 'AI artifact and pattern analysis',
    body: 'Identifies unique patterns and anomalies associated with generated and manipulated visual media.',
    points: ['Artifact localization', 'Signal consistency checks', 'Deep feature comparison'],
    cta: 'Explore Detection',
  },
  {
    id: 'annotations',
    iconName: 'MapPinned',
    title: 'Visual Annotations',
    subtitle: 'Highlighted suspicious regions',
    body: 'Detected anomalies and AI signatures are surfaced in clear overlays to support fast human review.',
    points: ['Focused region highlights', 'Review-friendly overlays', 'Clear audit trail context'],
    cta: 'See Annotations',
  },
];

// ── Anomaly Metadata ─────────────────────────────────────────────────────────
export const ANOMALY_META = {
  'warped':               { simple: 'Warped Region',          desc: 'An area of the image appears geometrically distorted, which is common in AI-generated content.' },
  'weird composition':    { simple: 'Odd Composition',         desc: 'The spatial arrangement of elements looks unnatural or inconsistent with real-world photography.' },
  'texture inconsistency':{ simple: 'Texture Mismatch',        desc: 'Surface textures in this region are unnaturally uniform or repeat in a way real materials don\'t.' },
  'edge artifact':        { simple: 'Edge Artifact',           desc: 'Object edges in this area show blending or haloing typical of AI generation or compositing.' },
  'lighting mismatch':    { simple: 'Lighting Inconsistency',  desc: 'Light direction or shadow intensity in this region doesn\'t match the rest of the image.' },
  'symmetry anomaly':     { simple: 'Unnatural Symmetry',      desc: 'This region shows near-perfect symmetry that is rarely seen in natural photography.' },
  'blended boundary':     { simple: 'Blended Boundary',        desc: 'The transition between objects or regions appears artificially smooth, a common AI tell.' },
  'unnatural detail':     { simple: 'Unnatural Detail',        desc: 'Fine details in this area look synthetically generated rather than captured by a real camera.' },
};

// ── Theme Colors ─────────────────────────────────────────────────────────────
export const COLORS = {
  real:        '#27c93f',  // Green - Real/Normal images
  suspicious:  '#ffbd2e',  // Yellow - Suspicious/Borderline
  ai:          '#ff6b00',  // Orange - AI-generated
  
  // Model score colors
  yolo:        '#818cf8',  // Indigo - YOLOv8 Detector
  metadata:    '#38bdf8',  // Blue - Metadata Provenance Analyzer
  accent:      '#ff9e61',  // Light orange - Accent elements
  
  // UI colors
  white:       '#ffffff',
  black:       '#000000',
  darkBg:      '#0a0a0a',
  
  // RGBA variants for transparency
  realLight:        '#27c93f22',
  realVeryLight:    '#27c93f0f',
  realOverlay:      '#27c93f44',
  
  suspiciousLight:  '#ffbd2e22',  
  suspiciousVeryLight: '#ffbd2e0f',
  suspiciousOverlay: '#ffbd2e44',
  
  aiLight:      '#ff6b0022',
  aiVeryLight:  '#ff6b000f',
  aiOverlay:    '#ff6b0044',
};

// ── Clerk Theme Configuration ────────────────────────────────────────────────
export const CLERK_APPEARANCE_CONFIG = {
  variables: {
    colorPrimary: COLORS.ai,
    colorBackground: COLORS.darkBg,
    colorText: COLORS.white,
    colorTextSecondary: 'rgba(255, 255, 255, 0.68)',
    colorInputBackground: 'rgba(255, 255, 255, 0.03)',
    colorInputText: COLORS.white,
    borderRadius: '12px',
  },
  elements: {
    card: 'cl-card',
    rootBox: 'cl-rootBox',
    cardBox: 'cl-cardBox',
    form: 'cl-form',
    headerTitle: 'cl-headerTitle',
    headerSubtitle: 'cl-headerSubtitle',
    formFieldLabel: 'cl-formFieldLabel',
    formFieldInput: 'cl-formFieldInput',
    formButtonPrimary: 'cl-formButtonPrimary',
    socialButtonsBlockButton: 'cl-socialButtonsBlockButton',
    socialButtonsBlockButtonText: 'cl-socialButtonsBlockButtonText',
    dividerLine: 'cl-dividerLine',
    dividerText: 'cl-dividerText',
    footerAction: 'cl-footerAction',
    footerActionText: 'cl-footerActionText',
    identityPreviewText: 'cl-identityPreviewText',
    identityPreviewEditButton: 'cl-identityPreviewEditButton',
  },
};

// ── Radar Metrics Configuration ──────────────────────────────────────────────
export const RADAR_METRICS = [
  { key: 'fft_noise_uniformity',       label: 'FFT',      min: 0, max: 12   },
  { key: 'ela_artifacts',              label: 'ELA',      min: 0, max: 60   },
  { key: 'color_distribution_entropy', label: 'Entropy',  min: 0, max: 8    },
  { key: 'edge_coherence_variance',    label: 'Edge Var', min: 0, max: 3000 },
  { key: 'jpeg_artifacts_std',         label: 'JPEG',     min: 0, max: 80   },
  { key: 'high_frequency_noise',       label: 'HF Noise', min: 0, max: 1200 },
  { key: 'texture_consistency',        label: 'Texture',  min: 0, max: 1200 },
  { key: 'chromatic_aberration',       label: 'Chroma',   min: 0, max: 2    },
];

// ── Metric Definitions for Forensic Analysis ────────────────────────────────
export const FORENSIC_METRIC_DEFS = [
  {
    key: 'fft_noise_uniformity',
    label: 'FFT Uniformity',
    simpleLabel: 'Frequency Patterns',
    min: 0,
    max: 12,
    weight: 0.15,
    explain: (l) =>
      l === 'ai_like'
        ? 'Pixel frequencies are unnaturally uniform — a hallmark of AI generation.'
        : l === 'borderline'
        ? 'Frequency patterns are slightly atypical but not conclusive.'
        : 'Frequency noise looks natural, as expected in real photos.',
  },
  {
    key: 'ela_artifacts',
    label: 'ELA Artifacts',
    simpleLabel: 'Compression Artifacts',
    min: 0,
    max: 60,
    weight: 0.15,
    explain: (l) =>
      l === 'ai_like'
        ? 'Error-level analysis reveals suspicious compression patterns.'
        : l === 'borderline'
        ? 'Compression artifacts are slightly irregular.'
        : 'Compression artifacts appear natural and consistent.',
  },
  {
    key: 'color_distribution_entropy',
    label: 'Entropy',
    simpleLabel: 'Color Variety',
    min: 0,
    max: 8,
    weight: 0.10,
    explain: (l) =>
      l === 'ai_like'
        ? 'Color distribution is too structured — AI images often lack natural randomness.'
        : l === 'borderline'
        ? 'Color variety is somewhat unusual.'
        : 'Color spread matches the range expected from a real photograph.',
  },
  {
    key: 'edge_coherence_variance',
    label: 'Edge Variance',
    simpleLabel: 'Edge Sharpness',
    min: 0,
    max: 3000,
    weight: 0.10,
    explain: (l) =>
      l === 'ai_like'
        ? 'Edge sharpness is suspiciously consistent — real photos vary more.'
        : l === 'borderline'
        ? 'Edge patterns are mildly atypical.'
        : 'Edge sharpness varies naturally across the image.',
  },
  {
    key: 'jpeg_artifacts_std',
    label: 'JPEG Std',
    simpleLabel: 'JPEG Patterns',
    min: 0,
    max: 80,
    weight: 0.12,
    explain: (l) =>
      l === 'ai_like'
        ? 'JPEG compression patterns deviate from normal camera output.'
        : l === 'borderline'
        ? 'JPEG patterns are slightly irregular.'
        : 'JPEG compression is consistent with a real camera.',
  },
  {
    key: 'high_frequency_noise',
    label: 'HF Noise',
    simpleLabel: 'Detail Noise',
    min: 0,
    max: 1200,
    weight: 0.15,
    explain: (l) =>
      l === 'ai_like'
        ? 'High-frequency noise is too smooth — AI images often lack natural sensor grain.'
        : l === 'borderline'
        ? 'Detail noise level is slightly unusual.'
        : 'Natural sensor noise is present, as expected from a real camera.',
  },
  {
    key: 'texture_consistency',
    label: 'Texture',
    simpleLabel: 'Surface Texture',
    min: 0,
    max: 1200,
    weight: 0.15,
    explain: (l) =>
      l === 'ai_like'
        ? 'Textures are unnaturally smooth or repetitive, typical of AI generation.'
        : l === 'borderline'
        ? 'Texture consistency is mildly suspicious.'
        : 'Surface textures show natural variation and irregularity.',
  },
  {
    key: 'chromatic_aberration',
    label: 'Chromatic',
    simpleLabel: 'Color Fringing',
    min: 0,
    max: 2,
    weight: 0.08,
    explain: (l) =>
      l === 'ai_like'
        ? 'Chromatic aberration is nearly absent — real lenses always produce some fringing.'
        : l === 'borderline'
        ? 'Color fringing is slightly atypical.'
        : 'Color fringing (lens aberration) is naturally present.',
  },
];

export const MODEL_CONFIG = {
  METADATA_WEIGHT: 0.80,
};

// ── Score Thresholds ─────────────────────────────────────────────────────────
export const SCORE_THRESHOLDS = {
  REAL_MAX: 50,      // Score <= 50 = Real
  SUSPICIOUS_MIN: 51, // Score 51-69 = Suspicious
  SUSPICIOUS_MAX: 69,
  AI_MIN: 70,        // Score >= 70 = AI
};

// ── Confidence Thresholds ────────────────────────────────────────────────────
export const CONFIDENCE_LEVELS = {
  HIGH: 70,
  MEDIUM: 50,
  LOW: 30,
};

// ── Anomaly Label Anchors (for synthetic box generation) ─────────────────────
export const ANOMALY_LABEL_ANCHORS = [
  { x: 50, y: 48 },
  { x: 42, y: 55 },
  { x: 58, y: 40 },
  { x: 50, y: 62 },
];

export const ANOMALY_LABELS = [
  'warped',
  'weird composition',
  'texture inconsistency',
  'edge artifact',
  'lighting mismatch',
  'symmetry anomaly',
  'blended boundary',
  'unnatural detail',
];
