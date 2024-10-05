"use client"
import React, { useState } from 'react';

const APIRequest = ({ image }) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const sendRequest = async () => {
    const formData = new FormData();
    formData.append('image', image); // Ensure the key matches the backend

    setLoading(true);
    try {
      const res = await fetch('http://127.0.0.1:8002/predict', {
        method: 'POST',
        body: formData,
      });

      // Log the full response object
      console.log('Response:', res);

      const data = await res.json(); // Properly parse the response JSON

      // Log the parsed data to see its structure
      console.log('Data:', data);

      if (res.ok) {
        setResponse(data); // Store the whole response
      } else {
        throw new Error(data.error || 'Error occurred'); // Handle errors gracefully
      }
    } catch (error) {
      console.error('Error making request:', error);
      setResponse({ error: error.message });
    }
    setLoading(false);
  };

  return (
    <div className="mt-6 text-center">
  <button
    onClick={sendRequest}
    disabled={loading}
    className={`${
      loading ? 'bg-gray-700  p-6 text-center border-2 border-black ' : 'bg-blue-300 text-white p-6 text-center border-black border-2 m-3 rounded-md'
    } text-black py-2 px-6 bg-blue-300 rounded`}
  >
    {loading ? 'Processing...' : 'send for analysis'}
  </button>

  {/* Display final class if available */}
  {response && response.final_class !== undefined && (
    <p className="mt-4 text-3xl font-semibold text-black">
      Tumor Type: {response.final_class}
    </p>
  )}

  {/* Container for side-by-side boxes */}
  <div className="flex flex-col md:flex-row mt-6 space-y-4 md:space-y-0 p-4 space-x-4">
    {/* Original Image Box */}
    <div className="bg-gray-50 p-4 border border-gray-200 rounded-lg flex flex-col items-center w-full md:w-1/2">
      <h3 className="text-lg font-semibold text-gray-700 mb-2 ">Click image to upload</h3>
      <div>

     
      {image ? (
        <img
          src={URL.createObjectURL(image)}
          alt="Original MRI"
          className="w-full h-auto"
        />
      ) : (
        <div className="text-gray-400">
          <img
        src="/pexels-googledeepmind-17483868.jpg" // Update with your image path
        alt="Background"
        className="object-cover w-50 h-50 rounded-lg opacity-30"
      />
        </div>
      )}
       </div>
    </div>

    {/* Segmented Image Box */}
    {response && response.segment_image ? (

    <div className="bg-gray-50 p-4 border border-gray-200 rounded-lg flex flex-col items-center w-full md:w-1/2">
      <h3 className="text-lg font-semibold text-gray-700 mb-2">Segmented Image</h3>
      {response && response.segment_image ? (
        <img
          src={`data:image/jpeg;base64,${response.segment_image}`}
          alt="Segmented MRI"
          className="w-full h-auto"
        />
      ) : (
        <div className="text-gray-400">No segmentation available</div>
      )}
    </div>
    ):(null
    )}
  </div>

  {/* Display error message if available */}
  {response && response.error && (
    <p className="mt-4 text-red-500 font-semibold">Error: {response.error}</p>
  )}
</div>


  );
};

export default APIRequest;
