"use client";
import React, { useState } from 'react';
import APIRequest from './APIRequest';

const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const isClient = typeof window !== 'undefined';
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
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg sm:p-6 border border-gray-200 w-full relative">
        <div className="sm:absolute inset-0"></div>

        <div className="sm:relative">
          <div className="text-black text-center">
            <div>Try it out!</div>
            <div className="sm:flex md:flex justify-center sm:p-3">
              {/* Render first four images for small screens and all images for larger screens */}
              {isClient &&(window.innerWidth < 640 ? sampleImages.slice(0, 4) : sampleImages).map((image, index) => (
                <div
                  key={index}
                  className="border border-gray-300 rounded-full overflow-hidden shadow-md sm:w-12 sm:h-12 sm:flex items-center justify-center bg-gray-50 cursor-pointer sm:mr-3"
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
          <label className="sm:block sm:mb-4 cursor-pointer">
            <span className="text-gray-800 sm:text-lg font-semibold sm:mb-2">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                id="image-upload" // This ID links the label to the input
              />
              <div className="bg-white shadow-lg rounded-lg sm:p-4 border border-gray-200">
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
