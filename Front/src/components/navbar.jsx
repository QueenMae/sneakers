import React from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="bg-pink-200 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-16" />
        </div>
        <div className="flex space-x-4">
          <a href="/" className="text-white hover:text-gray-200 transition">
            Home
          </a>
          <a href="/login" className="text-white hover:text-gray-200 transition">
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;