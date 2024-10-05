// app/(site)/page.jsx

import Navbar from '../../components/Navbar';
// import Footer from '../../components/Footer';
import InferenceForm from '../../components/InferenceForm';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-gray-100 p-6">
        <InferenceForm />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
