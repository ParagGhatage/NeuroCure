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
    <div>
      <button onClick={sendRequest} disabled={loading} className="bg-blue-500 text-white py-2 px-4 rounded">
        {loading ? 'Processing...' : 'Send for Inference'}
      </button>
      {response && response.final_class !== undefined && <p>Final Class: {response.final_class}</p>}
      {response && response.segment_image && <img src={response.segment_image} alt="Overlayed" />}
      {response && response.error && <p>Error: {response.error}</p>}
    </div>
  );
};

export default APIRequest;
