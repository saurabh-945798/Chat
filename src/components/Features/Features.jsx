// FeaturesSection.js

import React from 'react';
import './Features.css'; // Import custom CSS for infinite scrolling

const FeaturesSection = () => {
  return (
    <section className="pt-20 md:pt-40 bg-black overflow-hidden">
      <div className="container px-4 mx-auto mb-20 sm:mb-32">
        <div className="text-center mb-24 md:mb-32">
          <div className="inline-flex items-center mb-8">
            <span className="block w-2 h-2 mr-2 rounded-full bg-blue-500"></span>
            <span className="uppercase text-sm text-gray-200 font-medium">FEATURES</span>
          </div>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-heading font-semibold text-white">Create podcast every day</h1>
        </div>
        <div className="flex flex-wrap items-center xl:items-start -mx-4">
          <div className="w-full lg:w-1/3 xl:w-1/4 px-4 mb-20 lg:mb-0">
            <div className="max-w-sm mx-auto">
              <div className="flex mb-24">
                <span className="flex-shrink-0 inline-block mt-4 mr-8 w-3 h-3 bg-yellow-500 rounded-full"></span>
                <div>
                  <h4 className="font-heading text-3xl sm:text-4xl text-white font-semibold mb-8">Comfort like you've never experienced before.</h4>
                  <p className="text-gray-300">The house by the pond cras ornare</p>
                </div>
              </div>
              <div className="flex">
                <span className="flex-shrink-0 inline-block mt-4 mr-8 w-3 h-3 bg-yellow-500 rounded-full"></span>
                <div>
                  <h4 className="font-heading text-3xl sm:text-4xl text-white font-semibold mb-8">Create great podcasts</h4>
                  <p className="text-gray-300">The house by the pond cras ornare</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 xl:w-2/4 px-4 mb-20 lg:mb-0">
            <div>
              <img className="w-full max-w-md xl:max-w-lg mx-auto" src="https://static.shuffle.dev/components/preview/eb871dd5-f47f-46b0-b045-8a2f5f5b8995/assets/public/suncealand-assets/images/features-frame1.png" alt="Features Frame" />
            </div>
          </div>
          <div className="w-full lg:w-1/3 xl:w-1/4 px-4">
            <div className="max-w-sm mx-auto">
              <div className="flex mb-24">
                <span className="flex-shrink-0 inline-block mt-4 mr-8 w-3 h-3 bg-yellow-500 rounded-full"></span>
                <div>
                  <h4 className="font-heading text-3xl sm:text-4xl text-white font-semibold mb-8">Make every day feel like Sunday</h4>
                  <p className="text-gray-300">The house by the pond cras ornare</p>
                </div>
              </div>
              <div className="flex">
                <span className="flex-shrink-0 inline-block mt-4 mr-8 w-3 h-3 bg-yellow-500 rounded-full"></span>
                <div>
                  <h4 className="font-heading text-3xl sm:text-4xl text-white font-semibold mb-8">New online platform</h4>
                  <p className="text-gray-300">The house by the pond cras ornare</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative pt-16 pb-18">
        <div className="container px-4 mx-auto">
          <img className="absolute top-0 left-0 h-full w-full object-cover lg:object-fill" src="https://static.shuffle.dev/components/preview/eb871dd5-f47f-46b0-b045-8a2f5f5b8995/assets/public/suncealand-assets/background/circles-bottom.svg" alt="Background Circles" />
          <div className="infinite-slider relative flex items-center justify-between">
            <span className="relative flex-shrink-0 inline-block mr-8 md:mr-20 lg:mr-40 uppercase text-sm font-medium">
              <span className="absolute top-0 left-0 text-gray-200">Online Platform</span>
              <span className="bg-clip-text bg-gradient-to-br from-indigo-800 to-gray-200 text-transparent relative z-10 animate-pulse">Online Platform</span>
            </span>
            <span className="relative flex-shrink-0 inline-block mr-8 md:mr-20 lg:mr-40 uppercase text-sm font-medium">
              <span className="absolute top-0 left-0 text-gray-200">Everything you need to podcast</span>
              <span className="bg-clip-text bg-gradient-to-br from-indigo-800 to-gray-200 text-transparent relative z-10 animate-pulse">Everything you need to podcast</span>
            </span>
            <span className="relative flex-shrink-0 inline-block mr-8 md:mr-20 lg:mr-40 uppercase text-sm font-medium">
              <span className="absolute top-0 left-0 text-gray-200">COLLABORATION</span>
              <span className="bg-clip-text bg-gradient-to-br from-indigo-800 to-gray-200 text-transparent relative z-10 animate-pulse">COLLABORATION</span>
            </span>
            <span className="relative flex-shrink-0 inline-block mr-8 md:mr-20 lg:mr-40 uppercase text-sm font-medium">
              <span className="absolute top-0 left-0 text-gray-200">Perfect quality</span>
              <span className="bg-clip-text bg-gradient-to-br from-indigo-800 to-gray-200 text-transparent relative z-10 animate-pulse">Perfect quality</span>
            </span>
            <span className="relative flex-shrink-0 inline-block mr-8 md:mr-20 lg:mr-40 uppercase text-sm font-medium">
              <span className="absolute top-0 left-0 text-gray-200">NEW APP</span>
              <span className="bg-clip-text bg-gradient-to-br from-indigo-800 to-gray-200 text-transparent relative z-10 animate-pulse">NEW APP</span>
            </span>
            <span className="relative flex-shrink-0 inline-block uppercase text-sm font-medium">
              <span className="absolute top-0 left-0 text-gray-200">MORE and more and more</span>
              <span className="bg-clip-text bg-gradient-to-br from-indigo-800 to-gray-200 text-transparent relative z-10 animate-pulse">MORE and more and more</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
