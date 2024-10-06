#!/bin/bash

# Exit on any error
set -e

# Define variables
PROJECT_ID="neurocure"  # Replace with your GCP project ID
IMAGE_NAME="neurocure"              # Replace with your desired image name
REGION="us-central1"                # Replace with your desired region
SERVICE_NAME="neurocure-service"    # Replace with your desired Cloud Run service name
DOCKERFILE_PATH="./Dockerfile"  # Path to your Dockerfile
CONTEXT_PATH="./"                    # Path to the build context

# Configure gcloud to use your project
gcloud config set project $PROJECT_ID

# Build the Docker image
echo "Building Docker image..."
docker build -t gcr.io/$PROJECT_ID/$IMAGE_NAME -f $DOCKERFILE_PATH $CONTEXT_PATH

# Push the Docker image to Google Container Registry
echo "Pushing Docker image to Google Container Registry..."
docker push gcr.io/$PROJECT_ID/$IMAGE_NAME

# Deploy the Docker image to Google Cloud Run
echo "Deploying to Google Cloud Run..."
gcloud run deploy $SERVICE_NAME \
  --image gcr.io/$PROJECT_ID/$IMAGE_NAME \
  --platform managed \
  --region $REGION \
  --allow-unauthenticated \
  --set-env-vars "YOUR_ENV_VAR_1=value1,YOUR_ENV_VAR_2=value2"  # Add your environment variables

# Output the service URL
echo "Deployment complete! Access your service at:"
gcloud run services describe $SERVICE_NAME --platform managed --region $REGION --format "value(status.url)"
