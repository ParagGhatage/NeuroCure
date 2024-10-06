// Footer.jsx
import { IconBrandGithub, IconBrandLinkedin, IconBrandX } from '@tabler/icons-react';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Stay Connected!</h3>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="https://www.linkedin.com/in/parag-ghatage-09685a314/" target="_blank" rel="noopener noreferrer">
              <IconBrandLinkedin/>
            </a>
            <a href="https://github.com/ParagGhatage" target="_blank" rel="noopener noreferrer">
            <IconBrandGithub/>
            </a>
            <a href="https://x.com/PARAG_GHATAGE" target="_blank" rel="noopener noreferrer">
            <IconBrandX/>
            </a>
          </div>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Parag Ghatage. All rights reserved.
        </p>
        <p className="text-sm">
          Contact: <a href="mailto:thunderwolf.dev@gmail.com" className="underline">thunderwolf.dev@gmail.com</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
