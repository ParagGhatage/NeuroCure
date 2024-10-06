import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-5 mt-20 text-black">
      <h1 className="text-4xl font-bold mb-4 mt-12">About NeuroCure</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Welcome to NeuroCure</h2>
        <p className="mt-2">
          NeuroCure is an innovative platform dedicated to revolutionizing brain tumor detection and classification using advanced machine learning techniques. Our mission is to leverage cutting-edge technology to provide accurate and timely analyses, empowering patients and healthcare professionals with the information they need.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Our Mission</h2>
        <p className="mt-2">
          At NeuroCure, we aim to enhance the diagnostic process for brain tumors, making it faster, more accurate, and accessible to all. We believe that through the power of AI, we can transform how brain imaging is interpreted and diagnosed, ultimately improving patient outcomes.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Our Vision</h2>
        <p className="mt-2">
          We envision a future where AI-driven solutions are seamlessly integrated into healthcare, providing critical insights and support to medical professionals. By improving the efficiency of brain tumor detection, we strive to contribute to the fight against cancer, helping patients receive the care they deserve.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">How It Works</h2>
        <ol className="mt-2 list-decimal list-inside">
          <li>Data Input: Users can easily upload their MRI scans through our user-friendly interface.</li>
          <li>Model Processing: Our trained models analyze the images to detect and classify tumors, providing real-time results.</li>
          <li>Results Presentation: Users receive detailed reports, including visualizations of segmentation results and tumor classifications.</li>
        </ol>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Technology Behind NeuroCure</h2>
        <p className="mt-2">
          NeuroCure is built using the latest advancements in machine learning and image processing. We employ robust models, including ResNet50V2 and custom architectures, trained on thousands of medical images to ensure high accuracy and reliability.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Meet the Team</h2>
        <h3 className="text-xl font-semibold">Parag Ghatage</h3>
        <p>A passionate web developer with a keen interest in machine learning, Parag aims to create groundbreaking technologies that improve lives. His vision for NeuroCure stems from a desire to leverage AI in the healthcare domain.</p>
        {/* Add additional team members here */}
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Join Us on Our Journey</h2>
        <p className="mt-2">
          At NeuroCure, we are continuously striving for improvement and innovation. We welcome feedback, suggestions, and collaborations from researchers, medical professionals, and tech enthusiasts. Together, we can make a difference in the world of healthcare.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold">Contact Us</h2>
        <p className="mt-2">
          If you have any questions or would like to collaborate, please feel free to reach out through our Contact page.
        </p>
      </section>
    </div>
  );
};

export default About;
