
import tensorflow as tf
from tensorflow.keras.models import load_model  # Import the function directly
import os
from keras import backend as K
from keras.utils import register_keras_serializable

@register_keras_serializable(package='Custom', name='dice_loss')
def dice_loss(y_true, y_pred, smooth=1e-6, weight_bg=0.2, weight_fg=0.8):
        y_true_f = tf.keras.backend.flatten(y_true)
        y_pred_f = tf.keras.backend.flatten(y_pred)

        # Compute the intersection
        intersection = tf.keras.backend.sum(y_true_f * y_pred_f)

        # Compute the Dice coefficient
        dice = (2. * intersection + smooth) / (tf.keras.backend.sum(y_true_f) + 
                                               tf.keras.backend.sum(y_pred_f) + smooth)

        return 1 - dice

def load_local_model(model_path,custom_loss=False):
    """
    Load a model from the local directory and return the model object.

    Args:
        model_file_name (str): The name of the model file to load (e.g., 'ResNet50V2.keras').
        local_model_dir (str): Local directory where the model is stored.

    Returns:
        model: The loaded model object.
    
    Raises:
        FileNotFoundError: If the model file does not exist at the specified path.
    """
    # Create the full local path for the model
    local_model_path = model_path
    print(f'Loading model from: {local_model_path}')  # Debug print
    
    
    
    if(custom_loss==True):
        print(f' {local_model_path}  with custom loss loaded successfully')
        # For segmentation model, pass the custom_objects parameter


        return  load_model(local_model_path, custom_objects={'dice_loss': dice_loss})
        
    else:
        # Check if the model file exists
        if os.path.exists(local_model_path):
            print(f' {local_model_path} loaded successfully')
            return load_model(local_model_path)  # Load and return the model object
        else:
            raise FileNotFoundError(f'{local_model_path} not found.')
