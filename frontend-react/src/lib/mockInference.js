function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function randomRange(min, max) {
  return Math.random() * (max - min) + min;
}

// Placeholder server-like inference function while custom model is training.
export async function runMockInference({ fileName }) {
  await wait(2000);

  const confidence = Number(randomRange(65, 99).toFixed(2));
  const isAiGenerated = Math.random() >= 0.5;

  return {
    detectionResult: isAiGenerated ? 'AI-generated' : 'Likely real',
    confidenceScore: confidence,
    fileName,
  };
}

