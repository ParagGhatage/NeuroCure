import os
import requests  # For downloading from public URLs
from google.cloud import storage  # For downloading from GCS using `gs://` paths

def download_model_from_gcs(bucket_name, model_file_name, local_model_path):
    """Download a model from GCS using gs:// and save it locally."""
    try:
        client = storage.Client()
        bucket = client.get_bucket(bucket_name)
        blob = bucket.blob(model_file_name)
        blob.download_to_filename(local_model_path)
        print(f'Model {model_file_name} downloaded from GCS and saved to {local_model_path}')
    except Exception as e:
        print(f"Error downloading model {model_file_name}: {e}")

def download_model_from_url(url, local_model_path):
    """Download a model from a public URL and save it locally."""
    try:
        response = requests.get(url, stream=True)
        if response.status_code == 200:
            with open(local_model_path, 'wb') as f:
                f.write(response.content)
            print(f'Model downloaded from {url} and saved to {local_model_path}')
        else:
            print(f"Error downloading model from {url}: {response.status_code}")
    except Exception as e:
        print(f"Error downloading model from {url}: {e}")

def load_and_save_model(model_path, local_model_dir='models/models'):
    """
    Download and save the model from GCS or a public URL.
    
    Args:
        model_path (str): GCS path (gs://) or public URL to the model.
        local_model_dir (str): Local directory where the model will be saved.
    """
    try:
        # Extract model filename from the path
        model_file_name = os.path.basename(model_path)
        local_model_path = os.path.join(local_model_dir, model_file_name)

        # Ensure the local directory exists
        os.makedirs(local_model_dir, exist_ok=True)

        # Check if it's a public URL or a GCS URI
        if model_path.startswith("https://"):
            # Public URL download
            download_model_from_url(model_path, local_model_path)
        elif model_path.startswith("gs://"):
            # GCS bucket download
            bucket_name = model_path.split("/")[2]
            blob_name = "/".join(model_path.split("/")[3:])
            download_model_from_gcs(bucket_name, blob_name, local_model_path)
        else:
            print(f"Invalid model path: {model_path}")
            
    except Exception as e:
        print(f"Failed to load model {model_file_name}: {e}")

if __name__ == "__main__":
    # Define paths for all your models (either GCS gs:// paths or public URLs)
    model_paths = [
        'gs://thunder_wolf_1245/DL_Models/ResNet50V2.keras',  # GCS path for ResNet50 model
        'gs://thunder_wolf_1245/DL_Models/new_custom_model.keras',   # GCS path for custom model
        'gs://thunder_wolf_1245/DL_Models/meta_model.keras',     # GCS path for meta-model
        'gs://thunder_wolf_1245/DL_Models/seg_model2.keras'  # GCS path for segmentation model
    ]
    
    # Load and save all models
    for model_path in model_paths:
        load_and_save_model(model_path)
