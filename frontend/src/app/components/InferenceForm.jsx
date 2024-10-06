"use client"
import React from 'react';
import ImageUploader from './ImageUploader';

const InferenceForm = () => {
  return (
    <div className=" mx-auto p-6 bg-white shadow-md rounded-md">
  <h2 className="text-md sm:text-4xl font-semibold text-gray-800 mb-4 text-center">
    Upload MRI Image for Inference
  </h2>
  <ImageUploader />
</div>

  );
};

export default InferenceForm;
