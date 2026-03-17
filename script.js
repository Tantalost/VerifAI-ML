// DOM Elements
const fileInput = document.getElementById('fileInput');
const uploadArea = document.getElementById('uploadArea');
const previewArea = document.getElementById('previewArea');
const originalImage = document.getElementById('originalImage');
const imageOverlay = document.getElementById('imageOverlay');
const results = document.getElementById('results');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const closeMobileMenu = document.getElementById('closeMobileMenu');

// State
let currentImage = null;
let isAnalyzing = false;

// Mobile menu handlers
mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden');
});

closeMobileMenu.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
});

// Close mobile menu when clicking on links
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Smooth scrolling
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// File upload handlers
fileInput.addEventListener('change', handleFileSelect);

// Drag and drop handlers
uploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadArea.classList.add('dragover');
});

uploadArea.addEventListener('dragleave', () => {
    uploadArea.classList.remove('dragover');
});

uploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadArea.classList.remove('dragover');
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
        handleFile(files[0]);
    }
});

// Click to upload
uploadArea.addEventListener('click', (e) => {
    if (e.target === uploadArea || e.target.parentElement === uploadArea) {
        fileInput.click();
    }
});

function handleFileSelect(e) {
    const file = e.target.files[0];
    if (file) {
        handleFile(file);
    }
}

function handleFile(file) {
    // Validate file type
    if (!file.type.startsWith('image/')) {
        showNotification('Please upload an image file', 'error');
        return;
    }

    // Validate file size (10MB max)
    if (file.size > 10 * 1024 * 1024) {
        showNotification('File size must be less than 10MB', 'error');
        return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
        currentImage = e.target.result;
        displayImage(currentImage);
    };
    reader.readAsDataURL(file);
}

function displayImage(imageSrc) {
    originalImage.src = imageSrc;
    uploadArea.classList.add('hidden');
    previewArea.classList.remove('hidden');
    previewArea.classList.add('animate-fade-in');
    
    // Clear previous results
    results.innerHTML = '';
    imageOverlay.innerHTML = '';
    
    showNotification('Image uploaded successfully. Click "Analyze Image" to start detection.', 'success');
}

function analyzeImage() {
    if (!currentImage) {
        showNotification('Please upload an image first', 'warning');
        return;
    }

    if (isAnalyzing) {
        showNotification('Analysis already in progress...', 'info');
        return;
    }

    isAnalyzing = true;
    
    // Show loading state
    results.innerHTML = `
        <div class="flex flex-col items-center justify-center py-12 md:col-span-2">
            <div class="loading-spinner mb-4"></div>
            <p class="text-gray-400">Analyzing image with MT-YOLOv6...</p>
            <div class="progress-bar w-full max-w-md mt-4">
                <div class="progress-fill" style="width: 0%"></div>
            </div>
        </div>
    `;

    // Simulate progress
    const progressBar = results.querySelector('.progress-fill');
    let progress = 0;
    const progressInterval = setInterval(() => {
        progress += Math.random() * 30;
        if (progress > 90) {
            clearInterval(progressInterval);
            progress = 90;
        }
        progressBar.style.width = `${progress}%`;
    }, 500);

    // Simulate AI analysis (in real app, this would call the backend)
    setTimeout(() => {
        clearInterval(progressInterval);
        progressBar.style.width = '100%';
        
        setTimeout(() => {
            showResults();
            isAnalyzing = false;
        }, 500);
    }, 3000);
}

function showResults() {
    // Simulate detection results
    const isAI = Math.random() > 0.5;
    const confidence = 70 + Math.random() * 25;
    const credibility = 60 + Math.random() * 35;
    
    // Add detection overlay
    if (isAI) {
        addDetectionOverlay();
    }

    results.innerHTML = `
        <!-- Main Result Card -->
        <div class="result-card md:col-span-2">
            <div class="flex items-center justify-between mb-3">
                <h5 class="text-lg font-semibold text-white">Detection Result</h5>
                <span class="px-3 py-1 rounded-full text-sm font-semibold ${
                    isAI 
                        ? 'bg-red-500/20 text-red-400 border border-red-500/30' 
                        : 'bg-green-500/20 text-green-400 border border-green-500/30'
                }">
                    ${isAI ? 'AI-Generated' : 'Authentic'}
                </span>
            </div>
            <p class="text-gray-300 text-sm">
                ${isAI 
                    ? 'This image appears to be AI-generated or digitally manipulated. Our system detected patterns consistent with synthetic imagery.'
                    : 'This image appears to be authentic with no significant indicators of AI generation or manipulation.'}
            </p>
        </div>

        <!-- Confidence Score Card -->
        <div class="result-card">
            <h5 class="text-base font-semibold text-white mb-2">Confidence</h5>
            <div class="text-2xl font-bold text-white mb-2">${confidence.toFixed(1)}%</div>
            <div class="confidence-bar">
                <div class="confidence-fill ${getConfidenceClass(confidence)}" style="width: ${confidence}%"></div>
            </div>
            <p class="text-gray-400 text-xs mt-2">${getConfidenceDescription(confidence)}</p>
        </div>

        <!-- Credibility Score Card -->
        <div class="result-card">
            <h5 class="text-base font-semibold text-white mb-2">Credibility</h5>
            <div class="flex items-center gap-2 mb-2">
                <i class="fas fa-shield-alt text-${getCredibilityColor(credibility)}-400"></i>
                <span class="text-2xl font-bold text-white">${credibility.toFixed(0)}/100</span>
            </div>
            <div class="w-full bg-gray-700 rounded-full h-2">
                <div class="bg-gradient-to-r from-${getCredibilityColor(credibility)}-500 to-${getCredibilityColor(credibility)}-400 h-2 rounded-full" style="width: ${credibility}%"></div>
            </div>
            <p class="text-gray-400 text-xs mt-2">${getCredibilityLabel(credibility)}</p>
        </div>

        <!-- Analysis Details Card -->
        <div class="result-card">
            <h5 class="text-base font-semibold text-white mb-3">Analysis Details</h5>
            <div class="space-y-2 text-sm">
                <div class="flex justify-between">
                    <span class="text-gray-400">Artifacts</span>
                    <span class="text-${isAI ? 'red' : 'green'}-400">${isAI ? 'Detected' : 'None'}</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-gray-400">Patterns</span>
                    <span class="text-${isAI ? 'yellow' : 'green'}-400">${isAI ? 'Irregular' : 'Normal'}</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-gray-400">Pixels</span>
                    <span class="text-${isAI ? 'orange' : 'green'}-400">${isAI ? 'Anomalous' : 'Natural'}</span>
                </div>
            </div>
        </div>

        <!-- Recommendations Card -->
        <div class="result-card bg-blue-500/10 border-blue-500/30">
            <h5 class="text-base font-semibold text-white mb-2">
                <i class="fas fa-info-circle text-blue-400 mr-2"></i>Recommendations
            </h5>
            <ul class="space-y-1 text-gray-300 text-sm">
                ${isAI ? `
                    <li>• Exercise caution when sharing</li>
                    <li>• Verify source independently</li>
                    <li>• Consider potential impact</li>
                ` : `
                    <li>• Image appears authentic</li>
                    <li>• Still verify source when possible</li>
                    <li>• Can be shared with confidence</li>
                `}
            </ul>
        </div>
    `;

    showNotification('Analysis complete! Check the results below.', 'success');
}

function addDetectionOverlay() {
    // Simulate detection boxes on the image
    const detections = [
        { x: 20, y: 15, width: 30, height: 25, label: 'AI Pattern' },
        { x: 55, y: 60, width: 25, height: 20, label: 'Artifact' },
        { x: 10, y: 70, width: 20, height: 15, label: 'Anomaly' }
    ];

    detections.forEach((detection, index) => {
        const box = document.createElement('div');
        box.className = 'detection-box';
        box.style.left = `${detection.x}%`;
        box.style.top = `${detection.y}%`;
        box.style.width = `${detection.width}%`;
        box.style.height = `${detection.height}%`;
        
        const label = document.createElement('div');
        label.className = 'detection-label';
        label.textContent = detection.label;
        box.appendChild(label);
        
        imageOverlay.appendChild(box);
        
        // Animate detection boxes
        setTimeout(() => {
            box.style.opacity = '1';
            box.style.animation = 'fadeIn 0.5s ease-out';
        }, index * 200);
    });
}

function getConfidenceClass(confidence) {
    if (confidence >= 80) return 'confidence-high';
    if (confidence >= 60) return 'confidence-medium';
    return 'confidence-low';
}

function getConfidenceDescription(confidence) {
    if (confidence >= 80) return 'High confidence in this detection result';
    if (confidence >= 60) return 'Moderate confidence - result may be reliable';
    return 'Low confidence - consider additional verification';
}

function getCredibilityColor(credibility) {
    if (credibility >= 70) return 'green';
    if (credibility >= 40) return 'yellow';
    return 'red';
}

function getCredibilityLabel(credibility) {
    if (credibility >= 70) return 'High Credibility';
    if (credibility >= 40) return 'Medium Credibility';
    return 'Low Credibility';
}

function getCredibilityDescription(credibility) {
    if (credibility >= 70) return 'Image shows high reliability and authenticity indicators';
    if (credibility >= 40) return 'Image has mixed reliability indicators';
    return 'Image shows significant reliability concerns';
}

function resetDetection() {
    currentImage = null;
    isAnalyzing = false;
    fileInput.value = '';
    
    uploadArea.classList.remove('hidden');
    previewArea.classList.add('hidden');
    
    // Reset animations
    previewArea.classList.remove('animate-fade-in');
    
    showNotification('Ready for new image upload', 'info');
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="flex items-center">
            <i class="fas fa-${getNotificationIcon(type)} mr-3"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideInRight 0.3s ease reverse';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

function getNotificationIcon(type) {
    switch (type) {
        case 'success': return 'check-circle';
        case 'error': return 'exclamation-circle';
        case 'warning': return 'exclamation-triangle';
        case 'info': return 'info-circle';
        default: return 'info-circle';
    }
}

// Initialize animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
        }
    });
}, observerOptions);

// Observe feature cards
document.addEventListener('DOMContentLoaded', () => {
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        observer.observe(card);
    });
});

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + O to open file
    if ((e.ctrlKey || e.metaKey) && e.key === 'o') {
        e.preventDefault();
        fileInput.click();
    }
    
    // Escape to close mobile menu
    if (e.key === 'Escape') {
        mobileMenu.classList.add('hidden');
    }
    
    // Ctrl/Cmd + Enter to analyze (when image is loaded)
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter' && currentImage) {
        e.preventDefault();
        analyzeImage();
    }
});

// Add touch gestures for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - could be used for navigation
            console.log('Swipe left');
        } else {
            // Swipe right - could be used for navigation
            console.log('Swipe right');
        }
    }
}

// Performance optimization - lazy loading images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize
lazyLoadImages();

// Add page visibility handling
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Page is hidden - pause any ongoing operations
        console.log('Page hidden');
    } else {
        // Page is visible - resume operations
        console.log('Page visible');
    }
});

// Error handling
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
    showNotification('An unexpected error occurred. Please try again.', 'error');
});

// Add loading states for better UX
function setLoadingState(element, loading = true) {
    if (loading) {
        element.disabled = true;
        element.classList.add('opacity-50', 'cursor-not-allowed');
    } else {
        element.disabled = false;
        element.classList.remove('opacity-50', 'cursor-not-allowed');
    }
}
