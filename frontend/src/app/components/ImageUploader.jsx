"use client";
import React, { useState } from 'react';
import APIRequest from './APIRequest';

const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);
   

  // Sample images (update paths accordingly)
  const sampleImages = [
    "/gg (26).jpg",
    "/image (11).jpg",
    "/p (28).jpg",
    "/gg (498).jpg",
    "/m (7).jpg",
    "/p (131).jpg",
    "/gg (544).jpg",
    "/p (210).jpg",
    "/gg (37).jpg",
    "/p (199).jpg",
    "/image (46).jpg",
    "/gg (340).jpg",
    "/p (374).jpg",
    "/image(200).jpg",


      // Make sure this image path is correct
  ];

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
      console.log('File selected:', e.target.files[0]); // Debugging line
    }
  };

  const handleImageClick = async (imagePath) => {
    try {
      const response = await fetch(imagePath); // Fetch the image
      const blob = await response.blob(); // Convert response to Blob
      const file = new File([blob], 'sample-image.jpg', { type: blob.type }); // Create File object
      setSelectedImage(file); // Set the selected image
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 w-full relative">
        <div className="absolute inset-0"></div>

        <div className="relative z-10">
          <div className="text-black text-center">
            <div>Try it out!</div>
            <div className="flex justify-center p-3">
              {sampleImages.map((image, index) => (
                <div
                  key={index}
                  className="border border-gray-300 rounded-full overflow-hidden shadow-md w-12 h-12 flex items-center justify-center bg-gray-50 cursor-pointer mr-3"
                  onClick={() => handleImageClick(image)}
                >
                  <img
                    src={image}
                    alt={`Sample ${index}`}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Hidden File Input */}
          <label className="block mb-4 cursor-pointer">
            <span className="text-gray-800 text-lg font-semibold mb-2">
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
