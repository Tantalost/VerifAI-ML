import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './LightPillar.css';

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = `
  precision mediump float;
  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec2 uMouse;
  uniform vec3 uTopColor;
  uniform vec3 uBottomColor;
  uniform float uIntensity;
  uniform bool uInteractive;
  uniform float uGlowAmount;
  uniform float uPillarWidth;
  uniform float uPillarHeight;
  uniform float uNoiseIntensity;
  uniform float uPillarRotation;
  uniform float uViewScale;
  uniform float uDiagonalTilt;
  varying vec2 vUv;

  const float PI = 3.141592653589793;
  const float EPSILON = 0.001;
  const float E = 2.71828182845904523536;
  const float HALF = 0.5;

  mat2 rot(float angle) {
    float s = sin(angle);
    float c = cos(angle);
    return mat2(c, -s, s, c);
  }

  float noise(vec2 coord) {
    float G = E;
    vec2 r = (G * sin(G * coord));
    return fract(r.x * r.y * (1.0 + coord.x));
  }

  vec3 applyWaveDeformation(vec3 pos, float timeOffset) {
    float frequency = 1.0;
    float amplitude = 1.28;
    vec3 deformed = pos;

    for(float i = 0.0; i < 4.0; i++) {
      deformed.xz *= rot(0.4);
      float phase = timeOffset * i * 2.0;
      vec3 oscillation = cos(deformed.zxy * frequency - phase);
      deformed += oscillation * amplitude;
      frequency *= 2.0;
      amplitude *= HALF;
    }
    return deformed;
  }

  void diagonalTilt(inout vec3 pos) {
    pos.x -= pos.y * uDiagonalTilt;
  }

  void auroraWisp(inout vec3 pos, float t) {
    float py = pos.y;
    pos.x += sin(py * 0.22 + t * 0.4) * 0.13;
    pos.x += sin(py * 0.12 + t * 0.52 + 2.0) * 0.09;
    pos.z += sin(py * 0.18 + t * 0.43) * 0.07;
  }

  float blendMin(float a, float b, float k) {
    float scaledK = k * 4.0;
    float h = max(scaledK - abs(a - b), 0.0);
    return min(a, b) - h * h * 0.25 / scaledK;
  }

  float blendMax(float a, float b, float k) {
    return -blendMin(-a, -b, k);
  }

  void main() {
    vec2 fragCoord = vUv * uResolution;
    vec2 uv = (fragCoord * 2.0 - uResolution) / uResolution.y;

    float rotAngle = uPillarRotation * PI / 180.0;
    uv *= rot(rotAngle);
    uv *= uViewScale;

    vec3 origin = vec3(0.0, 0.0, -10.0);
    vec3 direction = normalize(vec3(uv, 1.0));

    float maxDepth = 50.0;
    float depth = 0.1;

    mat2 rotX = rot(uTime * 0.2);
    if(uInteractive && length(uMouse) > 0.0) {
      rotX = rot(uMouse.x * PI * 2.0);
    }

    vec3 color = vec3(0.0);

    for(float i = 0.0; i < 100.0; i++) {
      vec3 pos = origin + direction * depth;
      pos.xz *= rotX;
      diagonalTilt(pos);
      auroraWisp(pos, uTime);

      vec3 deformed = pos;
      deformed.y *= uPillarHeight;
      deformed = applyWaveDeformation(deformed + vec3(0.0, uTime, 0.0), uTime);

      vec2 cosinePair = cos(deformed.xz);
      float fieldDistance = length(cosinePair) - 0.2;

      float radialBound = length(pos.xz) - uPillarWidth;
      fieldDistance = blendMax(radialBound, fieldDistance, 1.0);
      fieldDistance = abs(fieldDistance) * 0.15 + 0.01;

      vec3 gradient = mix(uBottomColor, uTopColor, 0.5);
      color += gradient * pow(1.0 / fieldDistance, 1.0);

      if(fieldDistance < EPSILON || depth > maxDepth) break;
      depth += fieldDistance;
    }

    float widthNormalization = uPillarWidth / 3.0;
    color = tanh(color * uGlowAmount / widthNormalization);

    vec2 fc = gl_FragCoord.xy;
    float g1 = noise(fc * 1.45);
    float g2 = noise(fc * 2.95 + vec2(17.3, 9.1));
    float g3 = noise(fc * 4.35 + vec2(31.0, 7.0));
    float grain = g1 * 0.46 + g2 * 0.34 + g3 * 0.2;
    color -= grain / 21.0 * uNoiseIntensity;
    float gc = grain - 0.5;
    color += vec3(0.06, 0.16, 0.09) * gc * uNoiseIntensity * 0.07;
    color = max(color, vec3(0.0));

    gl_FragColor = vec4(color * uIntensity, 1.0);
  }
`;

export default function LightPillar({
  topColor = '#48FF28',
  bottomColor = '#9EF19E',
  intensity = 1.0,
  rotationSpeed = 0.3,
  interactive = false,
  className = '',
  glowAmount = 0.005,
  pillarWidth = 3.0,
  pillarHeight = 0.4,
  noiseIntensity = 0.5,
  mixBlendMode = 'screen',
  pillarRotation = 0,
  viewScale = 1.0,
  diagonalTilt = 0.07,
}) {
  const containerRef = useRef(null);
  const propsRef = useRef({
    topColor,
    bottomColor,
    intensity,
    rotationSpeed,
    interactive,
    glowAmount,
    pillarWidth,
    pillarHeight,
    noiseIntensity,
    pillarRotation,
    viewScale,
    diagonalTilt,
  });

  propsRef.current = {
    topColor,
    bottomColor,
    intensity,
    rotationSpeed,
    interactive,
    glowAmount,
    pillarWidth,
    pillarHeight,
    noiseIntensity,
    pillarRotation,
    viewScale,
    diagonalTilt,
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const canvas = document.createElement('canvas');
    const gl =
      canvas.getContext('webgl2') ||
      canvas.getContext('webgl') ||
      canvas.getContext('experimental-webgl');
    canvas.remove();
    if (!gl) return;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: false,
        alpha: true,
        powerPreference: 'high-performance',
        precision: 'lowp',
        stencil: false,
        depth: false,
      });
    } catch {
      return;
    }

    const width = container.clientWidth;
    const height = container.clientHeight;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width || 1, height || 1);
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const topColorTmp = new THREE.Color();
    const bottomColorTmp = new THREE.Color();

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: new THREE.Vector2(width, height) },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uTopColor: { value: new THREE.Vector3() },
        uBottomColor: { value: new THREE.Vector3() },
        uIntensity: { value: propsRef.current.intensity },
        uInteractive: { value: propsRef.current.interactive },
        uGlowAmount: { value: propsRef.current.glowAmount },
        uPillarWidth: { value: propsRef.current.pillarWidth },
        uPillarHeight: { value: propsRef.current.pillarHeight },
        uNoiseIntensity: { value: propsRef.current.noiseIntensity },
        uPillarRotation: { value: propsRef.current.pillarRotation },
        uViewScale: { value: propsRef.current.viewScale },
        uDiagonalTilt: { value: propsRef.current.diagonalTilt },
      },
      transparent: true,
      depthWrite: false,
      depthTest: false,
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const applyResolution = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w < 1 || h < 1) return;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(w, h);
      material.uniforms.uResolution.value.set(w, h);
    };
    applyResolution();

    topColorTmp.set(propsRef.current.topColor);
    bottomColorTmp.set(propsRef.current.bottomColor);
    material.uniforms.uTopColor.value.set(topColorTmp.r, topColorTmp.g, topColorTmp.b);
    material.uniforms.uBottomColor.value.set(bottomColorTmp.r, bottomColorTmp.g, bottomColorTmp.b);

    const mouseRef = new THREE.Vector2(0, 0);
    const interactiveAtMount = propsRef.current.interactive;
    let mouseMoveTimeout = null;
    const handleMouseMove = (event) => {
      if (!propsRef.current.interactive) return;
      if (mouseMoveTimeout) return;
      mouseMoveTimeout = window.setTimeout(() => {
        mouseMoveTimeout = null;
      }, 16);
      const rect = container.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      mouseRef.set(x, y);
    };

    if (interactiveAtMount) {
      container.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    let time = 0;
    let rafId = null;
    let lastTime = performance.now();

    const animate = (currentTime) => {
      rafId = requestAnimationFrame(animate);
      const p = propsRef.current;
      const deltaSec = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      time += deltaSec * p.rotationSpeed;
      material.uniforms.uTime.value = time;
      material.uniforms.uMouse.value.copy(mouseRef);
      topColorTmp.set(p.topColor);
      bottomColorTmp.set(p.bottomColor);
      material.uniforms.uTopColor.value.set(topColorTmp.r, topColorTmp.g, topColorTmp.b);
      material.uniforms.uBottomColor.value.set(bottomColorTmp.r, bottomColorTmp.g, bottomColorTmp.b);
      material.uniforms.uIntensity.value = p.intensity;
      material.uniforms.uInteractive.value = p.interactive;
      material.uniforms.uGlowAmount.value = p.glowAmount;
      material.uniforms.uPillarWidth.value = p.pillarWidth;
      material.uniforms.uPillarHeight.value = p.pillarHeight;
      material.uniforms.uNoiseIntensity.value = p.noiseIntensity;
      material.uniforms.uPillarRotation.value = p.pillarRotation;
      material.uniforms.uViewScale.value = p.viewScale;
      material.uniforms.uDiagonalTilt.value = p.diagonalTilt;

      renderer.render(scene, camera);
    };
    rafId = requestAnimationFrame(animate);

    let resizeTimeout = null;
    const handleResize = () => {
      if (resizeTimeout) clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(() => {
        applyResolution();
      }, 150);
    };
    window.addEventListener('resize', handleResize, { passive: true });
    const ro = new ResizeObserver(() => handleResize());
    ro.observe(container);

    return () => {
      if (resizeTimeout) clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);
      ro.disconnect();
      if (interactiveAtMount) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
      if (rafId) cancelAnimationFrame(rafId);
      renderer.dispose();
      renderer.forceContextLoss();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      material.dispose();
      geometry.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`light-pillar-container ${className}`.trim()}
      style={{ mixBlendMode }}
    />
  );
}
