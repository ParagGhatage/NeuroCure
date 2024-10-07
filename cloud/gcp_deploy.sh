#!/bin/bash

# Variables
PROJECT_ID="neurocure"       # Replace with your GCP project ID
IMAGE_NAME="neuro-cure-backend"             # Replace with your Docker image name
REGION="us-central1"                     # Replace with your preferred GCP region, e.g., us-central1
SERVICE_NAME="neuro-cure-backend-service"
CREDENTIALS_PATH="/app/secrets/neurocure-f243dc32c9cb.json" # Path to your service account key

# Authenticate with Google Cloud
PORT=5000                                 # Port your app runs on

gcloud auth activate-service-account --key-file=$CREDENTIALS_PATH         # Replace with your Cloud Run service name


# Set the project
gcloud config set project $PROJECT_ID

# Build the Docker image
echo "Building the Docker image..."
docker build -t gcr.io/$PROJECT_ID/$IMAGE_NAME .

# Push the Docker image to Google Container Registry
echo "Pushing the Docker image to Google Container Registry..."
docker push gcr.io/$PROJECT_ID/$IMAGE_NAME

# Deploy the image to Cloud Run
echo "Deploying the image to Cloud Run..."
gcloud run deploy $SERVICE_NAME \
  --image gcr.io/$PROJECT_ID/$IMAGE_NAME \
  --region $REGION \
  --platform managed \
  --allow-unauthenticated \
  --port $PORT \
  --memory 1.5Gi \ # Memory set to 1.5 GB
  --cpu 0.7          # CPU set to 0.7 vCPU

echo "Deployment completed!"
