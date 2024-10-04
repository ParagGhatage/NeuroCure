# Models Directory

This folder contains Python scripts for loading the pre-trained models used in the **NeuroCure** brain tumor detection and classification project. Each script is responsible for loading a specific model, which can then be used for inference or further analysis.

### Model Files

1. **`load_resnet50.py`**:
   - Loads the **ResNet50** classification model.
   - This model is trained to classify MRI images into four categories: Meningioma Tumor, Glioma Tumor, Pituitary Tumor, and No Tumor (Normal).

2. **`load_custom_model.py`**:
   - Loads the custom classification model.
   - This model was developed specifically for this project to enhance classification performance.

3. **`load_meta_model.py`**:
   - Loads the meta-model, which combines the predictions from both the ResNet50 and custom models.
   - This ensemble method improves overall prediction accuracy by leveraging the strengths of multiple models.

4. **`load_segmentation.py`**:
   - Loads the segmentation model, designed to detect and segment tumor regions in MRI images.
   - This model outputs binary masks where tumor regions are highlighted.

### Usage

These model loading scripts are used throughout the project, primarily in the **inference** and **ensemble** stages. You can call each of these scripts to load the corresponding pre-trained model and use them for inference or evaluation.

For example, to load and use the ResNet50 model for classification:

```python
from models.load_resnet50 import load_resnet50

model = load_resnet50()

# Now you can use the model for inference
