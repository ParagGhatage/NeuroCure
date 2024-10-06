# NeuroCure1

# Project Structure

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
│ ├── Dockerfile
│ └── gcp_deploy.sh
├── app.py
├── requirements.txt
├── package.json
└── README.md

```