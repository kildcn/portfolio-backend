import React from 'react';

const Hero = ({ profile }) => {
  if (!profile) return null;

  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 pt-16">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-30 dark:opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-100 dark:bg-indigo-900 rounded-full"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-100 dark:bg-indigo-900 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="sm:text-center lg:text-left lg:col-span-6">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block">Hello, I'm</span>
              <span className="block text-indigo-600 dark:text-indigo-400">
                {profile.name}
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-300 sm:mt-5 sm:text-xl">
              {profile.title}
            </p>
            <p className="mt-5 text-lg text-gray-500 dark:text-gray-400 max-w-xl">
            {profile.bio ? profile.bio.split(' ').slice(0, 25).join(' ') + '...' : ''}

            </p>
            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-white bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
              >
                Get In Touch
              </a>
            </div>
          </div>
          <div className="mt-12 relative lg:mt-0 lg:col-span-6 flex justify-center lg:justify-end">
            <div className="max-w-md sm:max-w-lg lg:max-w-xl">
              {profile.avatar ? (
                <div className="rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-xl w-64 h-64 md:w-80 md:h-80 relative mx-auto">
                  <img
                    src={profile.avatar}
                    alt={profile.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-xl bg-gray-200 dark:bg-gray-700 w-64 h-64 md:w-80 md:h-80 flex items-center justify-center mx-auto">
                  <svg className="h-32 w-32 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll Down</p>
        <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
