import numpy as np
from PIL import Image
from io import BytesIO
from src.utils import load_model as load_local_model
from src.preprocess import preprocess_segmentation,preprocess_classification

def overlay_mask_on_image(image, predicted_mask, alpha=0.5):
    """
    Overlay the predicted mask on the input image.

    Args:
        image (np.ndarray): The original image.
        predicted_mask (np.ndarray): The predicted mask.
        alpha (float): The transparency level for the overlay.

    Returns:
        BytesIO: The overlayed image as a JPEG byte stream.
    """
    # Ensure the mask is binary
    binary_mask = np.squeeze(predicted_mask) > 0.5  # Thresholding if needed
    
    # Create a red overlay with the same shape as the original image
    red_overlay = np.zeros_like(image)  # Create an empty array for the red overlay
    red_overlay[binary_mask] = [255, 0, 0]  # Apply red color to the areas where the mask is True
    
    # Blend the original image and the red overlay
    overlay_image = np.where(binary_mask[..., None], red_overlay, image)  # Use the mask to overlay red on the original image
    
    # Convert the overlayed image to a PIL Image
    overlay_image_pil = Image.fromarray(overlay_image.astype(np.uint8))

    # Save the overlayed image to a BytesIO object
    img_byte_arr = BytesIO()
    overlay_image_pil.save(img_byte_arr, format='JPEG')
    img_byte_arr.seek(0)  # Move to the beginning of the BytesIO object

    return img_byte_arr

def inference_segmentation_with_overlay(image, model_path):
    """
    Perform inference for segmentation model and overlay the predicted mask on the original image.

    Args:
        image (np.ndarray): The input image to be segmented.
        model_path (str): The local path to the trained segmentation model.

    Returns:
        BytesIO: The final image with the overlayed predicted mask.
    """
    # Load the segmentation model
    model = load_local_model(model_path, custom_loss=True)

    # Preprocess the image for segmentation
    preprocessed_image = preprocess_segmentation(image)

    # Make predictions
    prediction = model.predict(preprocessed_image)

    # Post-process the predictions (optional, e.g., thresholding)
    predicted_mask = (prediction[0] > 0.5).astype(np.uint8)  # Apply a threshold to convert to binary mask

    print(f'Segmentation inference completed. Predicted mask shape: {predicted_mask.shape}')

    # Overlay the mask on the original image
    overlayed_image = overlay_mask_on_image(image, predicted_mask)

    # Convert the overlayed image to JPEG format
    pil_image = Image.fromarray((overlayed_image * 255).astype(np.uint8))  # Scale back to [0, 255]
    
    # Save the image to a BytesIO object
    img_byte_arr = BytesIO()
    pil_image.save(img_byte_arr, format='JPEG')
    img_byte_arr.seek(0)  # Move to the beginning of the BytesIO buffer

    return img_byte_arr

def inference_classification(image, model_paths):
    """
    Perform inference for classification models.

    Args:
        image (np.ndarray): The input image to be classified.
        model_paths (list): List of local paths to the trained classification models.

    Returns:
        np.ndarray: Combined predictions from all classification models.
    """
    # Load models
    models = [load_local_model(model_path) for model_path in model_paths]

    # Preprocess the image for classification
    preprocessed_image = preprocess_classification(image)

    # Store predictions
    predictions = []
    
    for model in models:
        prediction = model.predict(preprocessed_image)
        predictions.append(prediction)

    # Combine predictions from all models
    combined_preds = np.column_stack(predictions)  # Shape: (1, n_models)

    print(f'Classification inference completed. Combined predictions shape: {combined_preds.shape}')
    return combined_preds

def meta_pred(combined_preds, model_path):
    # Load the meta-model
    meta_model = load_local_model(model_path)
    
    # Get predictions from the meta-model
    final_pred_probs = meta_model.predict(combined_preds)
    
    # Get the final class predictions
    final_class_preds = np.argmax(final_pred_probs, axis=1)  # Assuming the last dimension contains class probabilities
    
    return final_class_preds