import React from "react";

const Footer = () => {
  return (
    <footer className="bg-pink-200 text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a
            href="#"
            className="hover:text-gray-200 transition-colors"
          >
            Privacy Policy
          </a>
          <span>|</span>
          <a
            href="#"
            className="hover:text-gray-200 transition-colors"
          >
            Terms of Service
          </a>
          <span>|</span>
          <a
            href="#"
            className="hover:text-gray-200 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
