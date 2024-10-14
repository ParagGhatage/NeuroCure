from flask import Flask, request, jsonify, send_file
from io import BytesIO
import numpy as np
from PIL import Image
import base64


# Import necessary functions from your modules
from src.preprocess import preprocess_classification, preprocess_segmentation
from src.inference import inference_segmentation_with_overlay, meta_pred
from src.utils import load_local_model
from src.config import *
import os
from models.load_and_save_models import load_and_save_model
from flask_cors import CORS
import threading
import time

app = Flask(__name__)

# Enable CORS for all routes
CORS(app)




# Define model paths relative to the root directory
classification_model_1_path = RESNET50_MODEL_PATH
classification_model_2_path = CUSTOM_MODEL_PATH
meta_model_path = META_MODEL_PATH
segmentation_model_path = SEGMENTATION_MODEL_PATH


# Global variables for models
classification_model_1 = None
classification_model_2 = None
meta_model = None
segmentation_model = None

def from_google():
    """
    Load and save models at the startup of the application.
    """
    model_paths = [
        'gs://thunder_wolf_1245/DL_Models/ResNet50V2.keras',  # GCS path for ResNet50 model
        'gs://thunder_wolf_1245/DL_Models/new_custom_model.keras',   # GCS path for custom model
        'gs://thunder_wolf_1245/DL_Models/meta_model.keras',     # GCS path for meta-model
        'gs://thunder_wolf_1245/DL_Models/seg_model2.keras'  # GCS path for segmentation model
    ]
    
    local_model_directory = 'models/models/'  # Change this to your local directory

    # Ensure the local model directory exists
    os.makedirs(local_model_directory, exist_ok=True)

    # Load and save all models
    for model_path in model_paths:
        model_name = os.path.basename(model_path)  # Get the model filename
        local_model_path = os.path.join(local_model_directory, model_name)

        # Check if the model already exists locally
        if os.path.exists(local_model_path):
            print(f'Model {model_name} already exists. Skipping loading and saving.')
            continue  # Skip loading if the model already exists

        # If the model does not exist, load it from GCS and save it locally
        load_and_save_model(model_path)  # You might need to implement this function if it's not already done
        print(f'Model {model_name} loaded and saved successfully.')



def load_models():
    global classification_model_1, classification_model_2, meta_model, segmentation_model
    classification_model_1 = load_local_model(classification_model_1_path)
    classification_model_2 = load_local_model(classification_model_2_path)
    meta_model = load_local_model(meta_model_path)
    segmentation_model = load_local_model(segmentation_model_path)

# @app.before_first_request
# def perform():
    
#     load_and_save_models()
#     load_models()

# def only_once():
#     inference_segmentation_with_overlay(image_np, segmentation_model_path)

def keep_alive():
    while True:
        
        print("Keep-alive task running...")  # Placeholder for your actual task
        time.sleep(60)  # Wait for 60 seconds before repeating

appHasRunBefore:bool = True
@app.before_request
def firstRun():
    global appHasRunBefore
    if appHasRunBefore:
        from_google()
        load_models()
        
        # Set the bool to True so this method isn't called again
        appHasRunBefore = False
    


@app.route('/predict', methods=['POST'])
def predict_image():
    """
    Single endpoint to handle both classification and segmentation inference.
    Accepts an image, preprocesses it for both tasks, and returns class prediction and overlayed image if needed.
    """
    # Read the image from the request
    file = request.files['image']
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
    final_class = meta_pred(combined_preds, meta_model)

    response = {"final_class": int(final_class[0])}

    # Check if the final class prediction is other than 0
    if final_class[0] != 0:
        # Perform segmentation and get the overlayed image
        # overlayed_image = inference_segmentation_with_overlay(image_np, segmentation_model_path)
        overlayed_image=inference_segmentation_with_overlay(image_np, segmentation_model)
        # Convert the overlayed image to a BytesIO object
        img_io = BytesIO()
        overlayed_image.save(img_io, format='JPEG')  # Save directly since overlayed_image is a PIL Image
        img_io.seek(0)  # Move to the beginning of the BytesIO buffer

        # Encode the image to base64
        img_io_base64 = base64.b64encode(img_io.getvalue()).decode('utf-8')

        # Add the Base64 encoded image to the response
        response["segment_image"] = img_io_base64  # Add the base64 string to the response
    
    return jsonify(response)



if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)