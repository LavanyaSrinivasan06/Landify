import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import hero from './heroimage.png'; // Adjusted to use the uploaded image

const Hero = () => {
    return (
        <section className="relative bg-custom-blue flex items-center py-24 pb-8">
            <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row items-center space-y-6 md:space-y-0">
                <div className="md:w-1/2 flex flex-col items-start space-y-4">
                    <h1 className="text-2xl md:text-4xl font-bold text-gray-900">Workspace that</h1>
                    <h1 className="text-2xl md:text-4xl font-bold text-gray-900">inspires you</h1>
                    <p className="mt-1 text-sm md:text-md text-gray-700">
                        We help you building the dreams and more than you expect.
                    </p>
                    <div className="mt-2 flex items-center space-x-2">
                        <div className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full cursor-pointer">
                            <FontAwesomeIcon icon={faPlayCircle} className="h-4 w-4 text-white" />
                        </div>
                        <div className="flex items-center space-x-1">
                            <div className="w-8 h-0.5 bg-gray-700"></div>
                            <span className="text-sm font-medium text-gray-900">Discover</span>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 w-full flex justify-center md:justify-end">
                    <img
                        src={hero}
                        alt="Hero Image"
                        className="w-full max-w-xs h-auto object-cover rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
