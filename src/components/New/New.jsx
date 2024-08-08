import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <p className="uppercase text-center text-orange-500 text-sm font-bold font-heading mb-4">FEATURES</p>
        <h1 className="text-center text-4xl lg:text-5xl font-bold font-heading mb-24">Discover our features</h1>
        
        <div className="flex flex-wrap -mx-4">
          {/* Feature Description */}
          <div className="w-full lg:w-1/2 p-4">
            <div className="flex flex-col items-stretch sm:items-start justify-center h-full">
              <h2 className="text-4xl font-bold font-heading mb-6 max-w-sm">
                Study room. Personal or group.
              </h2>
              <p className="text-gray-400 text-lg mb-6 max-w-lg">
                Optimize your study environment with a personalized room, tailored to accommodate group study sessions.
              </p>
              <div className="border border-gray-700 rounded-xl p-2 shadow inline-flex items-center gap-3 flex-wrap mb-10">
                <div className="bg-purple-800 rounded-lg px-2 py-1 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.33334 7.99998C1.33334 4.31793 4.31796 1.33331 8.00001 1.33331C11.6821 1.33331 14.6667 4.31793 14.6667 7.99998C14.6667 11.682 11.6821 14.6666 8.00001 14.6666C4.31796 14.6666 1.33334 11.682 1.33334 7.99998ZM10.4684 6.75964C10.5094 6.70497 10.5391 6.64266 10.5557 6.57635C10.5723 6.51005 10.5755 6.4411 10.565 6.37356C10.5546 6.30601 10.5308 6.24123 10.495 6.18302C10.4591 6.12481 10.412 6.07436 10.3564 6.03461C10.3008 5.99487 10.2378 5.96664 10.1712 5.95159C10.1045 5.93654 10.0355 5.93496 9.9682 5.94696C9.90091 5.95896 9.8367 5.98429 9.77935 6.02146C9.72199 6.05863 9.67264 6.10688 9.6342 6.1634L7.42155 9.26083L6.31112 8.15041C6.21391 8.05982 6.08533 8.01051 5.95247 8.01285C5.81962 8.0152 5.69286 8.06902 5.5989 8.16297C5.50494 8.25693 5.45112 8.38369 5.44878 8.51655C5.44643 8.6494 5.49575 8.77798 5.58634 8.87519L7.1248 10.4137C7.17744 10.4663 7.2409 10.5068 7.31077 10.5324C7.38064 10.558 7.45525 10.5681 7.52942 10.562C7.60359 10.5559 7.67554 10.5337 7.74027 10.497C7.805 10.4603 7.86097 10.4099 7.90428 10.3494L10.4684 6.75964Z" fill="#530031"></path>
                  </svg>
                  <span className="text-purple-300 text-xs font-medium">Tips</span>
                </div>
                <p className="text-sm font-medium">Customize your room to enhance your focus.</p>
              </div>
              <div className="flex gap-4 flex-wrap">
                <a className="h-14 inline-flex items-center justify-center w-full sm:w-auto text-center py-4 px-6 rounded-full bg-orange-500 border border-orange-600 shadow font-bold font-heading text-white hover:bg-orange-600 focus:ring focus:ring-orange-200 transition duration-200" href="#">Sign Up Now</a>
                <a className="h-14 inline-flex items-center justify-center w-full sm:w-auto text-center py-4 px-6 rounded-full bg-white border border-gray-200 shadow font-bold font-heading text-black hover:bg-gray-50 focus:ring focus:ring-orange-200 transition duration-200" href="#">Learn more</a>
              </div>
            </div>
          </div>
          {/* Feature Image */}
          <div className="w-full lg:w-1/2 p-4">
            <img className="lg:ml-auto" src="https://thumbs.dreamstime.com/b/ai-sign-dark-tech-background-footage-cine-k-illuminated-panel-artificial-intelligence-video-present-289235587.jpg" alt="Feature Platform" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
