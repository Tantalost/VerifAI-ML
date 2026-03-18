import torch
import numpy as np
from PIL import Image

class YOLODetector:
    def __init__(self, model_path: str):
        self.device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
        print(f"Loading YOLO model on {self.device}...")
        
        try:
            # For YOLOv6, you typically load the model via standard torch.load 
            # or the specific YOLOv6 repository's architecture definition.
            # We are using torch.hub.load as a common standard for PyTorch YOLO implementations.
            # You will replace 'yolov5' with your local YOLOv6 implementation path.
            self.model = torch.hub.load('ultralytics/yolov5', 'custom', path=model_path, force_reload=False)
            self.model.eval() # Set to evaluation mode
            print("Model loaded successfully.")
        except Exception as e:
            print(f"Failed to load model: {e}")
            self.model = None

    def predict(self, image: Image.Image, confidence_threshold=0.45):
        if self.model is None:
            raise RuntimeError("Model is not initialized.")

        # Run inference
        results = self.model(image)
        
        # Extract predictions: [xmin, ymin, xmax, ymax, confidence, class]
        predictions = results.pandas().xyxy[0]
        
        # Filter out low-confidence detections
        filtered_preds = predictions[predictions['confidence'] >= confidence_threshold]
        
        detections = []
        for index, row in filtered_preds.iterrows():
            detections.append({
                "class_name": row['name'],
                "confidence": float(row['confidence']),
                "box": {
                    "xmin": float(row['xmin']),
                    "ymin": float(row['ymin']),
                    "xmax": float(row['xmax']),
                    "ymax": float(row['ymax'])
                }
            })
            
        return detections