import React from 'react';
const Statistics = () => {
    return (
    <div className="flex flex-wrap justify-around py-6  bg-white mx-auto px-4 sm:px-64 sm:pt-16 md:px-16 md:pt-16 lg:px-24  lg:pt-16 xl:px-24 ">
        
        <div className="flex items-center space-x-1 w-full sm:w-1/2 lg:w-1/4 lg:px-6 mb-4 md:mb-0 px-2">
          <div className="w-0.5 h-12 bg-custom-violet"></div>
          <div>
            <h1 className="text-3xl font-bold text-black">850</h1>
            <h3 className="text-lg text-black">Buildings constructed</h3>
          </div>
        </div>
        
        <div className="flex items-center space-x-2 w-full sm:w-1/2 lg:w-1/4 lg:px-6 mb-4 md:mb-0 px-2">
          <div className="w-0.5 h-12 bg-custom-violet"></div>
          <div>
            <h1 className="text-3xl font-bold text-black">578</h1>
            <h3 className="text-lg text-black">Homes sold</h3>
          </div>
        </div>
       
        <div className="flex items-center space-x-2 w-full sm:w-1/2 lg:w-1/4 px-2 lg:px-6 ">
          <div className="w-0.5 h-12 bg-custom-violet"></div>
          <div>
            <h1 className="text-3xl font-bold text-black">97</h1>
            <h3 className="text-lg text-black">Dedicated Members</h3>
          </div>
        </div>
      
        <div className="flex items-center space-x-2 w-full sm:w-1/2 lg:w-1/4 px-2 lg:px-6">
          <div className="w-0.5 h-12 bg-custom-violet"></div>
          <div>
            <h1 className="text-3xl font-bold text-black">24</h1>
            <h3 className="text-lg text-black">Awards won</h3>
          </div>
        </div>
      </div>
    );
  };
  
  export default Statistics;
  