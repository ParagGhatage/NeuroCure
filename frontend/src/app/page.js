"use client";
import InferenceForm from "./components/InferenceForm";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen pt-16 bg-gradient-to-b from-gray-900 to-gray-700 text-white">
      <main className="flex-grow flex items-center justify-center p-8">
        <div className="bg-gray-800 shadow-xl rounded-2xl p-10 w-full max-w-3xl text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
            Welcome to NeuroCure
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            AI-powered brain tumor detection with cutting-edge deep learning models.
          </p>
          <InferenceForm />
        </div>
      </main>
    </div>
  );
};

export default HomePage;