import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import logo from './image.png';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4">
     
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-center mb-4 flex-col sm:flex-row">
          <img src={logo} alt="Landify Logo" className="w-6 h-6 mr-2" />
          <span className="text-xl">Landify</span>
        </div>

        <div className="flex justify-center space-x-4 sm:space-x-8 mb-4 flex-wrap">
          <a href="#about" className="hover:text-gray-400">About</a>
          <a href="#services" className="hover:text-gray-400">Services</a>
          <a href="#awards" className="hover:text-gray-400">Awards</a>
          <a href="#news" className="hover:text-gray-400">News</a>
          <a href="#blog" className="hover:text-gray-400">Blog</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </div>

        <div className="border-t border-gray-800 my-4"></div>

        <div className="flex flex-col sm:flex-row justify-between items-center">
          <span>© 2024 All rights reserved</span>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="https://instagram.com" className="hover:text-gray-400"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://twitter.com" className="hover:text-gray-400"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://youtube.com" className="hover:text-gray-400"><FontAwesomeIcon icon={faYoutube} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
