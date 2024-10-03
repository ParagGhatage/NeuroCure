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
│ ├── load_resnet50.py
│ ├── load_custom_model.py  
| ├── load_meta_model.py
│ └── load_segmentation.py
├── src/
│ ├── config.py
│ ├── preprocess.py
│ ├── inference.py
│ ├── ensemble.py
│ └── utils.py
├── notebooks/
│ └── [Optional Jupyter notebooks for exploration and analysis] 
├── frontend/
│ ├── pages/
│ ├── components/
│ ├── styles/
│ └── public/
├── cloud/
│ ├── Dockerfile
│ └── gcp_deploy.sh
├── app.py
├── requirements.txt
├── package.json
└── README.md

```