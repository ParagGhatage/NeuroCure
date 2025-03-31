import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-50 text-black py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-center text-indigo-600 mb-12">About NeuroCure</h1>

        {/* Welcome Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-indigo-500">🌟 Welcome to NeuroCure</h2>
          <p className="mt-4 text-lg leading-relaxed">
            At NeuroCure, we’re on a mission to revolutionize brain tumor detection using the power of advanced machine learning.
            Our platform is designed to provide rapid, accurate analyses that empower patients and healthcare professionals with timely insights.
          </p>
        </section>

        {/* Mission Section */}
        <section className="mb-12 bg-indigo-100 p-6 rounded-lg">
          <h2 className="text-3xl font-semibold text-indigo-600">🎯 Our Mission</h2>
          <p className="mt-4 text-lg leading-relaxed">
            We aim to make brain tumor diagnosis faster, more accurate, and universally accessible. By harnessing the power of AI,
            we are transforming brain imaging interpretation to improve patient outcomes and assist healthcare providers in delivering the best care.
          </p>
        </section>

        {/* Vision Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-indigo-600">🔮 Our Vision</h2>
          <p className="mt-4 text-lg leading-relaxed">
            We envision a future where AI seamlessly integrates into healthcare systems, providing essential insights to support medical professionals. NeuroCure is dedicated to making this future a reality, helping fight cancer and provide patients with the best care possible.
          </p>
        </section>

        {/* How It Works Section */}
        <section className="mb-12 bg-indigo-50 p-6 rounded-lg">
          <h2 className="text-3xl font-semibold text-indigo-600">🛠️ How It Works</h2>
          <ol className="mt-4 list-decimal list-inside text-lg leading-relaxed">
            <li className="mb-4">
              📥 <strong>Data Input:</strong> Users can easily upload their MRI scans through our intuitive, user-friendly interface.
            </li>
            <li className="mb-4">
              ⚙️ <strong>Model Processing:</strong> Our advanced machine learning models analyze the scans in real-time, detecting and classifying brain tumors with high accuracy.
            </li>
            <li className="mb-4">
              📊 <strong>Results Presentation:</strong> Detailed reports with visualizations of segmentation results and tumor classifications are provided to users.
            </li>
          </ol>
        </section>

        {/* Technology Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-indigo-600">💻 Technology Behind NeuroCure</h2>
          <p className="mt-4 text-lg leading-relaxed">
            NeuroCure leverages cutting-edge machine learning and image processing technologies, including models like ResNet50V2 and custom architectures.
            Our models are trained on thousands of medical images, ensuring high reliability and precision in brain tumor detection.
          </p>
        </section>

        {/* Meet the Team Section */}
        <section className="mb-12 bg-indigo-100 p-6 rounded-lg">
          <h2 className="text-3xl font-semibold text-indigo-600">Meet the Team</h2>
          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-indigo-500">Parag Ghatage - Full Stack Developer & AI Enthusiast</h3>
            <p className="mt-4 text-lg leading-relaxed">
              Hello! I’m Parag, a full-stack developer passionate about using artificial intelligence to make a difference in healthcare.
              NeuroCure represents my first deep dive into AI, where I’m blending my web development experience with deep learning to enhance the accuracy of brain tumor detection.
              I’m excited to work on impactful AI solutions that improve diagnosis and bring positive change to patients’ lives. Join me in exploring the future of AI in medicine!
            </p>
          </div>
        </section>

        {/* Join Us Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-indigo-600">🚀 Join Us on Our Journey</h2>
          <p className="mt-4 text-lg leading-relaxed">
            At NeuroCure, we’re constantly pushing the limits of what’s possible. We invite researchers, medical professionals, and tech enthusiasts to collaborate with us.
            Together, we can make a meaningful impact on healthcare through innovation.
          </p>
        </section>

        {/* Contact Us Section */}
        <section className="mb-12 bg-indigo-50 p-6 rounded-lg">
          <h2 className="text-3xl font-semibold text-indigo-600">📬 Contact Us</h2>
          <p className="mt-4 text-lg leading-relaxed">
            Have any questions, or want to collaborate? Don’t hesitate to reach out through our Contact page. We would love to hear from you!
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
