"use client"
import InferenceForm from './components/InferenceForm';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      <main className="flex-grow flex items-center justify-center bg-gray-100 p-8">
        <div className="bg-white shadow-lg rounded-lg p-8  w-full">
          
          <h1 className="text-3xl sm:text-7xl font-bold text-center mb-6 text-gray-800">
            Welcome to NeuroCure
          </h1>
          <InferenceForm />
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
