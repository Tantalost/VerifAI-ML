import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowLeft, Shield, Zap, CheckCircle, BrainCircuit, BarChart3, Gauge, Lock, ScanSearch, MapPinned, Plus, History, Link2, ChevronDown, Plane, ImagePlus, Images, Search, BarChart2, PieChart, Activity, Sparkles } from 'lucide-react';
import Orb from './components/Orb';

const terminals = [
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

const heroAnimationDelays = [0.2, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9];

const aboutCards = [
  {
    id: 'ai-tech',
    icon: BrainCircuit,
    title: 'Advanced AI Technology',
    subtitle: 'Powered by MT-YOLOv6 for real-time detection',
    body: 'VerifAI is a cutting-edge Machine Learning-based AI Image Detection System designed to combat the growing threat of AI-generated misinformation.',
    points: ['Real-time inference pipeline', 'Architecture tuned for detection quality', 'Production-grade model serving'],
    cta: 'Learn the Model',
  },
  {
    id: 'credibility',
    icon: BarChart3,
    title: 'Credibility Scoring',
    subtitle: 'Quantitative reliability assessment',
    body: 'The system integrates sophisticated credibility scoring mechanisms to provide users with comprehensive insights about image reliability.',
    points: ['Confidence score breakdown', 'Risk-weighted interpretation', 'Actionable verification hints'],
    cta: 'View Scoring',
  },
  {
    id: 'realtime',
    icon: Gauge,
    title: 'Real-time Processing',
    subtitle: 'Instant analysis and results',
    body: 'Using the advanced MT-YOLOv6 architecture, our system analyzes visual content to determine authenticity with remarkable accuracy.',
    points: ['Fast queue execution', 'Low-latency result delivery', 'Batch and single-image modes'],
    cta: 'Try Processing',
  },
  {
    id: 'privacy',
    icon: Lock,
    title: 'Privacy Protection',
    subtitle: 'Secure image processing',
    body: 'VerifAI helps create a safer digital environment by processing visual evidence with strong privacy-first safeguards.',
    points: ['Secure upload handling', 'Controlled access workflow', 'Safety-focused data flow'],
    cta: 'Read Privacy',
  },
  {
    id: 'visual-features',
    icon: ScanSearch,
    title: 'Visual Feature Extraction',
    subtitle: 'AI artifact and pattern analysis',
    body: 'Identifies unique patterns and anomalies associated with generated and manipulated visual media.',
    points: ['Artifact localization', 'Signal consistency checks', 'Deep feature comparison'],
    cta: 'Explore Detection',
  },
  {
    id: 'annotations',
    icon: MapPinned,
    title: 'Visual Annotations',
    subtitle: 'Highlighted suspicious regions',
    body: 'Detected anomalies and AI signatures are surfaced in clear overlays to support fast human review.',
    points: ['Focused region highlights', 'Review-friendly overlays', 'Clear audit trail context'],
    cta: 'See Annotations',
  },
];

function classifyLine(line) {
  if (line.startsWith('$')) return 'prompt';
  if (line.includes('[SUCCESS]') || line.includes('[DONE]') || line.includes('[READY]')) return 'success';
  if (line.includes('[WARN]') || line.includes('[TIME]') || line.includes('[SCORE]')) return 'warn';
  if (line.includes('[ERROR]')) return 'error';
  return 'default';
}

function hashString(value) {
  let hash = 0;
  for (let index = 0; index < value.length; index += 1) {
    hash = ((hash << 5) - hash + value.charCodeAt(index)) | 0;
  }
  return Math.abs(hash);
}

function clampNumber(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function createDetectionMetrics(seed, index, mode) {
  const hash = hashString(`${seed}:${index}:${mode}`);
  const aiShare = 32 + (hash % 64);
  const confidence = clampNumber(aiShare + ((hash >> 3) % 14) - 4, 45, 99);
  const artifacts = clampNumber(100 - aiShare + ((hash >> 5) % 12) - 3, 8, 96);

  return {
    confidence,
    aiShare,
    artifacts,
  };
}

function buildDetections(images, mode) {
  const detections = images.map((image, index) => ({
    ...image,
    ...createDetectionMetrics(image.name, index, mode),
  }));

  return mode === 'batch'
    ? [...detections].sort((left, right) => right.aiShare - left.aiShare)
    : detections;
}

function App() {
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
  const [scanHistory, setScanHistory] = useState([]);
  const [historyTab, setHistoryTab] = useState('single');
  const [authForm, setAuthForm] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [authError, setAuthError] = useState('');
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
  const accountMenuRef = useRef(null);
  const scanTimerRef = useRef(null);

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
  }, []);

  useEffect(() => {
    if (currentView !== 'single' && currentView !== 'batch') {
      return;
    }

    if (scanTimerRef.current) {
      clearTimeout(scanTimerRef.current);
      scanTimerRef.current = null;
    }

    setScanMode(currentView);
    setSelectedImages([]);
    setHasScanned(false);
    setIsScanning(false);
  }, [currentView]);

  useEffect(() => {
    return () => {
      if (scanTimerRef.current) {
        clearTimeout(scanTimerRef.current);
      }
    };
  }, []);

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
    setAuthError('');
    window.location.hash = 'login';
  };

  const goToSignupPage = (event) => {
    event.preventDefault();
    setAuthError('');
    window.location.hash = 'signup';
  };

  const goToAppPage = () => {
    if (scanTimerRef.current) {
      clearTimeout(scanTimerRef.current);
      scanTimerRef.current = null;
    }
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
    setAuthError('');
    window.location.hash = 'home';
  };

  const onAuthInputChange = (event) => {
    const { name, value } = event.target;
    setAuthForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onAuthSubmit = (event) => {
    event.preventDefault();

    const email = authForm.email.trim();
    const password = authForm.password;
    const fullName = authForm.fullName.trim();
    const confirmPassword = authForm.confirmPassword;

    if (currentView === 'signup') {
      if (!fullName || !email || !password || !confirmPassword) {
        setAuthError('Please fill in all sign up fields before continuing.');
        return;
      }

      if (password !== confirmPassword) {
        setAuthError('Passwords do not match.');
        return;
      }
    } else {
      if (!email || !password) {
        setAuthError('Please enter your email and password before continuing.');
        return;
      }
    }

    setAuthError('');
    goToAppPage();
  };

  const toggleAccountMenu = () => {
    setAccountMenuOpen((value) => !value);
  };

  const startNewDetection = () => {
    goToAppPage();
  };

  const signOut = () => {
    setAccountMenuOpen(false);
    window.location.hash = 'home';
  };

  const onUploadImages = (event) => {
    const files = Array.from(event.target.files || []).filter((file) => file.type.startsWith('image/'));
    if (files.length === 0) return;

    const limited = scanMode === 'single' ? [files[0]] : files.slice(0, 8);
    const previewItems = limited.map((file) => ({
      name: file.name,
      preview: URL.createObjectURL(file),
    }));

    setSelectedImages(previewItems);
    setHasScanned(false);
  };

  const runScan = () => {
    if (selectedImages.length === 0 || isScanning) return;

    if (scanTimerRef.current) {
      clearTimeout(scanTimerRef.current);
    }

    const mode = scanMode;
    const inputSnapshot = selectedImages;

    setIsScanning(true);
    setHasScanned(false);

    scanTimerRef.current = setTimeout(() => {
      const detections = buildDetections(inputSnapshot, mode);

      setHasScanned(true);
      setIsScanning(false);
      setScanHistory((previous) => [
        {
          id: Date.now(),
          scannedAt: new Date().toLocaleString(),
          mode,
          detections,
        },
        ...previous,
      ].slice(0, 50));
      scanTimerRef.current = null;
    }, 1400);
  };

  const activeDetections = useMemo(() => {
    if (!hasScanned || selectedImages.length === 0) {
      return [];
    }

    return buildDetections(selectedImages, scanMode);
  }, [hasScanned, selectedImages, scanMode]);

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

  const embeddedStyles = useMemo(
    () => `
      :root {
        --primary: #ff6b00;
        --bg: #000000;
        --text: #ffffff;
        --muted: rgba(255, 255, 255, 0.72);
        --muted-dim: rgba(255, 255, 255, 0.5);
        --success: #27c93f;
        --warn: #ffbd2e;
        --error: #ff5f56;
        --terminal-bg: #0a0a0a;
      }

      * {
        box-sizing: border-box;
      }

      html,
      body,
      #root {
        margin: 0;
        min-height: 100%;
        background: var(--bg);
      }

      .page {
        position: relative;
        min-height: 100vh;
        overflow-x: hidden;
        font-family: Inter, 'Segoe UI', sans-serif;
        color: var(--text);
        background: var(--bg);
      }

      .orb {
        position: fixed;
        left: 0;
        top: 0;
        width: 600px;
        height: 600px;
        pointer-events: none;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(255, 107, 0, 0.22) 0%, rgba(255, 107, 0, 0.12) 38%, rgba(255, 107, 0, 0) 72%);
        transform: translate(calc(var(--mouse-x, 50vw) - 300px), calc(var(--mouse-y, 50vh) - 300px));
        filter: blur(10px);
        z-index: 1;
      }

      .terminal-grid-wrap {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        height: 100vh;
        z-index: 0;
        padding: 92px 18px 22px;
      }

      .terminal-grid {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        grid-template-rows: repeat(2, minmax(190px, 1fr));
        gap: 14px;
        width: 100%;
        height: calc(100vh - 114px);
      }

      .terminal-window {
        background: var(--terminal-bg);
        border: 1px solid rgba(255, 107, 0, 0.1);
        border-radius: 10px;
        overflow: hidden;
        opacity: 0;
        transform: translateY(10px);
        animation: terminalEnter 0.65s ease forwards, windowDrift 7s ease-in-out infinite;
        animation-delay: var(--terminal-delay, 0s), calc(var(--terminal-delay, 0s) + 1s);
      }

      .terminal-header {
        height: 30px;
        border-bottom: 1px solid rgba(255, 107, 0, 0.12);
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 0 11px;
      }

      .dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
      }

      .dot.red { background: var(--error); }
      .dot.yellow { background: var(--warn); }
      .dot.green { background: var(--success); }

      .terminal-body {
        position: relative;
        padding: 12px 11px 14px;
        font-family: 'SF Mono', Monaco, 'Courier New', monospace;
        font-size: 12px;
        line-height: 1.55;
        animation: streamShift 10s ease-in-out infinite;
      }

      .terminal-body::after {
        content: '';
        position: absolute;
        inset: 0;
        pointer-events: none;
        background: linear-gradient(180deg, rgba(255, 107, 0, 0) 0%, rgba(255, 107, 0, 0.07) 50%, rgba(255, 107, 0, 0) 100%);
        transform: translateY(-110%);
        animation: scanSweep 3.2s linear infinite;
      }

      .line {
        opacity: 0;
        display: block;
        width: 0;
        max-width: 100%;
        color: var(--muted-dim);
        white-space: nowrap;
        overflow: hidden;
        animation: typeLineLoop var(--window-duration, 3.6s) steps(var(--chars, 20), end) infinite;
        animation-delay: var(--line-delay, 0s);
      }

      .line.prompt { color: var(--primary); }
      .line.success { color: var(--success); }
      .line.warn { color: var(--warn); }
      .line.error { color: var(--error); }

      .header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 30;
        height: 72px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 5rem;
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(10px);
        border-bottom: 1px solid rgba(255, 107, 0, 0.1);
      }

      .brand {
        display: inline-flex;
        align-items: center;
        gap: 12px;
        text-decoration: none;
        color: var(--text);
        font-weight: 700;
      }

      .brand-icon {
        width: 28px;
        height: 28px;
        border-radius: 7px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: 1px solid rgba(255, 107, 0, 0.35);
        background: rgba(255, 107, 0, 0.1);
      }

      .ai-chip {
        font-family: 'Inter Tight', Inter, 'Segoe UI', sans-serif;
        font-size: 11px;
        font-weight: 900;
        letter-spacing: 0.02em;
        color: #000;
        background: var(--primary);
        border-radius: 5px;
        padding: 2px 8px;
      }

      .nav {
        display: inline-flex;
        align-items: center;
        gap: 26px;
      }

      .nav-link {
        position: relative;
        color: rgba(255, 255, 255, 0.78);
        text-decoration: none;
        font-size: 14px;
        font-weight: 600;
        transition: color 0.25s ease;
      }

      .nav-link::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -6px;
        width: 100%;
        height: 2px;
        transform: scaleX(0);
        transform-origin: left;
        background: var(--primary);
        transition: transform 0.25s ease;
      }

      .nav-link:hover {
        color: var(--text);
      }

      .nav-link:hover::after {
        transform: scaleX(1);
      }

      .hero {
        position: relative;
        z-index: 10;
        min-height: 100vh;
        display: flex;
        align-items: center;
        padding-left: 5rem;
        padding-right: 1.25rem;
      }

      .hero::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: min(62vw, 920px);
        pointer-events: none;
        z-index: 0;
        background: linear-gradient(
          90deg,
          rgba(0, 0, 0, 0.94) 0%,
          rgba(0, 0, 0, 0.88) 38%,
          rgba(0, 0, 0, 0.72) 62%,
          rgba(0, 0, 0, 0.38) 82%,
          rgba(0, 0, 0, 0) 100%
        );
        filter: blur(2px);
      }

      .hero-content {
        max-width: 650px;
        position: relative;
        isolation: isolate;
        z-index: 1;
        padding: 1.2rem 1.25rem 1.2rem;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      .hero-content::before {
        content: '';
        position: absolute;
        z-index: -1;
        left: -18px;
        right: -18px;
        top: -16px;
        bottom: -14px;
        pointer-events: none;
        border-radius: 16px;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.88) 0%, rgba(0, 0, 0, 0.82) 52%, rgba(0, 0, 0, 0.62) 76%, rgba(0, 0, 0, 0) 100%);
        filter: blur(9px);
      }

      .hero-content::after {
        content: '';
        position: absolute;
        z-index: -1;
        pointer-events: none;
        left: -42px;
        top: 12%;
        width: 96px;
        height: 72%;
        border-radius: 999px;
        background: radial-gradient(circle, rgba(255, 107, 0, 0.18) 0%, rgba(255, 107, 0, 0.08) 44%, rgba(255, 107, 0, 0) 76%);
        filter: blur(15px);
      }

      .reveal {
        opacity: 0;
        transform: translateY(10px);
        animation: heroEnter 0.8s ease forwards;
      }

      .hero-badge {
        width: fit-content;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        border: 1px solid rgba(255, 107, 0, 0.45);
        color: var(--primary);
        background: rgba(255, 107, 0, 0.08);
        border-radius: 999px;
        padding: 8px 14px;
        font-size: 14px;
        font-weight: 700;
      }

      .headline {
        font-family: 'Inter Tight', Inter, 'Segoe UI', sans-serif;
        margin: 0;
        font-size: clamp(3rem, 10vw, 7rem);
        font-weight: 900;
        line-height: 0.95;
        letter-spacing: -0.03em;
      }

      .headline-line {
        display: block;
        background: linear-gradient(180deg, #ffffff 0%, #e6e6e6 100%);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }

      .subtitle-row {
        display: inline-flex;
        align-items: center;
        gap: 12px;
        color: var(--primary);
        font-weight: 800;
        letter-spacing: 0.11em;
        text-transform: uppercase;
        font-size: 22px;
      }

      .subtitle-line {
        width: 68px;
        height: 1px;
        background: rgba(255, 107, 0, 0.58);
      }

      .description {
        margin: 0;
        color: var(--muted);
        line-height: 1.75;
        max-width: 620px;
      }

      .cta-row {
        display: flex;
        align-items: center;
        gap: 14px;
      }

      .btn {
        border: 1px solid transparent;
        border-radius: 11px;
        height: 46px;
        padding: 0 22px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        font-weight: 700;
        font-size: 15px;
        transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
      }

      .btn-primary {
        background: var(--primary);
        color: #0b0b0b;
        box-shadow: 0 0 18px rgba(255, 107, 0, 0.28);
      }

      .btn-secondary {
        color: #f7f7f7;
        border-color: rgba(255, 255, 255, 0.35);
        background: rgba(255, 255, 255, 0.04);
      }

      .btn:hover {
        transform: translateY(-2px);
      }

      .btn-primary:hover {
        box-shadow: 0 0 28px rgba(255, 107, 0, 0.45);
      }

      .btn-secondary:hover {
        box-shadow: 0 0 22px rgba(255, 255, 255, 0.12);
        background: rgba(255, 255, 255, 0.08);
      }

      .pill-row {
        display: flex;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;
      }

      .feature-pill {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        height: 36px;
        border-radius: 999px;
        border: 1px solid rgba(255, 255, 255, 0.18);
        padding: 0 14px;
        color: rgba(255, 255, 255, 0.84);
        font-size: 14px;
        background: rgba(255, 255, 255, 0.05);
        transition: background 0.2s ease, border-color 0.2s ease;
      }

      .feature-pill:hover {
        background: rgba(255, 255, 255, 0.13);
        border-color: rgba(255, 255, 255, 0.32);
      }

      .feature-pill svg {
        color: var(--success);
      }

      .about-shell {
        position: relative;
        z-index: 14;
        background:
          radial-gradient(circle at 35% 15%, rgba(255, 107, 0, 0.08) 0%, rgba(255, 107, 0, 0) 40%),
          linear-gradient(180deg, rgba(0, 0, 0, 0.9) 0%, #000 100%);
        border-top: 1px solid rgba(255, 107, 0, 0.12);
      }

      .about-inner {
        padding: 4rem 2.9rem 5rem;
      }

      .about-heading {
        max-width: 900px;
        margin: 0 0 2.4rem;
      }

      .about-title {
        margin: 0;
        font-family: 'Inter Tight', Inter, sans-serif;
        font-size: clamp(2rem, 6vw, 4.5rem);
        line-height: 0.98;
        letter-spacing: -0.025em;
        color: rgba(255, 255, 255, 0.96);
      }

      .about-lead {
        margin: 1rem 0 0;
        color: rgba(255, 255, 255, 0.72);
        max-width: 760px;
        line-height: 1.65;
      }

      .about-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        border-top: 1px solid rgba(255, 255, 255, 0.12);
        border-left: 1px solid rgba(255, 255, 255, 0.12);
      }

      .about-card {
        min-height: 240px;
        padding: 1.2rem 1.15rem 1.15rem;
        border-right: 1px solid rgba(255, 255, 255, 0.12);
        border-bottom: 1px solid rgba(255, 255, 255, 0.12);
        background:
          linear-gradient(180deg, rgba(255, 255, 255, 0.01) 0%, rgba(255, 255, 255, 0.02) 100%),
          repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.012) 0, rgba(255, 255, 255, 0.012) 2px, transparent 2px, transparent 6px);
        transition: background 0.25s ease;
      }

      .about-card:hover {
        background:
          linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.015) 100%),
          repeating-linear-gradient(135deg, rgba(255, 107, 0, 0.04) 0, rgba(255, 107, 0, 0.04) 2px, transparent 2px, transparent 6px);
      }

      .about-card-head {
        display: flex;
        align-items: flex-start;
        gap: 0.75rem;
      }

      .about-icon {
        width: 30px;
        height: 30px;
        border-radius: 6px;
        border: 1px solid rgba(255, 255, 255, 0.16);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: rgba(255, 255, 255, 0.88);
      }

      .about-card-title {
        margin: 0;
        font-size: 1rem;
        font-weight: 700;
        color: rgba(255, 255, 255, 0.96);
      }

      .about-card-subtitle {
        margin: 0.16rem 0 0;
        font-size: 0.79rem;
        color: rgba(255, 255, 255, 0.6);
      }

      .about-card-body {
        margin: 0.75rem 0 0;
        color: rgba(255, 255, 255, 0.8);
        line-height: 1.55;
        font-size: 0.93rem;
      }

      .about-points {
        margin: 0.75rem 0 0;
        padding-left: 0;
        list-style: none;
        display: grid;
        gap: 0.34rem;
      }

      .about-points li {
        position: relative;
        padding-left: 0.9rem;
        color: rgba(255, 255, 255, 0.76);
        font-size: 0.82rem;
      }

      .about-points li::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0.5em;
        width: 0.24rem;
        height: 0.24rem;
        border-radius: 50%;
        background: #ff6b00;
      }

      .about-cta {
        display: inline-block;
        margin-top: 0.85rem;
        color: rgba(255, 255, 255, 0.95);
        text-decoration: none;
        font-size: 0.84rem;
        font-weight: 700;
      }

      .site-footer {
        position: relative;
        z-index: 14;
        border-top: 1px solid rgba(255, 255, 255, 0.08);
        background: #030303;
      }

      .footer-cta {
        padding: 4.2rem 1.25rem 4rem;
        text-align: center;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        background:
          radial-gradient(circle at 50% 18%, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0) 62%),
          repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.016) 0, rgba(255, 255, 255, 0.016) 2px, transparent 2px, transparent 6px);
      }

      .footer-cta-title {
        margin: 0;
        font-family: 'Inter Tight', Inter, sans-serif;
        font-size: clamp(2rem, 5vw, 4.4rem);
        line-height: 0.94;
        letter-spacing: -0.03em;
        color: rgba(255, 255, 255, 0.95);
      }

      .footer-cta-text {
        margin: 1rem auto 0;
        max-width: 700px;
        color: rgba(255, 255, 255, 0.62);
        line-height: 1.55;
      }

      .footer-cta-actions {
        margin-top: 1.6rem;
        display: inline-flex;
        align-items: center;
        gap: 0.72rem;
      }

      .footer-action {
        height: 46px;
        padding: 0 1.5rem;
        border: 1px solid rgba(255, 255, 255, 0.22);
        border-radius: 0;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 0.11em;
        font-size: 0.74rem;
        font-weight: 800;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.2s ease, background 0.2s ease;
      }

      .footer-action.primary {
        background: #ffffff;
        color: #0a0a0a;
      }

      .footer-action.secondary {
        color: rgba(255, 255, 255, 0.88);
        background: rgba(255, 255, 255, 0.02);
      }

      .footer-action:hover {
        transform: translateY(-1px);
      }

      .footer-main {
        padding: 2.7rem 2.8rem 2.5rem;
      }

      .footer-top {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 2rem;
      }

      .footer-brand {
        display: inline-flex;
        align-items: center;
        gap: 0.62rem;
        color: rgba(255, 255, 255, 0.9);
        font-weight: 700;
      }

      .footer-brand-mark {
        width: 19px;
        height: 19px;
        border-radius: 4px;
        border: 1px solid rgba(255, 255, 255, 0.35);
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }

      .footer-cols {
        display: grid;
        grid-template-columns: repeat(2, minmax(130px, 1fr));
        gap: 2.2rem;
      }

      .footer-col h4 {
        margin: 0;
        font-size: 0.73rem;
        text-transform: uppercase;
        letter-spacing: 0.11em;
        color: rgba(255, 255, 255, 0.45);
      }

      .footer-col ul {
        list-style: none;
        margin: 0.9rem 0 0;
        padding: 0;
        display: grid;
        gap: 0.55rem;
      }

      .footer-col li,
      .footer-col a {
        color: rgba(255, 255, 255, 0.82);
        text-decoration: none;
        font-size: 0.92rem;
      }

      .footer-col a:hover {
        color: #ffffff;
      }

      .footer-bottom {
        margin-top: 2.2rem;
        padding-top: 1.05rem;
        border-top: 1px solid rgba(255, 255, 255, 0.09);
        color: rgba(255, 255, 255, 0.45);
        font-size: 0.77rem;
      }

      .login-page {
        min-height: 100vh;
        background:
          radial-gradient(circle at 22% 40%, rgba(255, 107, 0, 0.12) 0%, rgba(255, 107, 0, 0) 38%),
          #000000;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1.5rem;
        position: relative;
      }

      .login-close {
        position: fixed;
        right: 1.6rem;
        top: 1rem;
        border: none;
        background: transparent;
        color: rgba(255, 255, 255, 0.82);
        font-size: 1.4rem;
        cursor: pointer;
      }

      .login-card {
        width: min(100%, 400px);
        border-radius: 10px;
        background: linear-gradient(180deg, rgba(8, 8, 8, 0.98) 0%, rgba(2, 2, 2, 0.98) 100%);
        border: 1px solid rgba(255, 107, 0, 0.28);
        box-shadow: 0 26px 58px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 107, 0, 0.08) inset;
        padding: 1.1rem 1.1rem 1.25rem;
      }

      .login-brand {
        display: inline-flex;
        align-items: center;
        gap: 0.58rem;
        color: rgba(255, 255, 255, 0.9);
        font-weight: 700;
      }

      .login-brand .footer-brand-mark {
        border-color: rgba(255, 107, 0, 0.44);
        color: #ff6b00;
      }

      .login-brand .footer-brand-mark {
        width: 18px;
        height: 18px;
      }

      .login-title {
        margin: 0.9rem 0 0;
        font-size: 2rem;
        font-family: 'Inter Tight', Inter, sans-serif;
        letter-spacing: -0.02em;
        color: rgba(255, 255, 255, 0.97);
      }

      .login-sub {
        margin: 0.38rem 0 0;
        color: rgba(255, 255, 255, 0.46);
        font-size: 0.9rem;
      }

      .login-google {
        margin-top: 1.15rem;
        width: 100%;
        height: 44px;
      .latest-mode-strip {
        grid-template-columns: repeat(5, minmax(0, 1fr));
      }

      .view-more-btn {
        margin-top: 0.75rem;
        height: 36px;
        border-radius: 10px;
        border: 1px solid rgba(255, 107, 0, 0.4);
        background: rgba(255, 107, 0, 0.12);
        color: rgba(255, 255, 255, 0.93);
        padding: 0 0.8rem;
        cursor: pointer;
        font-weight: 600;
      }

      .view-more-btn:hover {
        background: rgba(255, 107, 0, 0.2);
      }
        border: 1px solid rgba(255, 107, 0, 0.28);
        background: rgba(255, 107, 0, 0.06);
        color: rgba(255, 255, 255, 0.95);
        font-weight: 600;
        cursor: pointer;
      }

      .login-google:hover {
        background: rgba(255, 107, 0, 0.12);
      }

      .login-divider {
        margin: 0.95rem 0;
        display: flex;
        align-items: center;
        gap: 0.6rem;
        color: rgba(255, 255, 255, 0.72);
        font-size: 0.82rem;
        font-weight: 700;
      }

      .login-divider::before,
      .login-divider::after {
        content: '';
        flex: 1;
        height: 1px;
        background: rgba(255, 107, 0, 0.22);
      }

      .login-input {
        width: 100%;
        height: 42px;
        border-radius: 7px;
        border: 1px solid rgba(255, 107, 0, 0.2);
        background: rgba(255, 107, 0, 0.03);
        color: #fff;
        padding: 0 0.82rem;
        margin-bottom: 0.72rem;
      }

      .login-input:focus {
        outline: none;
        border-color: rgba(255, 107, 0, 0.58);
        box-shadow: 0 0 0 3px rgba(255, 107, 0, 0.14);
      }

      .login-input::placeholder {
        color: rgba(255, 255, 255, 0.42);
      }

      .login-forgot {
        text-align: right;
        margin-bottom: 0.7rem;
      }

      .login-forgot a {
        color: rgba(255, 182, 132, 0.9);
        font-size: 0.79rem;
        text-decoration: none;
      }

      .login-submit {
        width: 100%;
        height: 42px;
        border: none;
        border-radius: 7px;
        font-weight: 700;
        background: #ff6b00;
        color: #110b07;
        cursor: pointer;
      }

      .login-submit:hover {
        background: #ff7e26;
      }

      .login-signup {
        text-align: center;
        margin-top: 1rem;
        color: rgba(255, 255, 255, 0.58);
        font-size: 0.84rem;
      }

      .login-signup a {
        color: rgba(255, 184, 138, 0.95);
      }

      .app-shell {
        min-height: 100vh;
        background:
          radial-gradient(circle at 50% 36%, rgba(255, 107, 0, 0.09) 0%, rgba(255, 107, 0, 0) 32%),
          #000;
        position: relative;
      }

      .history-page {
        min-height: 100vh;
        background:
          radial-gradient(circle at 50% 30%, rgba(255, 107, 0, 0.1) 0%, rgba(255, 107, 0, 0) 34%),
          #000;
        padding: 1.5rem 1.5rem 2rem 6rem;
      }

      .history-hero {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        margin-bottom: 1rem;
      }

      .history-hero h2 {
        margin: 0;
        font-size: clamp(1.6rem, 2.4vw, 2.6rem);
        color: rgba(255, 255, 255, 0.96);
      }

      .history-hero p {
        margin: 0.4rem 0 0;
        color: rgba(255, 255, 255, 0.64);
        max-width: 720px;
        line-height: 1.5;
      }

      .history-back {
        border: 1px solid rgba(255, 107, 0, 0.28);
        background: rgba(255, 107, 0, 0.08);
        color: rgba(255, 255, 255, 0.95);
        border-radius: 999px;
        height: 40px;
        padding: 0 1rem;
        display: inline-flex;
        align-items: center;
        gap: 0.55rem;
        cursor: pointer;
      }

      .history-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 1rem;
      }

      .history-card {
        border: 1px solid rgba(255, 255, 255, 0.11);
        border-radius: 18px;
        background: rgba(15, 15, 15, 0.9);
        padding: 1rem;
        box-shadow: 0 18px 34px rgba(0, 0, 0, 0.34);
      }

      .history-card-head {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 1rem;
        margin-bottom: 0.9rem;
      }

      .history-card-head h3 {
        margin: 0;
        font-size: 1rem;
        color: rgba(255, 255, 255, 0.95);
      }

      .history-card-head p {
        margin: 0.3rem 0 0;
        color: rgba(255, 255, 255, 0.58);
        font-size: 0.82rem;
      }

      .history-badge {
        border-radius: 999px;
        border: 1px solid rgba(255, 107, 0, 0.26);
        color: #ffb07a;
        background: rgba(255, 107, 0, 0.08);
        font-size: 0.75rem;
        padding: 0.35rem 0.7rem;
        white-space: nowrap;
      }

      .history-previews {
        display: grid;
        grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr);
        gap: 0.8rem;
      }

      .history-main-image {
        min-height: 220px;
        border-radius: 14px;
        overflow: hidden;
        border: 1px solid rgba(255, 255, 255, 0.11);
        background: rgba(255, 255, 255, 0.03);
      }

      .history-main-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }

      .history-mini-strip {
        display: grid;
        gap: 0.55rem;
      }

      .history-mini {
        min-height: 68px;
        border-radius: 12px;
        overflow: hidden;
        border: 1px solid rgba(255, 255, 255, 0.11);
        background: rgba(255, 255, 255, 0.03);
      }

      .history-mini img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }

      .history-graph {
        margin-top: 0.9rem;
        border-top: 1px solid rgba(255, 255, 255, 0.08);
        padding-top: 0.9rem;
      }

      .history-graph-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 0.65rem;
      }

      .history-graph-title span {
        color: rgba(255, 255, 255, 0.86);
        font-size: 0.85rem;
        font-weight: 600;
      }

      .history-graph-title em {
        color: rgba(255, 255, 255, 0.58);
        font-style: normal;
        font-size: 0.78rem;
      }

      .history-graph-list {
        display: grid;
        gap: 0.55rem;
      }

      .history-graph-row {
        display: grid;
        grid-template-columns: 120px 1fr 52px;
        gap: 0.6rem;
        align-items: center;
        color: rgba(255, 255, 255, 0.78);
        font-size: 0.8rem;
      }

      .history-graph-bar {
        height: 9px;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.08);
        overflow: hidden;
      }

      .history-graph-bar span {
        display: block;
        height: 100%;
        border-radius: inherit;
        background: linear-gradient(90deg, #ff6b00, #ff9e61);
      }

      .history-empty {
        border: 1px dashed rgba(255, 255, 255, 0.16);
        border-radius: 18px;
        padding: 2rem;
        text-align: center;
        color: rgba(255, 255, 255, 0.62);
        background: rgba(255, 255, 255, 0.02);
      }

      .app-sidebar {
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        width: 54px;
        border-right: 1px solid rgba(255, 255, 255, 0.1);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.7rem;
        padding-top: 0.85rem;
        background: rgba(0, 0, 0, 0.62);
        z-index: 40;
      }

      .app-side-item {
        position: relative;
        display: inline-flex;
      }

      .app-side-dot {
        width: 30px;
        height: 30px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: rgba(255, 255, 255, 0.74);
        border: 1px solid transparent;
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.04);
        transition: border-color 0.18s ease, background-color 0.18s ease, color 0.18s ease;
        cursor: pointer;
      }

      .app-side-dot:hover,
      .app-side-item:focus-within .app-side-dot {
        color: rgba(255, 255, 255, 0.95);
        border-color: rgba(255, 107, 0, 0.4);
        background: rgba(255, 107, 0, 0.12);
      }

      .app-side-pop {
        position: absolute;
        left: calc(100% + 10px);
        top: -2px;
        width: 240px;
        border-radius: 12px;
        border: 1px solid rgba(255, 255, 255, 0.12);
        background: rgba(30, 31, 38, 0.96);
        box-shadow: 0 16px 36px rgba(0, 0, 0, 0.5);
        padding: 0.85rem;
        opacity: 0;
        visibility: hidden;
        transform: translateY(6px);
        transition: opacity 0.18s ease, transform 0.18s ease, visibility 0.18s ease;
        pointer-events: none;
      }

      .app-side-item:hover .app-side-pop,
      .app-side-item:focus-within .app-side-pop {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }

      .app-side-pop h5 {
        margin: 0;
        font-size: 0.96rem;
        color: rgba(255, 255, 255, 0.95);
      }

      .app-side-pop p {
        margin: 0.55rem 0 0;
        font-size: 0.8rem;
        color: rgba(255, 255, 255, 0.62);
        line-height: 1.45;
      }

      .app-history-list {
        margin: 0.55rem 0 0;
        padding: 0;
        list-style: none;
        display: grid;
        gap: 0.45rem;
        max-height: 168px;
        overflow-y: auto;
      }

      .app-history-item {
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.03);
        padding: 0.5rem 0.55rem;
      }

      .app-history-item strong {
        display: block;
        font-size: 0.75rem;
        color: rgba(255, 255, 255, 0.92);
      }

      .app-history-item span {
        display: block;
        margin-top: 0.2rem;
        font-size: 0.72rem;
        color: rgba(255, 255, 255, 0.63);
      }

      .app-side-pop .see-all {
        margin-top: 0.55rem;
        border: none;
        background: transparent;
        color: rgba(255, 255, 255, 0.76);
        font-size: 0.8rem;
        padding: 0;
        cursor: pointer;
      }

      .app-top {
        height: 40px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.07);
        margin-left: 54px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 0 14px;
        gap: 0.65rem;
      }

      .app-top a,
      .app-top span {
        color: rgba(255, 255, 255, 0.86);
        text-decoration: none;
        font-size: 0.77rem;
        font-weight: 600;
      }

      .app-user-pill {
        width: 34px;
        height: 34px;
        border-radius: 50%;
        border: 1px solid rgba(255, 107, 0, 0.38);
        padding: 0;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: rgba(255, 107, 0, 0.08);
        color: rgba(255, 255, 255, 0.92);
        cursor: pointer;
        transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease;
        position: relative;
      }

      .app-user-pill:hover {
        transform: translateY(-1px) scale(1.03);
        background: rgba(255, 107, 0, 0.14);
        border-color: rgba(255, 107, 0, 0.58);
      }

      .account-dropdown-wrap {
        position: relative;
        display: inline-flex;
        align-items: center;
      }

      .account-dropdown {
        position: absolute;
        top: calc(100% + 10px);
        right: 0;
        min-width: 180px;
        border-radius: 14px;
        border: 1px solid rgba(255, 107, 0, 0.22);
        background: rgba(8, 8, 8, 0.96);
        box-shadow: 0 18px 42px rgba(0, 0, 0, 0.45);
        padding: 0.45rem;
        z-index: 50;
      }

      .account-dropdown button,
      .account-dropdown a {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.5rem;
        padding: 0.7rem 0.8rem;
        border: none;
        border-radius: 10px;
        background: transparent;
        color: rgba(255, 255, 255, 0.9);
        text-decoration: none;
        font-size: 0.86rem;
        cursor: pointer;
        text-align: left;
      }

      .account-dropdown button:hover,
      .account-dropdown a:hover {
        background: rgba(255, 107, 0, 0.12);
      }

      .account-dropdown .danger {
        color: #ffb18a;
      }

      .app-main {
        margin-left: 54px;
        min-height: calc(100vh - 40px);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1.8rem;
        position: relative;
      }

      .app-orb-wrap {
        position: absolute;
        width: min(58vw, 720px);
        height: min(58vw, 720px);
        max-height: 68vh;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        pointer-events: none;
        opacity: 0.52;
        filter: saturate(1.18) brightness(0.98);
        z-index: 0;
      }

      .detect-center {
        width: min(100%, 700px);
        text-align: center;
        position: relative;
        z-index: 1;
      }

      .detect-split-menu {
        border: 1px solid rgba(255, 255, 255, 0.13);
        border-radius: 18px;
        padding: 1.1rem;
        background: rgba(9, 9, 9, 0.84);
      }

      .detect-split-menu h2 {
        margin: 0;
        font-size: 1.2rem;
      }

      .detect-split-menu p {
        margin: 0.45rem 0 0;
        color: rgba(255, 255, 255, 0.67);
        font-size: 0.88rem;
      }

      .detect-split-actions {
        margin-top: 1rem;
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 0.6rem;
      }

      .detect-logo {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.55rem;
        color: rgba(255, 255, 255, 0.95);
        font-weight: 700;
      }

      .detect-logo .footer-brand-mark {
        width: 22px;
        height: 22px;
        border-color: rgba(255, 107, 0, 0.44);
        color: #ff6b00;
      }

      .detect-panel {
        margin-top: 1rem;
        border: 1px solid rgba(255, 255, 255, 0.16);
        border-radius: 999px;
        background: rgba(17, 17, 17, 0.9);
        padding: 0.6rem;
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 0.5rem;
        align-items: center;
        overflow: visible;
      }

      .detect-start-btn {
        margin-top: 1rem;
        height: 42px;
        border-radius: 999px;
        border: 1px solid rgba(255, 107, 0, 0.45);
        background: rgba(255, 107, 0, 0.12);
        color: rgba(255, 255, 255, 0.95);
        padding: 0 1.1rem;
        font-weight: 700;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.45rem;
        margin-left: auto;
        margin-right: auto;
      }

      .detect-split-actions .detect-start-btn {
        width: 100%;
        margin: 0;
      }

      .history-tabs {
        display: inline-flex;
        border: 1px solid rgba(255, 255, 255, 0.14);
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.03);
        padding: 0.2rem;
        margin-bottom: 0.9rem;
      }

      .history-tab {
        border: none;
        background: transparent;
        color: rgba(255, 255, 255, 0.7);
        height: 34px;
        min-width: 86px;
        border-radius: 999px;
        cursor: pointer;
        font-weight: 600;
        transition: background-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
      }

      .history-tab.active {
        background: rgba(255, 107, 0, 0.16);
        color: rgba(255, 255, 255, 0.95);
      }

      .history-tab:hover {
        transform: translateY(-1px);
      }

      .history-content {
        animation: historyContentIn 0.28s ease;
        transform-origin: top center;
      }

      .detect-uploader {
        position: relative;
        height: 40px;
        border-radius: 999px;
        border: 1px solid rgba(255, 255, 255, 0.15);
        background: rgba(255, 255, 255, 0.03);
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 0.5rem;
        padding: 0 0.8rem;
        color: rgba(255, 255, 255, 0.64);
      }

      .detect-uploader input {
        position: absolute;
        inset: 0;
        opacity: 0;
        cursor: pointer;
      }

      .detect-mode {
        display: inline-flex;
        align-items: center;
        gap: 0.35rem;
        border-radius: 999px;
        border: 1px solid rgba(255, 255, 255, 0.14);
        background: rgba(255, 255, 255, 0.03);
        height: 40px;
        padding: 0 0.85rem;
        color: rgba(255, 255, 255, 0.9);
        cursor: pointer;
        position: relative;
      }

      .detect-mode-menu {
        position: absolute;
        top: calc(100% + 8px);
        left: 0;
        min-width: 220px;
        border-radius: 14px;
        border: 1px solid rgba(255, 107, 0, 0.22);
        background: rgba(8, 8, 8, 0.98);
        box-shadow: 0 18px 42px rgba(0, 0, 0, 0.45);
        padding: 0.35rem;
        z-index: 30;
      }

      .detect-mode-option {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.6rem;
        padding: 0.78rem 0.8rem;
        border: none;
        border-radius: 10px;
        background: transparent;
        color: rgba(255, 255, 255, 0.92);
        cursor: pointer;
        text-align: left;
      }

      .detect-mode-option:hover {
        background: rgba(255, 107, 0, 0.12);
      }

      .detect-mode-option.active {
        background: rgba(255, 107, 0, 0.16);
      }

      .detect-mode-option-left {
        display: flex;
        align-items: center;
        gap: 0.6rem;
      }

      .detect-mode-option-icon {
        width: 28px;
        height: 28px;
        border-radius: 8px;
        border: 1px solid rgba(255, 107, 0, 0.2);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: rgba(255, 107, 0, 0.06);
        color: #ffb07a;
      }

      .detect-scan {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: none;
        background: #ffffff;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        color: #0e0e0e;
      }

      .detect-scan:disabled {
        opacity: 0.55;
        cursor: wait;
      }

      .scan-loading {
        margin-top: 1rem;
        border: 1px solid rgba(255, 255, 255, 0.12);
        border-radius: 14px;
        background: rgba(10, 10, 10, 0.85);
        padding: 1rem;
        text-align: center;
      }

      .scan-loading h4 {
        margin: 0.45rem 0 0;
      }

      .scan-loading p {
        margin: 0.4rem 0 0;
        color: rgba(255, 255, 255, 0.64);
        font-size: 0.83rem;
      }

      .scan-loading-spinner {
        width: 34px;
        height: 34px;
        border-radius: 50%;
        border: 3px solid rgba(255, 255, 255, 0.15);
        border-top-color: #ff6b00;
        margin: 0 auto;
        animation: spinLoader 0.95s linear infinite;
      }

      .scan-loading-bars {
        margin-top: 0.7rem;
        display: grid;
        gap: 0.35rem;
      }

      .scan-loading-bars span {
        display: block;
        height: 8px;
        border-radius: 999px;
        background: linear-gradient(90deg, rgba(255, 107, 0, 0.2), rgba(255, 107, 0, 0.9));
        animation: pulseBar 1.2s ease-in-out infinite;
      }

      .scan-loading-bars span:nth-child(2) {
        animation-delay: 0.16s;
      }

      .scan-loading-bars span:nth-child(3) {
        animation-delay: 0.32s;
      }

      .latest-preview {
        margin-top: 1rem;
        border: 1px solid rgba(255, 255, 255, 0.11);
        border-radius: 12px;
        background: rgba(10, 10, 10, 0.78);
        padding: 0.8rem;
        text-align: left;
      }

      .latest-preview h4 {
        margin: 0;
        font-size: 0.9rem;
      }

      .latest-preview p {
        margin: 0.45rem 0 0;
        color: rgba(255, 255, 255, 0.6);
        font-size: 0.8rem;
      }

      .preview-strip {
        margin-top: 1rem;
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 0.6rem;
      }

      .preview-item {
        height: 92px;
        border-radius: 8px;
        border: 1px solid rgba(255, 255, 255, 0.16);
        overflow: hidden;
        background: rgba(255, 255, 255, 0.03);
      }

      .preview-item img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .scan-results {
        margin-top: 1rem;
        border: 1px solid rgba(255, 255, 255, 0.12);
        border-radius: 12px;
        background: rgba(10, 10, 10, 0.85);
        padding: 0.95rem;
        text-align: left;
      }

      .scan-detection-grid,
      .history-detection-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 0.75rem;
      }

      .scan-card {
        border: 1px solid rgba(255, 255, 255, 0.11);
        border-radius: 10px;
        padding: 0.72rem;
        background: rgba(255, 255, 255, 0.02);
      }

      .detection-card {
        display: flex;
        flex-direction: column;
      }

      .detection-thumb {
        height: 156px;
        border-radius: 10px;
        overflow: hidden;
        border: 1px solid rgba(255, 255, 255, 0.08);
        background: rgba(255, 255, 255, 0.03);
        margin-bottom: 0.7rem;
      }

      .detection-thumb img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }

      .scan-card h4 {
        margin: 0;
        color: rgba(255, 255, 255, 0.95);
        font-size: 0.86rem;
        display: flex;
        align-items: center;
        gap: 0.4rem;
      }

      .detection-meta {
        margin-top: 0.45rem;
        font-size: 0.8rem;
        color: rgba(255, 255, 255, 0.62);
      }

      .graph-metrics {
        margin-top: 0.7rem;
        display: grid;
        gap: 0.45rem;
      }

      .graph-metric {
        display: grid;
        gap: 0.24rem;
      }

      .graph-metric-label {
        color: rgba(255, 255, 255, 0.74);
        font-size: 0.76rem;
      }

      .scan-stat {
        margin-top: 0.56rem;
        font-size: 1.35rem;
        font-weight: 800;
      }

      .graph-bar {
        height: 8px;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.08);
        overflow: hidden;
      }

      .graph-bar span {
        display: block;
        height: 100%;
        border-radius: inherit;
        background: linear-gradient(90deg, #ff6b00, #ff9e61);
      }

      @keyframes heroEnter {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }

      @keyframes terminalEnter {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }

      @keyframes windowDrift {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-2px); }
      }

      @keyframes typeLineLoop {
        0% {
          width: 0;
          opacity: 0;
        }
        10% {
          opacity: 1;
        }
        68%, 100% {
          width: calc(var(--chars, 20) * 1ch);
          opacity: 1;
        }
      }

      @keyframes streamShift {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-5px); }
      }

      @keyframes scanSweep {
        0% { transform: translateY(-110%); }
        100% { transform: translateY(120%); }
      }

      @keyframes spinLoader {
        to { transform: rotate(360deg); }
      }

      @keyframes pulseBar {
        0%, 100% { opacity: 0.42; transform: scaleX(0.88); }
        50% { opacity: 1; transform: scaleX(1); }
      }

      @keyframes historyContentIn {
        from {
          opacity: 0;
          transform: translateY(8px) scale(0.995);
        }
        to {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }

      @media (max-width: 1080px) {
        .header {
          padding-left: 1.25rem;
          padding-right: 1.25rem;
        }

        .hero {
          padding-left: 1.25rem;
          padding-top: 94px;
          align-items: flex-start;
        }

        .hero::before {
          width: 100%;
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.9) 0%,
            rgba(0, 0, 0, 0.76) 52%,
            rgba(0, 0, 0, 0.42) 78%,
            rgba(0, 0, 0, 0) 100%
          );
        }

        .hero-content {
          max-width: 100%;
          padding: 1rem 0.9rem 1.05rem;
        }

        .terminal-grid-wrap {
          padding-top: 86px;
        }

        .about-inner {
          padding: 3.4rem 1.25rem 4rem;
        }

        .about-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .footer-main {
          padding: 2.3rem 1.25rem 2rem;
        }

        .footer-top {
          flex-direction: column;
        }

        .scan-grid {
          grid-template-columns: 1fr;
        }
      }

      @media (max-width: 860px) {
        .nav {
          gap: 16px;
        }

        .terminal-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
          grid-template-rows: repeat(4, minmax(130px, 1fr));
          height: calc(100vh - 100px);
        }

        .subtitle-row {
          font-size: 16px;
          letter-spacing: 0.09em;
        }

        .subtitle-line {
          width: 42px;
        }

        .cta-row {
          flex-direction: column;
          align-items: flex-start;
        }

        .btn {
          width: 100%;
          max-width: 290px;
        }

        .footer-cols {
          grid-template-columns: repeat(2, minmax(0, 1fr));
          width: 100%;
        }

        .preview-strip {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
      }

      @media (max-width: 620px) {
        .header {
          height: 64px;
        }

        .nav {
          display: none;
        }

        .hero {
          min-height: auto;
          padding-top: 92px;
          padding-bottom: 32px;
        }

        .terminal-grid-wrap {
          position: fixed;
          opacity: 0.42;
        }

        .terminal-body {
          font-size: 11px;
        }

        .about-grid {
          grid-template-columns: 1fr;
        }

        .about-card {
          min-height: 0;
        }

        .login-title {
          font-size: 1.75rem;
        }

        .footer-cta {
          padding: 3.1rem 0.9rem 2.8rem;
        }

        .footer-cta-actions {
          display: grid;
          width: 100%;
          max-width: 320px;
          margin-left: auto;
          margin-right: auto;
        }

        .footer-action {
          width: 100%;
        }

        .footer-cols {
          grid-template-columns: 1fr;
        }

        .detect-split-actions {
          grid-template-columns: 1fr;
        }

        .detect-panel {
          grid-template-columns: 1fr;
          border-radius: 16px;
        }

        .detect-mode-menu {
          left: 0;
          right: 0;
          min-width: 0;
        }

        .app-top {
          justify-content: flex-start;
          overflow-x: auto;
          white-space: nowrap;
        }

        .account-dropdown {
          right: auto;
          left: 0;
        }

        .app-orb-wrap {
          width: min(90vw, 520px);
          height: min(90vw, 520px);
          opacity: 0.42;
        }
      }
    `,
    []
  );

  return (
    <div className="page">
      <style>{embeddedStyles}</style>

      {currentView === 'app' || isDetectionPage ? (
        <section className="app-shell" id="app">
          <aside className="app-sidebar" aria-label="App quick actions">
            <span className="app-side-dot" aria-hidden="true"><Shield size={12} /></span>

            <div className="app-side-item">
              <button type="button" className="app-side-dot" onClick={startNewDetection} aria-label="New detection">
                <Plus size={13} />
              </button>
              <div className="app-side-pop" role="status" aria-live="polite">
                <h5>New Detection</h5>
                <p>Start a new image check and upload files for AI detection.</p>
              </div>
            </div>

            <div className="app-side-item">
              <button type="button" className="app-side-dot" onClick={(event) => goToHistoryPage(event, scanMode)} aria-label="Detection history">
                <History size={13} />
              </button>
              <div className="app-side-pop" role="status" aria-live="polite">
                <h5>History</h5>
                {scanHistory.length === 0 ? (
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
                <button type="button" className="see-all" onClick={(event) => goToHistoryPage(event, scanMode)}>See all</button>
              </div>
            </div>

            <button type="button" className="app-side-dot" onClick={goToBatchPage} aria-label="Batch detection">
              <Link2 size={12} />
            </button>
          </aside>

          <header className="app-top">
            <span style={{ color: 'rgba(255,255,255,0.72)', fontSize: '0.76rem', marginRight: '0.25rem' }}>Hi,</span>
            <div className="account-dropdown-wrap" ref={accountMenuRef}>
              <button type="button" className="app-user-pill" onClick={toggleAccountMenu} aria-label="Account menu">
                MO
              </button>

              {accountMenuOpen && (
                <div className="account-dropdown" role="menu" aria-label="Account options">
                  <a href="#app" role="menuitem" onClick={() => setAccountMenuOpen(false)}>
                    <span>Profile</span>
                    <span>›</span>
                  </a>
                  <a href="#about" role="menuitem" onClick={() => setAccountMenuOpen(false)}>
                    <span>Settings</span>
                    <span>›</span>
                  </a>
                  <button type="button" className="danger" onClick={signOut} role="menuitem">
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
                      {scanMode === 'single' ? <ImagePlus size={16} /> : <Images size={16} />}
                      <span>{selectedImages.length > 0 ? `${selectedImages.length} image(s) selected` : `Upload image(s) for ${scanMode} detection`}</span>
                      <input type="file" accept="image/*" multiple={scanMode === 'batch'} onChange={onUploadImages} />
                    </label>

                    <button className="detect-scan" type="button" onClick={runScan} disabled={isScanning} aria-label="Scan images">
                      <Plane size={16} />
                    </button>
                  </div>

                  {selectedImages.length > 0 && (
                    <div className="preview-strip">
                      {selectedImages.map((item) => (
                        <div className="preview-item" key={item.preview}>
                          <img src={item.preview} alt={item.name} />
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

                      <div className="scan-detection-grid">
                        {activeDetections.map((image, index) => (
                          <article className="scan-card detection-card" key={image.preview}>
                            <div className="detection-thumb">
                              <img src={image.preview} alt={image.name} />
                            </div>
                            <h4><ScanSearch size={14} /> {image.name}</h4>
                            <div className="detection-meta">Rank #{index + 1} • AI {image.aiShare}% • Confidence {image.confidence}%</div>

                            <div className="graph-metrics">
                              <div className="graph-metric">
                                <span className="graph-metric-label">Confidence</span>
                                <div className="graph-bar"><span style={{ width: `${image.confidence}%` }}></span></div>
                              </div>
                              <div className="graph-metric">
                                <span className="graph-metric-label">AI likelihood</span>
                                <div className="graph-bar"><span style={{ width: `${image.aiShare}%` }}></span></div>
                              </div>
                              <div className="graph-metric">
                                <span className="graph-metric-label">Artifacts</span>
                                <div className="graph-bar"><span style={{ width: `${image.artifacts}%` }}></span></div>
                              </div>
                            </div>
                          </article>
                        ))}
                      </div>
                    </section>
                  )}

                  <section className="latest-preview">
                    <h4>Latest Scanned Preview ({currentModeLabel})</h4>
                    {latestScansForCurrentMode.length === 0 ? (
                      <p>No latest scan yet for this page.</p>
                    ) : (
                      <div className="preview-strip latest-mode-strip">
                        {latestScansForCurrentMode.map((entry) => (
                          <div className="preview-item" key={entry.id}>
                            <img src={entry.detections[0]?.preview} alt={entry.detections[0]?.name || 'Latest scan'} />
                          </div>
                        ))}
                      </div>
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
            {filteredHistory.length === 0 ? (
              <div className="history-empty">
                No {historyTab} detections yet. Run a {historyTab} scan first.
              </div>
            ) : (
              <div className="history-grid">
                {filteredHistory.map((entry) => (
                  <article className="history-card" key={entry.id}>
                    <div className="history-card-head">
                      <div>
                        <h3>{entry.mode === 'single' ? 'Single Image Scan' : 'Batch Scan'}</h3>
                        <p>{entry.scannedAt}</p>
                      </div>
                      <span className="history-badge">{entry.detections.length} image(s)</span>
                    </div>

                    <div style={{ marginBottom: '0.75rem', color: 'rgba(255,255,255,0.64)', fontSize: '0.8rem' }}>
                      {entry.mode === 'batch' ? 'Sorted from highest AI percent to lowest AI percent.' : 'Single image result.'}
                    </div>

                    <div className="history-detection-grid">
                      {entry.detections.map((image, index) => (
                        <article className="scan-card detection-card" key={image.preview}>
                          <div className="detection-thumb">
                            <img src={image.preview} alt={image.name} />
                          </div>
                          <h4><ScanSearch size={14} /> {image.name}</h4>
                          <div className="detection-meta">Rank #{index + 1} • AI {image.aiShare}% • Confidence {image.confidence}%</div>

                          <div className="graph-metrics">
                            <div className="graph-metric">
                              <span className="graph-metric-label">Confidence</span>
                              <div className="graph-bar"><span style={{ width: `${image.confidence}%` }}></span></div>
                            </div>
                            <div className="graph-metric">
                              <span className="graph-metric-label">AI likelihood</span>
                              <div className="graph-bar"><span style={{ width: `${image.aiShare}%` }}></span></div>
                            </div>
                            <div className="graph-metric">
                              <span className="graph-metric-label">Artifacts</span>
                              <div className="graph-bar"><span style={{ width: `${image.artifacts}%` }}></span></div>
                            </div>
                          </div>
                        </article>
                      ))}
                    </div>
                  </article>
                ))}
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

            <button className="login-google" type="button">Continue with Google</button>

            <div className="login-divider">OR</div>

            <form onSubmit={onAuthSubmit}>
              {currentView === 'signup' && (
                <input
                  className="login-input"
                  type="text"
                  name="fullName"
                  value={authForm.fullName}
                  onChange={onAuthInputChange}
                  placeholder="Enter your full name"
                  required
                />
              )}
              <input
                className="login-input"
                type="email"
                name="email"
                value={authForm.email}
                onChange={onAuthInputChange}
                placeholder="Enter your email address"
                required
              />
              <input
                className="login-input"
                type="password"
                name="password"
                value={authForm.password}
                onChange={onAuthInputChange}
                placeholder="Enter password"
                required
              />
              {currentView === 'signup' && (
                <input
                  className="login-input"
                  type="password"
                  name="confirmPassword"
                  value={authForm.confirmPassword}
                  onChange={onAuthInputChange}
                  placeholder="Confirm password"
                  required
                />
              )}

              {currentView === 'login' && (
                <div className="login-forgot">
                  <a href="#home">Forgot Password?</a>
                </div>
              )}

              {authError && (
                <div style={{ color: '#ffb78d', fontSize: '0.84rem', marginBottom: '0.7rem' }} role="alert">
                  {authError}
                </div>
              )}

              <button className="login-submit" type="submit">{currentView === 'signup' ? 'Sign Up' : 'Sign In'}</button>
            </form>

            <div className="login-signup">
              {currentView === 'signup' ? (
                <>
                  Already have an account? <a href="#login" onClick={goToLoginPage}>Log in</a>
                </>
              ) : (
                <>
                  Don&apos;t have an account? <a href="#signup" onClick={goToSignupPage}>Sign up</a>
                </>
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
          {terminals.map((terminal, terminalIndex) => (
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
          <div className="hero-badge reveal" style={{ animationDelay: `${heroAnimationDelays[0]}s` }}>
            <Zap size={16} strokeWidth={2.4} />
            <span>AI Image Detection</span>
          </div>

          <h1 className="headline reveal" style={{ animationDelay: `${heroAnimationDelays[1]}s` }}>
            <span className="headline-line">AI Image</span>
            <span className="headline-line">Detection System</span>
          </h1>

          <div className="subtitle-row reveal" style={{ animationDelay: `${heroAnimationDelays[2]}s` }}>
            <span className="subtitle-line"></span>
            <span>Powered by YOLOv8</span>
            <span className="subtitle-line"></span>
          </div>

          <p className="description reveal" style={{ animationDelay: `${heroAnimationDelays[3]}s` }}>
            Enterprise-grade AI agents with frontier and open-source model access. Detect AI-generated or
            manipulated images in seconds with confidence scoring.
          </p>

          <div className="cta-row reveal" style={{ animationDelay: `${heroAnimationDelays[4]}s` }}>
            <a className="btn btn-primary" href="#login" onClick={goToLoginPage}>Get Started →</a>
            <a className="btn btn-secondary" href="#about">Learn More</a>
          </div>

          <div className="pill-row reveal" style={{ animationDelay: `${heroAnimationDelays[5]}s` }} id="features">
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

          <div className="reveal" style={{ animationDelay: `${heroAnimationDelays[6]}s`, color: 'rgba(255,255,255,0.58)', fontSize: '13px' }}>
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
