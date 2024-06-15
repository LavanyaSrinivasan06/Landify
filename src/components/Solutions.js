import React from 'react';
import ArchitectureIcon from './svg/architecture'; 
import InteriorDesignIcon from './svg/interior';
import RealEstateIcon from './svg/realestate';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Solutions = () => {
  return (
    <div className="mt-8 w-[90%] mx-auto px-4">
       <div className='flex flex-col items-start'>
        <h2 className="text-3xl font-bold text-left text-black mb-6  w-full lg:px-6">Solutions for your dream</h2>
      </div>
      
      <div className="flex flex-col pt-4 md:flex-row justify-around space-y-8 md:space-y-0 md:space-x-4">
        
        <div className="flex flex-col items-start space-y-4">
          <ArchitectureIcon />
          <h3 className="text-2xl font-bold text-black">Architecture</h3>
          <p className="text-lg text-black">Add multiple links in Instagram instead of just one.</p>
          <a href="#" className="text-custom-violet flex items-center">
            Know more
            <span className="ml-1">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </a>
        </div>
      
        <div className="flex flex-col items-start space-y-4">
          <InteriorDesignIcon />
          <h3 className="text-2xl font-bold text-black">Interior design</h3>
          <p className="text-lg text-black">Easy communication with your clients.</p>
          <a href="#" className="text-custom-violet flex items-center">
            Know more
            <span className="ml-1">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </a>
        </div>
     
        <div className="flex flex-col items-start space-y-4">
          <RealEstateIcon />
          <h3 className="text-2xl font-bold text-black">Real estate</h3>
          <p className="text-lg text-black">Capture leads and grow your business with them.</p>
          <a href="#" className="text-custom-violet flex items-center">
            Know more
            <span className="ml-1">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
