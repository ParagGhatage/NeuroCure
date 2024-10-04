# Notebooks Directory

This folder contains the Jupyter notebooks used for training and evaluating the models in the **NeuroCure** project. The notebooks are organized based on the models and the training objectives.

### Notebooks

1. **`classification_resnet50.ipynb`**: 
   - Trains the ResNet50-based classification model for brain tumor detection.
   - Covers preprocessing, model creation, training, and validation.

2. **`classification_custom_model.ipynb`**: 
   - Trains the custom classification model.
   - Includes preprocessing, architecture details, and training results.

3. **`meta_model_training.ipynb`**: 
   - Focuses on training the meta-model, which ensembles the outputs of the ResNet50 and custom models.
   - Combines predictions to enhance classification accuracy.

4. **`segmentation_model.ipynb`**: 
   - Implements the segmentation model used to identify tumor boundaries in MRI images.
   - Focuses on image segmentation with U-Net-like architectures.

### Model Architecture Overview

In the `model_architecture/` folder, you'll find:
- **`model_architecture_overview.ipynb`**: 
  - This notebook loads all four models (ResNet50, custom classification model, meta-model, and segmentation model).
  - It uses the `.summary()` method to show each model's architecture for reference.
