from fastapi import FastAPI, UploadFile, File
from fastapi.responses import StreamingResponse, JSONResponse
from io import BytesIO
import numpy as np
from PIL import Image


# Import necessary functions from your modules
from src.preprocess import preprocess_classification, preprocess_segmentation
from src.inference import inference_segmentation_with_overlay, meta_pred
from src.utils import load_local_model
from src.config import *
import os

app = FastAPI()



# Get the current file's directory (where your app.py is located)

# Define model paths relative to the root directory
classification_model_1_path = RESNET50_MODEL_PATH
classification_model_2_path = CUSTOM_MODEL_PATH
meta_model_path = META_MODEL_PATH
segmentation_model_path = SEGMENTATION_MODEL_PATH




# Load models globally
classification_model_1 = load_local_model(classification_model_1_path)
classification_model_2 = load_local_model(classification_model_2_path)

@app.post("/predict")
async def predict_image(file: UploadFile = File(...)):
    """
    Single endpoint to handle both classification and segmentation inference.
    Accepts an image, preprocesses it for both tasks, and returns class prediction and overlayed image if needed.
    """
    # Read the image from the request
    image_bytes = await file.read()
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
        overlayed_image= inference_segmentation_with_overlay(preprocessed_segmentation_image, segmentation_model_path)

        

        

        # Add the overlayed image to the response
        response["segment_image"] = StreamingResponse(overlayed_image, media_type="image/jpeg")

    return JSONResponse(content=response)

# Main entry point
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)
