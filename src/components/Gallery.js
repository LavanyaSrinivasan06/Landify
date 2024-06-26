import React from 'react';

import image1 from './whitesoffa.jpg';
import image2 from './redsoffa.png';
import image3 from './stairs.jpg';
import image4 from './soffa.png';
import image5 from './sandal.jpg';
import image6 from './blue.jpg';

const Gallery = () => {
  return (
    <div className="container mx-auto p-4 my-16">
      <h1 className="text-2xl font-bold mb-4">Selected Works</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-2">
          <div className="w-full h-64 overflow-hidden">
            <img src={image1} alt="Gallery 1" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="p-2">
          <div className="w-full h-64 overflow-hidden">
            <img src={image2} alt="Gallery 2" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="p-2">
          <div className="w-full h-64 overflow-hidden">
            <img src={image3} alt="Gallery 3" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="p-2">
          <div className="w-full h-64 overflow-hidden">
            <img src={image4} alt="Gallery 4" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="p-2">
          <div className="w-full h-64 overflow-hidden">
            <img src={image5} alt="Gallery 5" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="p-2">
          <div className="w-full h-64 overflow-hidden">
            <img src={image6} alt="Gallery 6" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
