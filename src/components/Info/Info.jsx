import React from 'react';

const BackupSolutionsSection = () => {
  return (
    <section className="py-20 md:py-40 bg-black overflow-hidden">
      <div className="container px-4 mx-auto">
        {/* Heading and Description */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-heading font-semibold text-white mb-12">
            Cloud backup solutions for you
          </h1>
          <p className="text-2xl text-gray-200">
            Record your audio and upload it now.
          </p>
        </div>

        {/* Logos Section */}
        <div className="max-w-2xl mx-auto mb-24">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
              <div className="h-56 max-w-2xs mx-auto px-8 pt-10 bg-gray-800 rounded-2xl">
                <img className="mb-10" src="https://static.shuffle.dev/components/preview/eb871dd5-f47f-46b0-b045-8a2f5f5b8995/assets/public/suncealand-assets/logos/slack-logo.svg" alt="Slack Logo" />
                <h4 className="text-2xl font-medium text-white">Slack</h4>
                <span className="text-gray-200">As always</span>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0 mt-8 md:mt-12">
              <div className="animate-bouncingSlow h-56 max-w-2xs mx-auto px-8 pt-10 bg-gray-800 rounded-2xl">
                <img className="mb-10" src="https://static.shuffle.dev/components/preview/eb871dd5-f47f-46b0-b045-8a2f5f5b8995/assets/public/suncealand-assets/logos/miro-logo-icon.svg " alt="Miro Logo" />
                <h4 className="text-2xl font-medium text-white">Miro</h4>
                <span className="text-gray-200">Oh, irreplaceable</span>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4">
              <div className="h-56 max-w-2xs mx-auto px-8 pt-10 bg-gray-800 rounded-2xl">
                <img className="mb-10" src="https://static.shuffle.dev/components/preview/eb871dd5-f47f-46b0-b045-8a2f5f5b8995/assets/public/suncealand-assets/logos/we-logo.svg    " alt="Wetransfer Logo" />
                <h4 className="text-2xl font-medium text-white">Wetransfer</h4>
                <span className="text-gray-200">The fastest</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tagline Section */}
        <div className="max-w-5xl mx-auto">
          <div className="relative flex -mb-4 flex-wrap items-center justify-between">
            <span className="relative inline-block w-full md:w-auto mb-4 uppercase text-sm font-medium">
              <span className="absolute top-0 left-0 text-gray-200">GREAT COLLABORATION</span>
              <span className="bg-clip-text bg-gradient-to-br from-indigo-800 to-gray-200 text-transparent relative z-10 animate-pulse">
                GREAT COLLABORATION
              </span>
            </span>
            <span className="relative inline-block w-full md:w-auto mb-4 uppercase text-sm font-medium">
              <span className="absolute top-0 left-0 text-gray-200">Everything you need to podcasts</span>
              <span className="bg-clip-text bg-gradient-to-br from-indigo-800 to-gray-200 text-transparent relative z-10 animate-pulse">
                Everything you need to podcasts
              </span>
            </span>
            <span className="relative inline-block w-full md:w-auto mb-4 uppercase text-sm font-medium">
              <span className="absolute top-0 left-0 text-gray-200">FASTEST TRANSFER</span>
              <span className="bg-clip-text bg-gradient-to-br from-indigo-800 to-gray-200 text-transparent relative z-10 animate-pulse">
                FASTEST TRANSFER
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackupSolutionsSection;
