"use client"
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Loader from './Loader';
import { useToast } from '@chakra-ui/react';

const APIRequest = ({ image }) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState("Enable to get details.");
  const toast = useToast()

  const sendRequest = async () => {

    // TumorInfo.jsx
const MeningiomaMarkdown = `
## Tumor Type: Meningioma
**Description**: Meningioma is a tumor that develops from the protective layers covering the brain and spinal cord. While most meningiomas are benign (non-cancerous), they can cause symptoms due to their location.

**What Patients Should Do**: Consult a neurosurgeon for further evaluation and possible surgical intervention if symptomatic. Regular monitoring through MRI scans is often recommended to track any changes in size or symptoms.

**Implications**: Potential headaches, vision problems, and neurological deficits if left untreated.
`;

const GlioblastomaMarkdown = `
## Tumor Type: Glioblastoma
**Description**: Glioblastoma is a highly aggressive and malignant brain tumor that originates from glial cells. It is cancerous and typically requires a multi-modal treatment approach, including surgery, radiation therapy, and chemotherapy.

**What Patients Should Do**: Discuss treatment options with an oncologist to formulate a personalized care plan. The prognosis can vary, but early intervention is crucial to managing symptoms and improving quality of life.

**Implications**: May include seizures, cognitive difficulties, and significant functional impairment.
`;

const PituitaryAdenomaMarkdown = `
## Tumor Type: Pituitary Adenoma
**Description**: Pituitary adenomas are usually benign tumors of the pituitary gland that can affect hormone production and lead to various health issues.

**What Patients Should Do**: Seek an endocrinologist for evaluation and possible treatment, which may include medication or surgery. While most pituitary adenomas are not cancerous, they can cause significant symptoms depending on their size and the hormones involved.

**Implications**: Vision changes, hormonal deficiencies, and headaches.
`;

const NoTumorMarkdown = `
## No Tumor
**Description**: No tumor detected. This result indicates that there are no abnormal growths identified in the imaging studies.

**What Patients Should Do**: Maintain regular health check-ups and screenings as advised by their healthcare provider. Staying informed about any symptoms or changes in health is essential for early detection of potential issues.
`;


    const formData = new FormData();
    formData.append('image', image); // Ensure the key matches the backend

    setLoading(true);
    try {
      const res = await fetch('https://neuro-cure-backend-service-563601529608.us-central1.run.app/predict', {
        method: 'POST',
        body: formData,
      });

      // Log the full response object
      console.log('Response:', res);

      const data = await res.json(); // Properly parse the response JSON

      // Log the parsed data to see its structure
      console.log('Data:', data);
      if(data){
        toast({
          title: `Dignosis is ready!`,
          status: "success",
          isClosable: true,
        })
      }
      switch (data.final_class) {
        case 0: {data.final_class="No Tumor"
          setInfo(NoTumorMarkdown)
        }
          
          break;
        case 1: {data.final_class="Glioma Tumor"
          setInfo(GlioblastomaMarkdown)
        }
          
          break;
        case 2: {data.final_class="Meningioma Tumor"
          setInfo(MeningiomaMarkdown)
        }
          
          break;
        case 3: {data.final_class="Pituitary Tumor"
          setInfo(PituitaryAdenomaMarkdown)
        }
          
          break;
      
        default: data.final_class="Enable to predict."
          break;
      }

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
    <div className="sm:mt-6 text-center">
  <button
    onClick={sendRequest}
    disabled={loading}
    className={`${
      loading ? 'bg-black sm:px-8 rounded-xl sm:w-24 sm:h-24 text-center border-2 text-white border-black ' : 'bg-red-400 text-black sm:p-2 text-center sm:text-xl border-black border-2 sm:m-3 rounded-md'
    } `}
  >
    {loading ? (
      <div className=''>
        <Loader/>
      </div>
    ):("Send for Analysis"

    )}
  </button>

  {/* Display final class if available */}
  {response && response.final_class !== undefined && (
    
    <p className="sm:mt-4 sm:text-3xl font-semibold text-black">
      Diagnosis: {response.final_class}
    </p>
  )}

  {/* Container for side-by-side boxes */}
  <div className="flex flex-col md:flex-row sm:mt-6 sm:space-y-4 md:space-y-0 sm:p-4 sm:space-x-4">
    {/* Original Image Box */}
    <div className="bg-gray-50 sm:p-4 border border-gray-200 rounded-lg flex flex-col items-center w-full md:w-1/2">
      <h3 className="sm:text-lg font-semibold text-gray-700 sm:mb-2 ">Click image to upload</h3>
      <div>

     
      {image ? (
        <img
          src={URL.createObjectURL(image)}
          alt="Original MRI"
          className="w-full sm:h-auto"
        />
      ) : (
        <div className="text-gray-400">
          <img
        src="/pexels-googledeepmind-17483868.jpg" // Update with your image path
        alt="Background"
        className="sm:object-cover sm:w-50 sm:h-50 rounded-lg "
      />
        </div>
      )}
       </div>
    </div>

    {/* Segmented Image Box */}
    {response && response.segment_image ? (

    <div className="bg-gray-50 sm:p-4 border border-gray-200 rounded-lg flex flex-col items-center w-full md:w-1/2">
      <h3 className="sm:text-lg font-semibold text-gray-700 sm:mb-2">Segmented Image</h3>
      {response && response.segment_image ? (
        <img
          src={`data:image/jpeg;base64,${response.segment_image}`}
          alt="Segmented MRI"
          className="w-full sm:h-auto"
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
    <p className="sm:mt-4 text-red-500 font-semibold">Error: {response.error}</p>
  )}
  {
    (response && response.final_class)?(
      <div className="text-left markdown-content">
        <ReactMarkdown>{info}</ReactMarkdown>
      </div>
    ):null 
  }
</div>


  );
};

export default APIRequest;
