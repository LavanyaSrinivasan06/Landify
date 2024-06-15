// src/Gallery.js
import React from 'react';

// Import images
import image1 from './whitesoffa.jpg';
import image2 from './redsoffa.png';
import image3 from './stairs.jpg';
import image4 from './soffa.png';
import image5 from './sandal.jpg';
import image6 from './blue.jpg';

const images = [image1, image2, image3, image4, image5, image6];

const Gallery = () => {
  return (
    <div className="container mx-auto p-4 my-16">
      <h1 className="text-2xl font-bold mb-4">Selected Works</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="p-2">
            <div className="w-full h-64 overflow-hidden">
              <img src={image} alt={`Gallery ${index}`} className="w-full h-full object-cover" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
