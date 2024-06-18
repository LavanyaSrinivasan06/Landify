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
    <header className="bg-custom-blue shadow fixed top-0  w-full z-50 h-24 py-4">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-900 flex items-center px-2">
          <img src={logo} className='w-6 h-6' alt="Logo" />
          <a href="#" className='text-xl px-2'>Landify</a>
        </div>
        {/*  visible on  larger */}
        <nav className="hidden md:flex space-x-4 pt-2">
          <a href="#" className="text-gray-800 hover:text-gray-600">About</a>
          <a href="#" className="text-gray-800 hover:text-gray-600">Service</a>
          <a href="#" className="text-gray-800 hover:text-gray-600">Awards</a>
          <a href="#" className="text-gray-800 hover:text-gray-600">Portfolio</a>
          <a href="#" className="text-white bg-custom-violet hover:bg-custom-violet px-4 py-2 rounded">Contact</a>
        </nav>
        {/* smaller than md size, condition render menu to close if menu open */}
        {/* visible for mobile */}
        {/* if dont give hidden then icon displayed in larger size */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 hover:text-gray-600 focus:outline-none">
            <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} />
          </button>
        </div>
      </div>
      {/* small screen only if ismenuopen = true */}
      {/* render element on the right side of the && only if the condition on the left side is true */}
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
