"use client"
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-white text-3xl font-bold">
          NeuroCure
        </Link>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>
        </div>

        {/* Desktop Links with Increased Spacing */}
        <div className="hidden md:flex space-x-10"> {/* Increased spacing from 6 to 10 */}
          <Link href="/about" className="text-gray-300 hover:text-white">
            About
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white">
            Contact
          </Link>
          
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4">
          <Link href="/about" className="text-gray-300 hover:text-white">
            About
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white">
            Contact
          </Link>
          <Link href="/services" className="text-gray-300 hover:text-white">
            Services
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
