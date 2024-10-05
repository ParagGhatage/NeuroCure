"use client"
import React from 'react';
import ImageUploader from './ImageUploader';

const InferenceForm = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Upload MRI Image for Inference</h2>
      <ImageUploader />
    </div>
  );
};

export default InferenceForm;
