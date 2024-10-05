import numpy as np
from skimage.io import imread
from skimage.transform import resize


def preprocess_segmentation(image):
    """
    Preprocess a single image for segmentation, including normalization.

    Args:
        image (np.ndarray): The input image.

    Returns:
        np.ndarray: Preprocessed image ready for segmentation with shape (1, 256, 256, 3).
    """
    print(f'Original image shape: {image.shape}')  # Debugging line

    # Resize image
    img = resize(image, (256, 256), mode='constant', preserve_range=True)

    # If the image is grayscale, repeat the channel
    if img.ndim == 2:  # Check if the image is grayscale
        img = np.stack((img,) * 3, axis=-1)  # Convert grayscale to RGB

    # Normalize pixel values to [0, 1]
    img = img / 255.0

    # Add a batch dimension
    img = np.expand_dims(img, axis=0)  # Now shape is (1, 256, 256, 3)

    print(f'Segmentation image preprocessed. Shape: {img.shape}')
    return img


    
def preprocess_classification(image):
    """
    Preprocess a single image for classification.

    Args:
        image (np.ndarray): The input image.

    Returns:
        np.ndarray: Preprocessed image ready for classification with shape (1, 224, 224, 3).
    """
    # Resize image
    img = resize(image, (224, 224), mode='constant', preserve_range=True)

    # If the image is grayscale, repeat the channel
    if img.ndim == 2:  # Check if the image is grayscale
        img = np.stack((img,) * 3, axis=-1)  # Convert grayscale to RGB
    
    # Normalize pixel values to [0, 1]
    img = img / 255.0

    # Add a batch dimension
    img = np.expand_dims(img, axis=0)  # Now shape is (1, 224, 224, 3)

    print(f'Classification image preprocessed. Shape: {img.shape}')
    return img

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

# Example usage for an API endpoint
if __name__ == "__main__":
    # Sample image array for testing (Replace this with an actual image read from API)
    sample_image_seg = np.random.rand(300, 300, 3)  # Random image for segmentation
    sample_image_class = np.random.rand(300, 300, 3)  # Random image for classification
    
    # Preprocess images for segmentation
    preprocessed_seg_image = preprocess_segmentation(sample_image_seg)
    
    # Preprocess images for classification
    preprocessed_class_image = preprocess_classification(sample_image_class)
    
     # Example predictions (for demonstration)
    resnet_preds = np.random.rand(10, 8)  # Simulate predictions from ResNet
    custom_preds = np.random.rand(10, 8)  # Simulate predictions from custom model
    
    # Process and combine predictions
    combined_predictions = process_predictions(resnet_preds, custom_preds)
    print(f'Final shape of combined predictions: {combined_predictions.shape}')
