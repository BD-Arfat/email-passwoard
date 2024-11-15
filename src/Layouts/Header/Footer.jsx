import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <main className="flex-grow"></main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Section */}
            <div>
              <h2 className="text-xl font-bold mb-4">About Us</h2>
              <p className="text-gray-400">
                We are committed to delivering the best services to our
                customers. Contact us for more information.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h2 className="text-xl font-bold mb-4">Quick Links</h2>
              <ul>
                <li>
                  <a href="#home" className="text-gray-400 hover:text-gray-200">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-gray-200"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-gray-200"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-gray-200"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <h2 className="text-xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-400">Email: support@example.com</p>
              <p className="text-gray-400">Phone: +123 456 789</p>
              <p className="text-gray-400">Address: 123 Street, City</p>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8"></div>
          <div className="text-center text-gray-500 mt-4">
            © 2024 MyBrand. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
