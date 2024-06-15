import React, { useState } from 'react';
import logo from './image.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-custom-blue shadow fixed top-0 left-0 w-full z-50 h-24 py-4">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-900 flex items-center">
          <img src={logo} className='w-6 h-6' alt="Logo" />
          <a href="#" className='text-xl px-2'>Landify</a>
        </div>
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="text-gray-800 hover:text-gray-600">About</a>
          <a href="#" className="text-gray-800 hover:text-gray-600">Service</a>
          <a href="#" className="text-gray-800 hover:text-gray-600">Awards</a>
          <a href="#" className="text-gray-800 hover:text-gray-600">Portfolio</a>
          <a href="#" className="text-white bg-custom-violet hover:bg-custom-violet px-4 py-2 rounded">Contact</a>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 hover:text-gray-600 focus:outline-none">
            <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-custom-blue shadow w-full absolute top-24 left-0 z-50">
          <nav className="px-6 py-3 space-y-2">
            <a href="#" className="block text-gray-800 hover:text-gray-600 ">About</a>
            <a href="#" className="block text-gray-800 hover:text-gray-600">Service</a>
            <a href="#" className="block text-gray-800 hover:text-gray-600">Awards</a>
            <a href="#" className="block text-gray-800 hover:text-gray-600">Portfolio</a>
            <a href="#" className="block text-white bg-custom-violet hover:bg-custom-violet px-4 py-2 rounded">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
