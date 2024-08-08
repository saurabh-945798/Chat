import React from 'react';

const PricingSection = () => {
  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto px-4">
        <p className="tracking-tight text-gray-300 font-medium text-center mb-4">Pricing & Plan</p>
        <h1 className="font-heading tracking-tight text-4xl md:text-6xl font-medium text-center mb-16 text-white">Select a suitable plan</h1>
        <div className="flex flex-wrap -m-4 mb-16">
          {/* Starter Plan */}
          <div className="w-full lg:w-1/3 p-4">
            <div className="border border-gray-800 rounded-2xl h-full">
              <div className="p-10 bg-orange-700 rounded-tl-2xl rounded-tr-2xl">
                <p className="text-2xl tracking-tight font-semibold mb-1 text-white">Starter Plan</p>
                <p className="text-gray-300 tracking-tight">Best for small business or startups</p>
              </div>
              <div className="p-10">
                <ul className="flex flex-col gap-4 mb-10 text-gray-300">
                  <li className="flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 21.6C17.3019 21.6 21.6 17.302 21.6 12C21.6 6.69809 17.3019 2.40002 12 2.40002C6.69806 2.40002 2.39999 6.69809 2.39999 12C2.39999 17.302 6.69806 21.6 12 21.6ZM16.4485 10.4486C16.9172 9.97992 16.9172 9.22013 16.4485 8.7515C15.9799 8.28287 15.2201 8.28287 14.7515 8.7515L10.8 12.703L9.24852 11.1515C8.77989 10.6829 8.02009 10.6829 7.55147 11.1515C7.08284 11.6201 7.08284 12.3799 7.55147 12.8486L9.95147 15.2486C10.4201 15.7172 11.1799 15.7172 11.6485 15.2486L16.4485 10.4486Z" fill="#FFFFFF"></path>
                    </svg>
                    <span className="tracking-tight font-medium">Flexible Subscription Plans</span>
                  </li>
                  <li className="flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 21.6C17.3019 21.6 21.6 17.302 21.6 12C21.6 6.69809 17.3019 2.40002 12 2.40002C6.69806 2.40002 2.39999 6.69809 2.39999 12C2.39999 17.302 6.69806 21.6 12 21.6ZM16.4485 10.4486C16.9172 9.97992 16.9172 9.22013 16.4485 8.7515C15.9799 8.28287 15.2201 8.28287 14.7515 8.7515L10.8 12.703L9.24852 11.1515C8.77989 10.6829 8.02009 10.6829 7.55147 11.1515C7.08284 11.6201 7.08284 12.3799 7.55147 12.8486L9.95147 15.2486C10.4201 15.7172 11.1799 15.7172 11.6485 15.2486L16.4485 10.4486Z" fill="#FFFFFF"></path>
                    </svg>
                    <span className="tracking-tight font-medium">Customizable Feature Bundles</span>
                  </li>
                  <li className="flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 21.6C17.3019 21.6 21.6 17.302 21.6 12C21.6 6.69809 17.3019 2.40002 12 2.40002C6.69806 2.40002 2.39999 6.69809 2.39999 12C2.39999 17.302 6.69806 21.6 12 21.6ZM16.4485 10.4486C16.9172 9.97992 16.9172 9.22013 16.4485 8.7515C15.9799 8.28287 15.2201 8.28287 14.7515 8.7515L10.8 12.703L9.24852 11.1515C8.77989 10.6829 8.02009 10.6829 7.55147 11.1515C7.08284 11.6201 7.08284 12.3799 7.55147 12.8486L9.95147 15.2486C10.4201 15.7172 11.1799 15.7172 11.6485 15.2486L16.4485 10.4486Z" fill="#FFFFFF"></path>
                    </svg>
                    <span className="tracking-tight font-medium">Free Trial Period</span>
                  </li>
                  <li className="flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 21.6C17.3019 21.6 21.6 17.302 21.6 12C21.6 6.69809 17.3019 2.40002 12 2.40002C6.69806 2.40002 2.39999 6.69809 2.39999 12C2.39999 17.302 6.69806 21.6 12 21.6ZM16.4485 10.4486C16.9172 9.97992 16.9172 9.22013 16.4485 8.7515C15.9799 8.28287 15.2201 8.28287 14.7515 8.7515L10.8 12.703L9.24852 11.1515C8.77989 10.6829 8.02009 10.6829 7.55147 11.1515C7.08284 11.6201 7.08284 12.3799 7.55147 12.8486L9.95147 15.2486C10.4201 15.7172 11.1799 15.7172 11.6485 15.2486L16.4485 10.4486Z" fill="#FFFFFF"></path>
                    </svg>
                    <span className="tracking-tight font-medium">Transparent Pricing Structure</span>
                  </li>
                </ul>
                <h2 className="tracking-tight mb-8 text-white">
                  <span className="text-5xl font-medium">$3,999</span>
                  <span className="text-gray-400">/ One time payment</span>
                </h2>
                <a href="#" className="bg-gray-800 h-16 w-full border border-gray-700 rounded-full px-6 py-4 text-center text-white font-semibold text-lg transition-transform duration-300 hover:scale-105">Get Started</a>
              </div>
            </div>
          </div>
          {/* Professional Plan */}
          <div className="w-full lg:w-1/3 p-4">
            <div className="border border-gray-800 rounded-2xl h-full">
              <div className="p-10 bg-orange-600 rounded-tl-2xl rounded-tr-2xl">
                <p className="text-2xl tracking-tight font-semibold mb-1 text-white">Professional Plan</p>
                <p className="text-gray-300 tracking-tight">Perfect for established businesses</p>
              </div>
              <div className="p-10">
                <ul className="flex flex-col gap-4 mb-10 text-gray-300">
                  <li className="flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 21.6C17.3019 21.6 21.6 17.302 21.6 12C21.6 6.69809 17.3019 2.40002 12 2.40002C6.69806 2.40002 2.39999 6.69809 2.39999 12C2.39999 17.302 6.69806 21.6 12 21.6ZM16.4485 10.4486C16.9172 9.97992 16.9172 9.22013 16.4485 8.7515C15.9799 8.28287 15.2201 8.28287 14.7515 8.7515L10.8 12.703L9.24852 11.1515C8.77989 10.6829 8.02009 10.6829 7.55147 11.1515C7.08284 11.6201 7.08284 12.3799 7.55147 12.8486L9.95147 15.2486C10.4201 15.7172 11.1799 15.7172 11.6485 15.2486L16.4485 10.4486Z" fill="#FFFFFF"></path>
                    </svg>
                    <span className="tracking-tight font-medium">Customizable Templates</span>
                  </li>
                  <li className="flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 21.6C17.3019 21.6 21.6 17.302 21.6 12C21.6 6.69809 17.3019 2.40002 12 2.40002C6.69806 2.40002 2.39999 6.69809 2.39999 12C2.39999 17.302 6.69806 21.6 12 21.6ZM16.4485 10.4486C16.9172 9.97992 16.9172 9.22013 16.4485 8.7515C15.9799 8.28287 15.2201 8.28287 14.7515 8.7515L10.8 12.703L9.24852 11.1515C8.77989 10.6829 8.02009 10.6829 7.55147 11.1515C7.08284 11.6201 7.08284 12.3799 7.55147 12.8486L9.95147 15.2486C10.4201 15.7172 11.1799 15.7172 11.6485 15.2486L16.4485 10.4486Z" fill="#FFFFFF"></path>
                    </svg>
                    <span className="tracking-tight font-medium">24/7 Customer Support</span>
                  </li>
                  <li className="flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 21.6C17.3019 21.6 21.6 17.302 21.6 12C21.6 6.69809 17.3019 2.40002 12 2.40002C6.69806 2.40002 2.39999 6.69809 2.39999 12C2.39999 17.302 6.69806 21.6 12 21.6ZM16.4485 10.4486C16.9172 9.97992 16.9172 9.22013 16.4485 8.7515C15.9799 8.28287 15.2201 8.28287 14.7515 8.7515L10.8 12.703L9.24852 11.1515C8.77989 10.6829 8.02009 10.6829 7.55147 11.1515C7.08284 11.6201 7.08284 12.3799 7.55147 12.8486L9.95147 15.2486C10.4201 15.7172 11.1799 15.7172 11.6485 15.2486L16.4485 10.4486Z" fill="#FFFFFF"></path>
                    </svg>
                    <span className="tracking-tight font-medium">Advanced Analytics</span>
                  </li>
                  <li className="flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 21.6C17.3019 21.6 21.6 17.302 21.6 12C21.6 6.69809 17.3019 2.40002 12 2.40002C6.69806 2.40002 2.39999 6.69809 2.39999 12C2.39999 17.302 6.69806 21.6 12 21.6ZM16.4485 10.4486C16.9172 9.97992 16.9172 9.22013 16.4485 8.7515C15.9799 8.28287 15.2201 8.28287 14.7515 8.7515L10.8 12.703L9.24852 11.1515C8.77989 10.6829 8.02009 10.6829 7.55147 11.1515C7.08284 11.6201 7.08284 12.3799 7.55147 12.8486L9.95147 15.2486C10.4201 15.7172 11.1799 15.7172 11.6485 15.2486L16.4485 10.4486Z" fill="#FFFFFF"></path>
                    </svg>
                    <span className="tracking-tight font-medium">Unlimited Storage</span>
                  </li>
                </ul>
                <h2 className="tracking-tight mb-8 text-white">
                  <span className="text-5xl font-medium">$7,999</span>
                  <span className="text-gray-400">/ One time payment</span>
                </h2>
                <a href="#" className="bg-gray-800 h-16 w-full border border-gray-700 rounded-full px-6 py-4 text-center text-white font-semibold text-lg transition-transform duration-300 hover:scale-105">Get Started</a>
              </div>
            </div>
          </div>
          {/* Enterprise Plan */}
          <div className="w-full lg:w-1/3 p-4">
            <div className="border border-gray-800 rounded-2xl h-full">
              <div className="p-10 bg-orange-500 rounded-tl-2xl rounded-tr-2xl">
                <p className="text-2xl tracking-tight font-semibold mb-1 text-white">Enterprise Plan</p>
                <p className="text-gray-300 tracking-tight">For large-scale enterprises</p>
              </div>
              <div className="p-10">
                <ul className="flex flex-col gap-4 mb-10 text-gray-300">
                  <li className="flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 21.6C17.3019 21.6 21.6 17.302 21.6 12C21.6 6.69809 17.3019 2.40002 12 2.40002C6.69806 2.40002 2.39999 6.69809 2.39999 12C2.39999 17.302 6.69806 21.6 12 21.6ZM16.4485 10.4486C16.9172 9.97992 16.9172 9.22013 16.4485 8.7515C15.9799 8.28287 15.2201 8.28287 14.7515 8.7515L10.8 12.703L9.24852 11.1515C8.77989 10.6829 8.02009 10.6829 7.55147 11.1515C7.08284 11.6201 7.08284 12.3799 7.55147 12.8486L9.95147 15.2486C10.4201 15.7172 11.1799 15.7172 11.6485 15.2486L16.4485 10.4486Z" fill="#FFFFFF"></path>
                    </svg>
                    <span className="tracking-tight font-medium">Dedicated Account Manager</span>
                  </li>
                  <li className="flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 21.6C17.3019 21.6 21.6 17.302 21.6 12C21.6 6.69809 17.3019 2.40002 12 2.40002C6.69806 2.40002 2.39999 6.69809 2.39999 12C2.39999 17.302 6.69806 21.6 12 21.6ZM16.4485 10.4486C16.9172 9.97992 16.9172 9.22013 16.4485 8.7515C15.9799 8.28287 15.2201 8.28287 14.7515 8.7515L10.8 12.703L9.24852 11.1515C8.77989 10.6829 8.02009 10.6829 7.55147 11.1515C7.08284 11.6201 7.08284 12.3799 7.55147 12.8486L9.95147 15.2486C10.4201 15.7172 11.1799 15.7172 11.6485 15.2486L16.4485 10.4486Z" fill="#FFFFFF"></path>
                    </svg>
                    <span className="tracking-tight font-medium">Custom Development</span>
                  </li>
                  <li className="flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 21.6C17.3019 21.6 21.6 17.302 21.6 12C21.6 6.69809 17.3019 2.40002 12 2.40002C6.69806 2.40002 2.39999 6.69809 2.39999 12C2.39999 17.302 6.69806 21.6 12 21.6ZM16.4485 10.4486C16.9172 9.97992 16.9172 9.22013 16.4485 8.7515C15.9799 8.28287 15.2201 8.28287 14.7515 8.7515L10.8 12.703L9.24852 11.1515C8.77989 10.6829 8.02009 10.6829 7.55147 11.1515C7.08284 11.6201 7.08284 12.3799 7.55147 12.8486L9.95147 15.2486C10.4201 15.7172 11.1799 15.7172 11.6485 15.2486L16.4485 10.4486Z" fill="#FFFFFF"></path>
                    </svg>
                    <span className="tracking-tight font-medium">Onsite Training</span>
                  </li>
                  <li className="flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 21.6C17.3019 21.6 21.6 17.302 21.6 12C21.6 6.69809 17.3019 2.40002 12 2.40002C6.69806 2.40002 2.39999 6.69809 2.39999 12C2.39999 17.302 6.69806 21.6 12 21.6ZM16.4485 10.4486C16.9172 9.97992 16.9172 9.22013 16.4485 8.7515C15.9799 8.28287 15.2201 8.28287 14.7515 8.7515L10.8 12.703L9.24852 11.1515C8.77989 10.6829 8.02009 10.6829 7.55147 11.1515C7.08284 11.6201 7.08284 12.3799 7.55147 12.8486L9.95147 15.2486C10.4201 15.7172 11.1799 15.7172 11.6485 15.2486L16.4485 10.4486Z" fill="#FFFFFF"></path>
                    </svg>
                    <span className="tracking-tight font-medium">Custom Integrations</span>
                  </li>
                </ul>
                <h2 className="tracking-tight mb-8 text-white">
                  <span className="text-5xl font-medium">$29,999</span>
                  <span className="text-gray-400">/ One time payment</span>
                </h2>
                <a href="#" className="bg-gray-800 h-16 w-full border border-gray-700 rounded-full px-6 py-4 text-center text-white font-semibold text-lg transition-transform duration-300 hover:scale-105">Get Started</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
