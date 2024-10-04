import os
import numpy as np
from skimage.io import imread
from skimage.transform import resize

def preprocess_segmentation(image_path):
    """
    Preprocess images for segmentation, including normalization.

    Args:
        image_path (str): The path to the directory containing images.

    Returns:
        np.ndarray: Preprocessed images ready for segmentation with shape (None, 256, 256, 3).
    """
    images = []

    # Load and preprocess images for segmentation
    for img_file in os.listdir(image_path):
        img = imread(os.path.join(image_path, img_file))
        img = resize(img, (256, 256), mode='constant', preserve_range=True)

        # If the image is grayscale, repeat the channel
        if img.ndim == 2:  # Check if the image is grayscale
            img = np.stack((img,) * 3, axis=-1)  # Convert grayscale to RGB
        
        images.append(img)

    # Convert list to numpy array
    images = np.array(images)

    # Normalize pixel values to [0, 1]
    images = images / 255.0

    # Add a batch dimension if there's only one image
    if images.ndim == 3:  # This means there is only one image
        images = np.expand_dims(images, axis=0)  # Now shape is (1, 256, 256, 3)

    # Ensure the output shape is (batch_size, height, width, channels)
    print(f'Segmentation images preprocessed. Shape: {images.shape}')
    return images

def preprocess_classification(image_path):
    """
    Preprocess images for classification.

    Args:
        image_path (str): The path to the directory containing images.

    Returns:
        np.ndarray: Preprocessed images ready for classification with shape (None, 224, 224, 3).
    """
    images = []

    # Load and preprocess images for classification
    for img_file in os.listdir(image_path):
        img = imread(os.path.join(image_path, img_file))
        img = resize(img, (224, 224), mode='constant', preserve_range=True)

        # If the image is grayscale, repeat the channel
        if img.ndim == 2:  # Check if the image is grayscale
            img = np.stack((img,) * 3, axis=-1)  # Convert grayscale to RGB
        
        images.append(img)

    # Convert list to numpy array
    images = np.array(images)

    # Normalize pixel values to [0, 1]
    images = images / 255.0

    # Add a batch dimension if there's only one image
    if images.ndim == 3:  # This means there is only one image
        images = np.expand_dims(images, axis=0)  # Now shape is (1, 224, 224, 3)

    # Ensure the output shape is (batch_size, height, width, channels)
    print(f'Classification images preprocessed. Shape: {images.shape}')
    return images

def process_predictions(resnet_preds, custom_preds):
    """
    Process predictions from two classification models and combine them.

    Args:
        resnet_preds (np.ndarray): Predictions from the ResNet model with shape (None, 8).
        custom_preds (np.ndarray): Predictions from the custom model with shape (None, 8).

    Returns:
        np.ndarray: Combined predictions stacked side by side with shape (None, 16).
    """
    # Ensure predictions are in the correct shape
    if resnet_preds.shape[1] != 8 or custom_preds.shape[1] != 8:
        raise ValueError("Both prediction arrays must have shape (None, 8)")

    # Stack predictions side by side
    combined_preds = np.column_stack((resnet_preds, custom_preds))
    print(f'Combined predictions shape: {combined_preds.shape}')
    
    return combined_preds

# Example usage:
if __name__ == "__main__":
    # Path to the images
    images_path_seg = 'path/to/segmentation/images'
    images_path_class = 'path/to/classification/images'
    
    # Preprocess images for segmentation
    segmentation_images = preprocess_segmentation(images_path_seg)
    print(f'Final shape of preprocessed segmentation images: {segmentation_images.shape}')
    
    # Preprocess images for classification
    classification_images = preprocess_classification(images_path_class)
    print(f'Final shape of preprocessed classification images: {classification_images.shape}')
    
    # Example predictions (for demonstration)
    resnet_preds = np.random.rand(10, 8)  # Simulate predictions from ResNet
    custom_preds = np.random.rand(10, 8)  # Simulate predictions from custom model
    
    # Process and combine predictions
    combined_predictions = process_predictions(resnet_preds, custom_preds)
    print(f'Final shape of combined predictions: {combined_predictions.shape}')
