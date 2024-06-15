import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import servicenow from './servicenow.jpg';

const Testimonial = () => {
  return (
    <div className="my-16">
      <div className="container mx-auto p-4 text-center">
        <div className="text-custom-green text-4xl sm:text-6xl md:text-8xl mb-4">
          <FontAwesomeIcon icon={faQuoteLeft} />
        </div>
        <div className='flex flex-col mb-4'>
          <p className="text-sm sm:text-base md:text-xl font-medium">
            With the help of Landify, I have created a landing page for my startup.
          </p>
          <p className="text-sm sm:text-base md:text-xl font-medium">The UI kit is so intuitive and easy to use.</p>
        </div>
        <div className='flex flex-row justify-between mb-4'>
          <div className="">
            <button className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border-2 border-gray-300">
              <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-gray-600" />
            </button>
          </div>
          <div className="">
            <button className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border-2 border-gray-300">
              <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-gray-600" />
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mb-4">
          <img
            src={servicenow}
            alt="Hero Image"
            className='w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 mb-2'
          />
          <div className="text-sm sm:text-base md:text-lg font-semibold">Floyd Miles</div>
          <div className="text-gray-800 text-xs sm:text-sm md:text-base">Vice President, GoPro</div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
