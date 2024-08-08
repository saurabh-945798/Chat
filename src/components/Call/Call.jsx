import React from 'react';

const CallToAction = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-black">
      <img
        className="absolute top-0 left-0"
        src="https://static.shuffle.dev/components/preview/c4e6b06e-6b70-403f-92e9-fa62e0a96eef/assets/public/saturn-assets/images/cta/blue-light-left-top.png"
        alt=""
      />
      <img
        className="absolute top-0 right-0"
        src="https://static.shuffle.dev/components/preview/c4e6b06e-6b70-403f-92e9-fa62e0a96eef/assets/public/saturn-assets/images/cta/orange-right-bottom.png"
        alt=""
      />
      <div className="relative container px-4 mx-auto">
        <div className="max-w-2xl lg:max-w-3xl xl:max-w-5xl xl:pr-20">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-10">
            <span>Build stunning websites are going easy with</span>
            <span className="font-serif italic">saturn</span>
            <span>ui library</span>
          </h1>
          <p className="max-w-xl text-base sm:text-xl text-gray-300 font-semibold mb-10">
            Nisi eu pellentesque felis volutpat aliquet pulvinar sed. Vitae fames vestibulum urna vel odio mauris urna orci est. Eget amet elementum fames nisl eu.
          </p>
          <div className="lg:flex items-center">
            <a
              className="relative group inline-block mb-12 lg:mb-0 md:mr-10 lg:mr-18 py-4 px-6 text-white font-semibold bg-orange-900 rounded-full overflow-hidden"
              href="#"
            >
              <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
              <div className="relative flex items-center justify-center">
                <span className="mr-4">Learn More</span>
                <span>
                  <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6.83 5.28999L2.59 1.04999C2.49704 0.956266 2.38644 0.881872 2.26458 0.831103C2.14272 0.780334 2.01202 0.754196 1.88 0.754196C1.74799 0.754196 1.61729 0.780334 1.49543 0.831103C1.37357 0.881872 1.26297 0.956266 1.17 1.04999C0.983753 1.23736 0.879211 1.49081 0.879211 1.75499C0.879211 2.01918 0.983753 2.27263 1.17 2.45999L4.71 5.99999L1.17 9.53999C0.983753 9.72736 0.879211 9.98081 0.879211 10.245C0.879211 10.5092 0.983753 10.7626 1.17 10.95C1.26344 11.0427 1.37426 11.116 1.4961 11.1658C1.61794 11.2155 1.7484 11.2408 1.88 11.24C2.01161 11.2408 2.14207 11.2155 2.26391 11.1658C2.38575 11.116 2.49656 11.0427 2.59 10.95L6.83 6.70999C6.92373 6.61703 6.99813 6.50643 7.04889 6.38457C7.09966 6.26271 7.1258 6.13201 7.1258 5.99999C7.1258 5.86798 7.09966 5.73728 7.04889 5.61542C6.99813 5.49356 6.92373 5.38296 6.83 5.28999Z"
                      fill="#FAFBFC"
                    ></path>
                  </svg>
                </span>
              </div>
            </a>
            <div className="flex items-center">
              <img
                className="block w-24 md:w-32 lg:w-auto mr-6"
                src="https://static.shuffle.dev/components/preview/c4e6b06e-6b70-403f-92e9-fa62e0a96eef/assets/public/saturn-assets/images/cta/image-small.png"
                alt=""
              />
              <p className="text-sm text-gray-400">Our office is always open to having you anytime</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
