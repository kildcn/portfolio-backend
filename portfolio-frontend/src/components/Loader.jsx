import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-50">
      <div className="relative">
        {/* Main loader circle */}
        <div className="h-24 w-24 rounded-full border-t-4 border-b-4 border-indigo-600 dark:border-indigo-400 animate-spin"></div>

        {/* Center dot */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-indigo-600 dark:bg-indigo-400"></div>

        {/* Loading text */}
        <div className="mt-8 text-center text-gray-700 dark:text-gray-300 font-medium">
          Loading awesome content...
        </div>
      </div>
    </div>
  );
};

export default Loader;
