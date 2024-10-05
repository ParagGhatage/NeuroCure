from flask import Flask, request, jsonify, send_file
from io import BytesIO
import numpy as np
from PIL import Image

# Import necessary functions from your modules
from src.preprocess import preprocess_classification, preprocess_segmentation
from src.inference import inference_segmentation_with_overlay, meta_pred
from src.utils import load_local_model
from src.config import *
import os
from models.load_and_save_models import load_and_save_model

app = Flask(__name__)

# Define model paths relative to the root directory
classification_model_1_path = RESNET50_MODEL_PATH
classification_model_2_path = CUSTOM_MODEL_PATH
meta_model_path = META_MODEL_PATH
segmentation_model_path = SEGMENTATION_MODEL_PATH

# Global variables for models
classification_model_1 = None
classification_model_2 = None


def load_and_save_models():
    """
    Load and save models at the startup of the application.
    """
    model_paths = [
        'gs://thunder_wolf_1245/DL_Models/ResNet50V2.keras',  # GCS path for ResNet50 model
        'gs://thunder_wolf_1245/DL_Models/new_custom_model.keras',   # GCS path for custom model
        'gs://thunder_wolf_1245/DL_Models/meta_model.keras',     # GCS path for meta-model
        'gs://thunder_wolf_1245/DL_Models/seg_model2.keras'  # GCS path for segmentation model
    ]
    
    # Load and save all models
    for model_path in model_paths:
        load_and_save_model(model_path)


load_and_save_models()
    # Load models globally
classification_model_1 = load_local_model(classification_model_1_path)
classification_model_2 = load_local_model(classification_model_2_path)



@app.route('/predict', methods=['POST'])
def predict_image():
    """
    Single endpoint to handle both classification and segmentation inference.
    Accepts an image, preprocesses it for both tasks, and returns class prediction and overlayed image if needed.
    """
    # Read the image from the request
    file = request.files['file']
    image_bytes = file.read()
    image = Image.open(BytesIO(image_bytes)).convert("RGB")
    image_np = np.array(image)

    # Preprocess the image for classification
    preprocessed_image = preprocess_classification(image_np)

    # Predict using both classification models
    resnet_preds = classification_model_1.predict(preprocessed_image)
    custom_preds = classification_model_2.predict(preprocessed_image)

    # Combine predictions and make a final prediction with the meta-model
    combined_preds = np.column_stack((resnet_preds, custom_preds))
    final_class = meta_pred(combined_preds, meta_model_path)

    response = {"final_class": int(final_class[0])}

    # Check if the final class prediction is other than 0
    if final_class[0] != 0:
        # Preprocess the image for segmentation
        preprocessed_segmentation_image = preprocess_segmentation(image_np)

        # Perform segmentation and get the mask
        overlayed_image = inference_segmentation_with_overlay(preprocessed_segmentation_image, segmentation_model_path)

        # Create a BytesIO stream to send the overlayed image
        img_io = BytesIO()
        overlayed_image.save(img_io, 'JPEG')
        img_io.seek(0)

        # Add the overlayed image to the response
        response["segment_image"] = send_file(img_io, mimetype='image/jpeg')

    return jsonify(response)

# Main entry point
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8002)
