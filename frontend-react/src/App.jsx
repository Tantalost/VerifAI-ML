import React, { useMemo, useRef, useState } from 'react';
import TrueFocus from './components/TrueFocus.jsx';
import LightPillar from './components/LightPillar.jsx';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000';

function Notification({ message, type }) {
  const icon = useMemo(() => {
    switch (type) {
      case 'success': return 'check-circle';
      case 'error': return 'exclamation-circle';
      case 'warning': return 'exclamation-triangle';
      case 'info':
      default: return 'info-circle';
    }
  }, [type]);
  return (
    <div className={`notification ${type}`}>
      <div className="flex items-center">
        <i className={`fas fa-${icon} mr-3`}></i>
        <span>{message}</span>
      </div>
    </div>
  );
}

function App() {
  const fileInputRef = useRef(null);
  const uploadAreaRef = useRef(null);
  const imageOverlayRef = useRef(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentFile, setCurrentFile] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState(null);
  const [notifications, setNotifications] = useState([]);

  function pushNotification(message, type = 'info') {
    const id = Date.now() + Math.random();
    setNotifications((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, 5000);
  }

  function onChooseImageClick() {
    fileInputRef.current?.click();
  }

  function onFileChange(e) {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  }

  function handleFile(file) {
    if (!file.type.startsWith('image/')) {
      pushNotification('Please upload an image file', 'error');
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      pushNotification('File size must be less than 10MB', 'error');
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      setCurrentImage(e.target.result);
      setCurrentFile(file);
      setResults(null);
      if (imageOverlayRef.current) imageOverlayRef.current.innerHTML = '';
      pushNotification('Image uploaded successfully. Click "Analyze Image" to start detection.', 'success');
    };
    reader.readAsDataURL(file);
  }

  function renderDetections(detections, dimensions) {
    if (!imageOverlayRef.current) return;
    imageOverlayRef.current.innerHTML = '';

    if (!Array.isArray(detections) || detections.length === 0) return;

    const [imageWidth, imageHeight] = Array.isArray(dimensions) ? dimensions : [1, 1];
    if (!imageWidth || !imageHeight) return;

    detections.forEach((detection, index) => {
      const boxData = detection?.box;
      if (!boxData) return;

      const boxWidth = Math.max(0, boxData.xmax - boxData.xmin);
      const boxHeight = Math.max(0, boxData.ymax - boxData.ymin);

      const box = document.createElement('div');
      box.className = 'detection-box';
      box.style.left = `${(boxData.xmin / imageWidth) * 100}%`;
      box.style.top = `${(boxData.ymin / imageHeight) * 100}%`;
      box.style.width = `${(boxWidth / imageWidth) * 100}%`;
      box.style.height = `${(boxHeight / imageHeight) * 100}%`;
      box.style.opacity = '0';

      const label = document.createElement('div');
      label.className = 'detection-label';
      label.textContent = `${detection.class_name || 'object'} ${(detection.confidence * 100).toFixed(1)}%`;
      box.appendChild(label);

      imageOverlayRef.current.appendChild(box);
      setTimeout(() => {
        box.style.opacity = '1';
        box.style.animation = 'fadeIn 0.4s ease-out';
      }, index * 120);
    });
  }

  function onDragOver(e) {
    e.preventDefault();
    const uploadEl = uploadAreaRef.current;
    if (uploadEl) uploadEl.classList.add('dragover');
  }
  function onDragLeave() {
    const uploadEl = uploadAreaRef.current;
    if (uploadEl) uploadEl.classList.remove('dragover');
  }
  function onDrop(e) {
    e.preventDefault();
    const uploadEl = uploadAreaRef.current;
    if (uploadEl) uploadEl.classList.remove('dragover');
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      handleFile(files[0]);
    }
  }

  async function analyzeImage() {
    if (!currentImage || !currentFile) {
      pushNotification('Please upload an image first', 'warning');
      return;
    }
    if (isAnalyzing) {
      pushNotification('Analysis already in progress...', 'info');
      return;
    }
    setIsAnalyzing(true);
    setResults({
      loading: true,
      progress: 0
    });

    if (imageOverlayRef.current) imageOverlayRef.current.innerHTML = '';

    let progress = 0;
    const interval = setInterval(() => {
      progress = Math.min(92, progress + Math.random() * 14);
      setResults((r) => r && r.loading ? { ...r, progress } : r);
    }, 500);

    try {
      const formData = new FormData();
      formData.append('file', currentFile);

      const response = await fetch(`${API_BASE_URL}/api/v1/analyze`, {
        method: 'POST',
        body: formData
      });

      const payload = await response.json();
      if (!response.ok) {
        throw new Error(payload?.detail || 'Failed to analyze image.');
      }

      clearInterval(interval);

      const detections = Array.isArray(payload.detections) ? payload.detections : [];
      const maxConfidence = detections.length > 0
        ? Math.max(...detections.map((d) => (d.confidence || 0) * 100))
        : 0;

      renderDetections(detections, payload.dimensions);

      setResults({
        loading: false,
        analysis: payload.analysis,
        detections,
        confidence: maxConfidence,
        dimensions: payload.dimensions,
        filename: payload.filename,
        modelPath: payload.model_path,
      });

      setIsAnalyzing(false);
      pushNotification('Analysis complete! Check the results below.', 'success');
    } catch (error) {
      clearInterval(interval);
      setResults(null);
      setIsAnalyzing(false);
      pushNotification(error.message || 'Analysis failed.', 'error');
    }
  }

  function resetDetection() {
    setCurrentImage(null);
    setCurrentFile(null);
    setIsAnalyzing(false);
    setResults(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
    if (imageOverlayRef.current) imageOverlayRef.current.innerHTML = '';
    pushNotification('Ready for new image upload', 'info');
  }

  function getConfidenceClass(confidence) {
    if (confidence >= 80) return 'confidence-high';
    if (confidence >= 60) return 'confidence-medium';
    return 'confidence-low';
  }

  function getCredibilityColor(credibility) {
    if (credibility >= 70) return 'green';
    if (credibility >= 40) return 'yellow';
    return 'red';
  }

  function getCredibilityClasses(credibility) {
    const color = getCredibilityColor(credibility);
    if (color === 'green') return { icon: 'text-green-400', bar: 'from-green-500 to-green-400' };
    if (color === 'yellow') return { icon: 'text-yellow-400', bar: 'from-yellow-500 to-yellow-400' };
    return { icon: 'text-red-400', bar: 'from-red-500 to-red-400' };
  }

  function getStatusClasses(status) {
    if (status === 'Likely Real') {
      return 'bg-green-500/20 text-green-400 border border-green-500/30';
    }
    if (status === 'Suspicious') {
      return 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30';
    }
    return 'bg-red-500/20 text-red-400 border border-red-500/30';
  }

  function getStatusMessage(status) {
    if (status === 'Likely Real') {
      return 'This image appears authentic based on the current model output.';
    }
    if (status === 'Suspicious') {
      return 'This image contains suspicious regions and may include manipulations.';
    }
    return 'This image is highly likely AI-generated or manipulated based on detected artifacts.';
  }

  function getDetailClass(label, status) {
    if (status === 'Likely Real') return 'text-green-400';
    if (status === 'Suspicious' && label === 'Patterns') return 'text-yellow-400';
    if (status === 'Suspicious') return 'text-orange-400';
    if (label === 'Patterns') return 'text-yellow-400';
    return 'text-red-400';
  }
  function getCredibilityLabel(credibility) {
    if (credibility >= 70) return 'High Credibility';
    if (credibility >= 40) return 'Medium Credibility';
    return 'Low Credibility';
  }
  function getConfidenceDescription(confidence) {
    if (confidence >= 80) return 'High confidence in this detection result';
    if (confidence >= 60) return 'Moderate confidence - result may be reliable';
    return 'Low confidence - consider additional verification';
  }

  return (
    <>
      {/* Animated gradient background layer */}
      <div className="bg-anim"></div>
      {/* Full-viewport animated background */}
      <LightPillar
        topColor="#48FF28"
        bottomColor="#9EF19E"
        intensity={1}
        rotationSpeed={0.1}
        glowAmount={0.002}
        pillarWidth={2}
        pillarHeight={0.3}
        noiseIntensity={0.5}
        pillarRotation={25}
        viewScale={1}
        diagonalTilt={0}
        interactive={false}
        mixBlendMode="normal"
      />

      <div className="relative z-10">
      <div className="container mx-auto px-6 pt-8 md:pt-10">
        <nav className="hero-nav-pill">
          <div className="flex items-center justify-between">
            <a href="#home" className="flex items-center space-x-3 text-white/90 hover:text-white transition-colors">
              <div className="w-9 h-9 hero-logo-badge rounded-full flex items-center justify-center">
                <i className="fas fa-shield-alt text-white text-sm"></i>
              </div>
              <h1 className="text-lg md:text-xl font-semibold tracking-wide">VerifAI</h1>
            </a>
            <div className="hidden md:flex items-center gap-8 pr-2">
              <a href="#home" className="hero-nav-link">Home</a>
              <a href="#about" className="hero-nav-link">About</a>
              <a href="#detect" className="hero-nav-link">Detect</a>
              <a href="#features" className="hero-nav-link">Features</a>
            </div>
            <button onClick={() => setMobileOpen(true)} className="md:hidden text-white/90">
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </nav>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <a href="#home" onClick={() => setMobileOpen(false)} className="text-2xl text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="#about" onClick={() => setMobileOpen(false)} className="text-2xl text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#detect" onClick={() => setMobileOpen(false)} className="text-2xl text-gray-300 hover:text-white transition-colors">Detect</a>
            <a href="#features" onClick={() => setMobileOpen(false)} className="text-2xl text-gray-300 hover:text-white transition-colors">Features</a>
            <button onClick={() => setMobileOpen(false)} className="text-white">
              <i className="fas fa-times text-2xl"></i>
            </button>
          </div>
        </div>
      )}

      <section id="home" className="container mx-auto px-6 pt-16 md:pt-20 pb-20 min-h-[78vh] md:min-h-[82vh] flex items-center justify-center">
        <div className="text-center max-w-4xl w-full">
          <div className="hero-top-badge mb-8">
            <i className="fas fa-sparkles mr-2 text-[0.68rem]"></i>
            AI Image Detection
          </div>
          <div className="mb-6 hero-focus-wrap">
            <TrueFocus
              sentence="AI Image Detection System|Powered by YOLOv5"
              separator="|"
              vertical={true}
              manualMode={false}
              blurAmount={5}
              borderColor="#48FF28"
              glowColor="rgba(72, 255, 40, 0.55)"
              animationDuration={0.5}
              pauseBetweenAnimations={1}
            />
          </div>
          <p className="text-base md:text-lg text-gray-300/95 max-w-2xl mx-auto mb-9 leading-relaxed">
            Detect AI-generated or manipulated images in seconds with confidence scoring and clear visual results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#detect" className="hero-cta-primary">
              Detection
            </a>
            <a href="#about" className="hero-cta-secondary">
              Learn More
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold text-white text-center mb-12">About VerifAI</h3>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <p className="text-gray-300 leading-relaxed mb-6">
              VerifAI is a cutting-edge Machine Learning-based AI Image Detection System designed to combat the growing threat of AI-generated misinformation. 
              Using the advanced MT-YOLOv6 architecture, our system analyzes visual content to determine authenticity with remarkable accuracy.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              The system integrates sophisticated credibility scoring mechanisms to provide users with comprehensive insights about image reliability, 
              helping to create a safer digital environment for everyone.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <i className="fas fa-brain text-blue-400 text-xl mt-1"></i>
                <div>
                  <h4 className="text-white font-semibold mb-1">Advanced AI Technology</h4>
                  <p className="text-gray-400 text-sm">Powered by MT-YOLOv6 for real-time detection</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <i className="fas fa-chart-line text-purple-400 text-xl mt-1"></i>
                <div>
                  <h4 className="text-white font-semibold mb-1">Credibility Scoring</h4>
                  <p className="text-gray-400 text-sm">Quantitative reliability assessment</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <i className="fas fa-bolt text-yellow-400 text-xl mt-1"></i>
                <div>
                  <h4 className="text-white font-semibold mb-1">Real-time Processing</h4>
                  <p className="text-gray-400 text-sm">Instant analysis and results</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <i className="fas fa-shield-alt text-green-400 text-xl mt-1"></i>
                <div>
                  <h4 className="text-white font-semibold mb-1">Privacy Protection</h4>
                  <p className="text-gray-400 text-sm">Secure image processing</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="rounded-2xl border border-green-300/20 bg-gradient-to-r from-green-900/35 to-black/45 backdrop-blur-sm p-6 shadow-[0_0_18px_rgba(72,255,40,0.12)]">
              <div className="text-4xl font-bold text-blue-400 mb-2">95%+</div>
              <div className="text-gray-200 text-2xl/6 md:text-xl">Detection Accuracy</div>
            </div>
            <div className="rounded-2xl border border-green-300/20 bg-gradient-to-r from-green-900/35 to-black/45 backdrop-blur-sm p-6 shadow-[0_0_18px_rgba(72,255,40,0.12)]">
              <div className="text-4xl font-bold text-fuchsia-400 mb-2">&lt;2s</div>
              <div className="text-gray-200 text-2xl/6 md:text-xl">Processing Time</div>
            </div>
            <div className="rounded-2xl border border-green-300/20 bg-gradient-to-r from-green-900/35 to-black/45 backdrop-blur-sm p-6 shadow-[0_0_18px_rgba(72,255,40,0.12)]">
              <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-200 text-2xl/6 md:text-xl">Available</div>
            </div>
          </div>
        </div>
      </section>

      <section id="detect" className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold text-white text-center mb-12">Image Detection</h3>

          {!currentImage && (
            <div
              id="uploadArea"
              ref={uploadAreaRef}
              onDragOver={onDragOver}
              onDragLeave={onDragLeave}
              onDrop={onDrop}
              onClick={(e) => {
                if (e.target === uploadAreaRef.current || e.target.parentElement === uploadAreaRef.current) {
                  onChooseImageClick();
                }
              }}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 border-dashed border-2 hover:border-emerald-400 hover:shadow-[0_0_28px_rgba(72,255,40,0.2)] transition-all duration-300 upload-area"
            >
              <div className="text-center">
                <i className="fas fa-cloud-upload-alt text-6xl text-emerald-400 mb-4 transition-colors group-hover:text-[#48FF28]"></i>
                <h4 className="text-2xl font-semibold text-white mb-2">Upload Image for Analysis</h4>
                <p className="text-gray-400 mb-6">Drag and drop an image here or click to browse</p>
                <input ref={fileInputRef} onChange={onFileChange} type="file" accept="image/*" className="hidden" />
                <button onClick={onChooseImageClick} className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-lg font-semibold hover:from-green-400 hover:to-emerald-500 hover:shadow-[0_0_20px_rgba(72,255,40,0.4)] transition-all">
                  <i className="fas fa-folder-open mr-2"></i>Choose Image
                </button>
                <p className="text-gray-500 text-sm mt-4">Supported formats: JPG, PNG (Max 10MB)</p>
              </div>
            </div>
          )}

          {currentImage && (
            <div id="previewArea" className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 animate-fade-in">
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-white mb-4">Original Image</h4>
                <div className="relative max-w-2xl mx-auto">
                  <img src={currentImage} alt="Original" className="w-full rounded-lg max-h-96 object-contain" />
                  <div ref={imageOverlayRef} className="absolute inset-0 pointer-events-none"></div>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-4">Analysis Results</h4>
                <div id="results" className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {!results && null}
                  {results?.loading && (
                    <div className="flex flex-col items-center justify-center py-12 md:col-span-2">
                      <div className="loading-spinner mb-4"></div>
                      <p className="text-gray-400">Analyzing image with MT-YOLOv6...</p>
                      <div className="progress-bar w-full max-w-md mt-4">
                        <div className="progress-fill" style={{ width: `${results.progress}%` }}></div>
                      </div>
                    </div>
                  )}
                  {!results?.loading && results && (
                    <>
                      <div className="result-card md:col-span-2">
                        <div className="flex items-center justify-between mb-3">
                          <h5 className="text-lg font-semibold text-white">Detection Result</h5>
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusClasses(results.analysis.status)}`}>
                            {results.analysis.status}
                          </span>
                        </div>
                        <p className="text-gray-300 text-sm">
                          {getStatusMessage(results.analysis.status)}
                        </p>
                        <p className="text-gray-500 text-xs mt-3">
                          File: {results.filename} | Model: {results.modelPath}
                        </p>
                      </div>
                      <div className="result-card">
                        <h5 className="text-base font-semibold text-white mb-2">Confidence</h5>
                        <div className="text-2xl font-bold text-white mb-2">{results.confidence.toFixed(1)}%</div>
                        <div className="confidence-bar">
                          <div className={`confidence-fill ${getConfidenceClass(results.confidence)}`} style={{ width: `${results.confidence}%` }}></div>
                        </div>
                        <p className="text-gray-400 text-xs mt-2">{getConfidenceDescription(results.confidence)}</p>
                      </div>
                      <div className="result-card">
                        <h5 className="text-base font-semibold text-white mb-2">Credibility</h5>
                        {(() => {
                          const credibilityClasses = getCredibilityClasses(results.analysis.score);
                          return (
                        <div className="flex items-center gap-2 mb-2">
                          <i className={`fas fa-shield-alt ${credibilityClasses.icon}`}></i>
                          <span className="text-2xl font-bold text-white">{results.analysis.score.toFixed(0)}/100</span>
                        </div>
                          );
                        })()}
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          {(() => {
                            const credibilityClasses = getCredibilityClasses(results.analysis.score);
                            return <div className={`bg-gradient-to-r ${credibilityClasses.bar} h-2 rounded-full`} style={{ width: `${results.analysis.score}%` }}></div>;
                          })()}
                        </div>
                        <p className="text-gray-400 text-xs mt-2">{getCredibilityLabel(results.analysis.score)}</p>
                      </div>
                      <div className="result-card">
                        <h5 className="text-base font-semibold text-white mb-3">Analysis Details</h5>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-400">Detections</span>
                            <span className={results.detections.length > 0 ? 'text-red-400' : 'text-green-400'}>{results.detections.length}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Anomalies</span>
                            <span className={results.analysis.anomalies_found > 0 ? 'text-orange-400' : 'text-green-400'}>{results.analysis.anomalies_found}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Patterns</span>
                            <span className={getDetailClass('Patterns', results.analysis.status)}>{results.analysis.status === 'Likely Real' ? 'Normal' : 'Irregular'}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Resolution</span>
                            <span className="text-blue-300">{results.dimensions?.[0]} x {results.dimensions?.[1]}</span>
                          </div>
                        </div>
                      </div>
                      {results.detections.length > 0 && (
                        <div className="result-card md:col-span-2">
                          <h5 className="text-base font-semibold text-white mb-3">Detected Regions</h5>
                          <div className="space-y-2 text-sm max-h-48 overflow-y-auto pr-2">
                            {results.detections.map((detection, index) => (
                              <div key={`${detection.class_name}-${index}`} className="flex items-center justify-between border-b border-white/10 pb-1">
                                <span className="text-gray-300">{detection.class_name}</span>
                                <span className="text-red-300">{(detection.confidence * 100).toFixed(1)}%</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      <div className="result-card bg-blue-500/10 border-blue-500/30">
                        <h5 className="text-base font-semibold text-white mb-2">
                          <i className="fas fa-info-circle text-blue-400 mr-2"></i>Recommendations
                        </h5>
                        <ul className="space-y-1 text-gray-300 text-sm">
                          {results.analysis.status === 'Likely Real' ? (
                            <>
                              <li>• Image appears authentic</li>
                              <li>• Still verify source when possible</li>
                              <li>• Can be shared with confidence</li>
                            </>
                          ) : results.analysis.status === 'Suspicious' ? (
                            <>
                              <li>• Review highlighted regions carefully</li>
                              <li>• Compare with original source if available</li>
                              <li>• Request additional verification before sharing</li>
                            </>
                          ) : (
                            <>
                              <li>• Exercise caution when sharing</li>
                              <li>• Verify source independently</li>
                              <li>• Consider potential impact</li>
                            </>
                          )}
                        </ul>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
                <button onClick={analyzeImage} className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-lg font-semibold hover:from-green-400 hover:to-emerald-500 hover:shadow-[0_0_20px_rgba(72,255,40,0.4)] transition-all">
                  <i className="fas fa-search mr-2"></i>Analyze Image
                </button>
                <button onClick={resetDetection} className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/20">
                  <i className="fas fa-redo mr-2"></i>Upload New Image
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      <section id="features" className="container mx-auto px-6 py-20">
        <h3 className="text-4xl font-bold text-white text-center mb-12">Key Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 transition-all duration-300 feature-card">
            <i className="fas fa-eye text-3xl text-blue-400 mb-4 transition-colors group-hover:text-[#48FF28]"></i>
            <h4 className="text-xl font-semibold text-white mb-2">Visual Feature Extraction</h4>
            <p className="text-gray-400">Identifies unique patterns and artifacts associated with AI-generated images</p>
          </div>
          <div className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 transition-all duration-300 feature-card">
            <i className="fas fa-tachometer-alt text-3xl text-purple-400 mb-4 transition-colors group-hover:text-[#48FF28]"></i>
            <h4 className="text-xl font-semibold text-white mb-2">Real-time Processing</h4>
            <p className="text-gray-400">Get instant results with our optimized MT-YOLOv6 architecture</p>
          </div>
          <div className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 transition-all duration-300 feature-card">
            <i className="fas fa-percentage text-3xl text-green-400 mb-4 transition-colors group-hover:text-[#48FF28]"></i>
            <h4 className="text-xl font-semibold text-white mb-2">Confidence Scoring</h4>
            <p className="text-gray-400">Detailed confidence levels and credibility metrics for each analysis</p>
          </div>
          <div className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 transition-all duration-300 feature-card">
            <i className="fas fa-map-marked-alt text-3xl text-yellow-400 mb-4 transition-colors group-hover:text-[#48FF28]"></i>
            <h4 className="text-xl font-semibold text-white mb-2">Visual Annotations</h4>
            <p className="text-gray-400">Highlighted regions showing detected anomalies and AI patterns</p>
          </div>
          <div className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 transition-all duration-300 feature-card">
            <i className="fas fa-lock text-3xl text-indigo-400 mb-4 transition-colors group-hover:text-[#48FF28]"></i>
            <h4 className="text-xl font-semibold text-white mb-2">Privacy First</h4>
            <p className="text-gray-400">Local processing ensures your images remain private and secure</p>
          </div>
        </div>
      </section>

      <footer className="bg-black/50 backdrop-blur-sm border-t border-white/10 mt-12">
        <div className="container mx-auto px-6 py-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-9 h-9 hero-logo-badge rounded-full flex items-center justify-center">
                  <i className="fas fa-shield-alt text-white text-sm"></i>
                </div>
                <h4 className="text-xl font-semibold tracking-wide text-white">VerifAI</h4>
              </div>
              <p className="text-gray-400">AI Image Detection System powered by MT-YOLOv6</p>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#detect" className="text-gray-400 hover:text-white transition-colors">Detect</a></li>
                <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Technology</h5>
              <ul className="space-y-2">
                <li><span className="text-gray-400">MT-YOLOv6</span></li>
                <li><span className="text-gray-400">Machine Learning</span></li>
                <li><span className="text-gray-400">Computer Vision</span></li>
                <li><span className="text-gray-400">Deep Learning</span></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Team</h5>
              <p className="text-gray-400 text-sm">Alviar, Justin James E.</p>
              <p className="text-gray-400 text-sm">Arobie, Mohammad Rashdy L.</p>
              <p className="text-gray-400 text-sm">Climaco, John Lloyd L.</p>
              <p className="text-gray-400 text-sm">Mamiala, Denabhar</p>
              <p className="text-gray-400 text-sm">Lagoyo, Shadia</p>
            </div>
          </div>
          <div className="border-t border-white/10 mt-6 pt-6 text-center">
            <p className="text-gray-400">© 2026 VerifAI. IT 322 - Machine Learning Project. WMSU College of Computing Studies</p>
          </div>
        </div>
      </footer>

      <div className="fixed top-5 right-5 space-y-3 z-50">
        {notifications.map((n) => (
          <Notification key={n.id} message={n.message} type={n.type} />
        ))}
      </div>
      </div>
    </>
  );
}

export default App;
