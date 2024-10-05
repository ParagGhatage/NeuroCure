
import Navbar from '../../components/Navbar';
// import Footer from '../../components/Footer';
import InferenceForm from '../../components/InferenceForm';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Navbar /> */}
      <main className="flex-grow flex items-center justify-center bg-gray-100 p-8">
        <div className="bg-white shadow-lg rounded-lg p-8  w-full">
          
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
            Upload your MRI image to get a classification and segmentation results.
          </h1>
          <InferenceForm />
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
