import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <nav className="bg-blue-600 w-full  text-white">
        <div className="container mx-auto flex items-center justify-between p-4">
          {/* Logo */}
          <div className="text-2xl font-bold">MyBrand</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-gray-300">
              Home
            </a>
            <a href="#about" className="hover:text-gray-300">
              About
            </a>
            <a href="#services" className="hover:text-gray-300">
              Services
            </a>
            <a href="#contact" className="hover:text-gray-300">
              Contact
            </a>
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-blue-500">
            <a href="#home" className="block py-2 px-4 hover:bg-blue-700">
              Home
            </a>
            <a href="#about" className="block py-2 px-4 hover:bg-blue-700">
              About
            </a>
            <a href="#services" className="block py-2 px-4 hover:bg-blue-700">
              Services
            </a>
            <a href="#contact" className="block py-2 px-4 hover:bg-blue-700">
              Contact
            </a>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
