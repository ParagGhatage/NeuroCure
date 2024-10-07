<h1 align="center"> NeuroCure </h1>

![NeuroCure Logo](https://github.com/ParagGhatage/NeuroCure/blob/main/frontend/public/pexels-googledeepmind-17483868.jpg) 

## Overview

**NeuroCure1** is an innovative brain tumor detection and classification project that utilizes advanced deep learning techniques for medical image analysis. By leveraging TensorFlow and custom models, NeuroCure aims to provide accurate and efficient identification of brain tumors from MRI scans, assisting healthcare professionals in diagnosis and treatment.

### Key Features

- **Multi-Model Ensemble**: Combines multiple models for improved accuracy in detection and classification.
- **Segmentation**: Efficiently segments tumors from MRI images for better analysis and visualization.
- **User-Friendly Interface**: Built with Next.js and Tailwind CSS for a seamless user experience in uploading images and receiving predictions.
- **Deployment Ready**: Easily deployable on Google Cloud, ensuring scalability and accessibility.

## Project Structure

This project is organized into the following structure:


```

├── data/
| │── README.md
│ ├── sample/
│    ├── sample1.jpg 
|    ├── sample2.jpg  
|    ├── sample3.jpg   
|    └── sample4.jpg 
| 
├── models/
| ├── Readme.md   
│ └── load_and_save_models.py #Loads models from google cloud and saves them to models/models dir
├── src/
│ ├── config.py
│ ├── preprocess.py
│ ├── inference.py
│ └── utils.py
├── notebooks/
│ ├── classification_resnet50.ipynb      # ResNet50 classification model training
│ ├── classification_custom_model.ipynb  # Custom classification model training
│ ├── meta_model_training.ipynb          # Meta-model (ensemble) training
│ ├── segmentation_model.ipynb           # Segmentation model training
│ ├── model_architecture/                # Folder to store model architecture notebook
│    └── model_architecture_overview.ipynb  # Model architecture overview
| 
├── frontend/
| ├── app/
| │   ├── (site)/
| │   │   ├── page.jsx                 # Home page of the app
| │   │   ├── about/page.jsx           # About page
| │   │   ├── contact/page.jsx         # Contact page
| |   |   ├── layout.js                #layout 
| │   |   └── globals.css                  # Global CSS file
| │   └── api/
| │       └── send_email/route.ts       # API route for handling email requests
| │
| ├── components/
| │   ├── Navbar.jsx                   # Navigation bar component
| │   ├── Footer.jsx                   # Footer component
| │   ├── ui/                          # UI components
| │   ├── APIRequest.jsx               # UI components
| │   ├── ImageUploader.jsx            # UI components
| │   ├── Loader.jsx                   # UI components
| │   ├── Email_template.jsx           # UI components
| │   └── InferenceForm.jsx            # Form to upload images for inference
| │
| │
| ├── public/
| │   └── logo.png                     # Static assets (e.g., images, logos)
| │
| ├── tailwind.config.js               # Tailwind CSS configuration file
| ├── postcss.config.js                # PostCSS configuration file
| ├── next.config.js                   # Next.js configuration file
| ├── package.json                     # Node.js dependencies
| └── README.md                        # Project documentation
├── cloud/
│ └── gcp_deploy.sh
├── Dockerfile
├── app.py
├── requirements.txt
├── package.json
└── README.md

```


## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- **Python**: Version 3.x installed on your machine.
- **Node.js**: Make sure you have Node.js installed.
- **TensorFlow**: Install TensorFlow to run the machine learning models.
- **Next.js**: Used for building the frontend of the application.
- **Docker**: Optional, but recommended for containerization.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ParagGhatage/NeuroCure1.git
   cd NeuroCure1
   pip install -r requirements.txt
   cd frontend
   npm install
   python app.py
   cd frontend
   npm run dev
   

