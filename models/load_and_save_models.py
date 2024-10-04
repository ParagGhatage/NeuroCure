import os
from google.cloud import storage

def download_model_from_gcs(bucket_name, model_file_name, local_model_path):
    """Download a model from GCS and save it locally in the specified directory."""
    try:
        client = storage.Client()
        bucket = client.get_bucket(bucket_name)
        blob = bucket.blob(model_file_name)
        blob.download_to_filename(local_model_path)
        print(f'Model {model_file_name} downloaded from GCS and saved to {local_model_path}')
    except Exception as e:
        print(f"Error downloading model {model_file_name}: {e}")

def load_and_save_model(gcs_model_path, local_model_dir='models/models'):
    """
    Download and save the model from GCS.

    Args:
        gcs_model_path (str): GCS path to the model (e.g., gs://your-bucket-name/models/model_name.h5).
        local_model_dir (str): Local directory where the model will be saved.
    """
    try:
        # Extract model filename from GCS path
        model_file_name = os.path.basename(gcs_model_path)
        local_model_path = os.path.join(local_model_dir, model_file_name)

        # Ensure the local directory exists
        os.makedirs(local_model_dir, exist_ok=True)

        # Download the model from GCS
        bucket_name = gcs_model_path.split("/")[2]
        download_model_from_gcs(bucket_name, model_file_name, local_model_path)

        print(f"Model {model_file_name} successfully loaded and saved.")
    except Exception as e:
        print(f"Failed to load model {model_file_name}: {e}")

if __name__ == "__main__":
    # Define GCS paths for all your models
    model_paths = [
        'gs://thunder_wolf_1245/DL_Models/ResNet50V2.keras',  # Path for ResNet50
        'gs://thunder_wolf_1245/DL_Models/new_custom_model.keras',   # Path for custom model
        'gs://thunder_wolf_1245/DL_Models/meta_model.keras',     # Path for meta-model
        'gs://thunder_wolf_1245/DL_Models/seg_model2.keras'  # Path for segmentation model
    ]
    
    # Load and save all models
    for gcs_path in model_paths:
        load_and_save_model(gcs_path)
