import React from "react";

const TopNav = () => {
  return (
    <div>
      <div className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img className="h-12 w-12" src="http://getdrawings.com/vectors/sun-vector-free-10.png" alt="Sunny Icon" />
              </div>
            </div>
            <div className="flex-1 px-2 flex justify-center lg:ml-6">
              <div className="max-w-lg w-full lg:max-w-xs">
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center" aria-hidden="true">
                    <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <input 
                    id="search" 
                    className="block w-full bg-white py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 placeholder-gray-500 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo sm:text-sm" 
                    placeholder="Search by City" 
                  />
                </div>
              </div>
              <span className="inline-flex rounded-md shadow-sm ml-2">
                <button 
                  type="button" 
                  className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-indigo-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50"
                  >
                  Search
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default TopNav;


