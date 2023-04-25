import React from "react";

const Beers = () => {
  return (
    <div className="min-h-screen bg-gray-100 pt-40">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-800 py-4">Beer Finder</h1>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 bg-white shadow sm:rounded-lg">
          <form className="flex flex-col sm:flex-row items-center">
            <label htmlFor="beer-search" className="sr-only">
              Search for a beer
            </label>
            <input
              type="text"
              id="beer-search"
              placeholder="Search for a beer"
              className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:max-w-xs"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2 hover:bg-blue-600 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              Search
            </button>
          </form>

          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Beer cards */}
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/740377/pexels-photo-740377.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="Beer"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="font-bold text-xl mb-2">Beer Name</h2>
                <p className="text-gray-700">Brewery Name</p>
              </div>
            </div>

            {/* Repeat this card for each beer found */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Beers;
