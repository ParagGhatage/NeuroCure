"use client"
import React, { useState } from 'react';
import APIRequest from './APIRequest';

const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
  <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200  w-full relative">
    {/* Background Image */}
    <div className="absolute inset-0">
      
    </div>

    <div className="relative z-10">
    
      <label  className="block mb-4 cursor-pointer">
      
        <span className="text-gray-800 text-lg font-semibold mb-2">
        <div className="text-black text-center">
          <div>
          Try it out!
          </div>
          <div className="flex justify-center  p-3">
          
      <div className="border border-gray-300 rounded-full overflow-hidden shadow-md w-12 h-12 flex items-center justify-center bg-gray-50">
      <img
        src="/pexels-googledeepmind-17483868.jpg" // Update with your image path
        alt="Background"
        className="object-cover w-full h-full"
      />
      </div>
      <div className="border border-gray-300 rounded-full m-5 overflow-hidden shadow-md w-12 h-12 flex items-center justify-center bg-gray-50">
      <img
        src="/pexels-googledeepmind-17483868.jpg" // Update with your image path
        alt="Background"
        className="object-cover w-full h-full p-5"
      />
      </div>
      <div className="border border-gray-300 rounded-full overflow-hidden shadow-md w-12 h-12 flex items-center justify-center bg-gray-50">
      <img
        src="/pexels-googledeepmind-17483868.jpg" // Update with your image path
        alt="Background"
        className="object-cover w-full h-full"
      />
      </div>
      <div className="border border-gray-300 rounded-full overflow-hidden shadow-md w-12 h-12 flex items-center justify-center bg-gray-50">
      <img
        src="/pexels-googledeepmind-17483868.jpg" // Update with your image path
        alt="Background"
        className="object-cover w-full h-full"
      />
      </div>
      
          </div>
        </div>
        
        
        
        
        {/* Hidden File Input */}
        
        
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
          id="image-upload" // This ID links the label to the input
        />
        <div className="bg-white shadow-lg rounded-lg p-4 border border-gray-200">
          <APIRequest image={selectedImage} />
          
        
        
        </div>
        
        
        </span>
      </label>

      
    </div>
  </div>
</div>




  );
};

export default ImageUploader;
