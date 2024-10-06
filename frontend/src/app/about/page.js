import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-5 mt-20 text-black">
      <h1 className="text-4xl font-bold mb-4 mt-12 text-center text-blue-600">About NeuroCure</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500">🌟 Welcome to NeuroCure</h2>
        <p className="mt-2 text-lg leading-relaxed">
          At NeuroCure, we&apos;re on a mission to transform the way brain tumors are detected and classified using the power of advanced machine learning! Our platform is designed to empower patients and healthcare professionals with rapid, accurate analyses to ensure timely interventions.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500">🎯 Our Mission</h2>
        <p className="mt-2 text-lg leading-relaxed">
          We strive to make brain tumor diagnosis faster, more accurate, and universally accessible. By harnessing AI, we aim to revolutionize brain imaging interpretation, ultimately improving outcomes for patients and healthcare providers alike!
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500">🔮 Our Vision</h2>
        <p className="mt-2 text-lg leading-relaxed">
          Imagine a future where AI-driven solutions seamlessly integrate into healthcare systems, providing critical insights and support to medical professionals. At NeuroCure, we&apos;re dedicated to making this vision a reality, helping to combat cancer and provide patients with the care they need and deserve.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500">🛠️ How It Works</h2>
        <ol className="mt-2 list-decimal list-inside text-lg leading-relaxed">
          <li className="mb-2">📥 <strong>Data Input:</strong> Users can easily upload their MRI scans through our intuitive interface.</li>
          <li className="mb-2">⚙️ <strong>Model Processing:</strong> Our advanced models analyze the images in real time to detect and classify tumors.</li>
          <li className="mb-2">📊 <strong>Results Presentation:</strong> Users receive detailed reports with visualizations of segmentation results and tumor classifications.</li>
        </ol>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500">💻 Technology Behind NeuroCure</h2>
        <p className="mt-2 text-lg leading-relaxed">
          We&apos;re leveraging cutting-edge technology in machine learning and image processing. NeuroCure utilizes powerful models like ResNet50V2 and custom architectures, meticulously trained on thousands of medical images to ensure top-notch accuracy and reliability.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-semibold">Meet the Team</h2>
        <h3 className="text-xl font-semibold">Parag Ghatage - Full Stack Developer & AI Enthusiast</h3>
        <p className="mt-2">
          Hello! I’m Parag, a passionate full-stack developer with a deep-seated interest in harnessing the power of artificial intelligence to revolutionize healthcare. NeuroCure marks my inaugural venture into the world of deep learning, blending my web development skills with cutting-edge technology to tackle the complexities of brain tumor detection. I am driven by a mission to create impactful solutions that not only enhance diagnostic accuracy but also make a meaningful difference in patients&apos; lives. Join me on this exciting journey as we explore the limitless possibilities of AI in medicine!
        </p>
        
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-blue-500">🚀 Join Us on Our Journey</h2>
        <p className="mt-2 text-lg leading-relaxed">
          We&apos;re constantly pushing boundaries at NeuroCure, and we value your input! Whether you&apos;re a researcher, medical professional, or tech enthusiast, we invite your feedback, suggestions, and collaborations. Together, we can make a significant impact in healthcare!
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold text-blue-500">📬 Contact Us</h2>
        <p className="mt-2 text-lg leading-relaxed">
          Have questions or interested in collaborating? Don’t hesitate to reach out through our Contact page. We’d love to hear from you!
        </p>
      </section>
    </div>
  );
};

export default About;
