import React from "react";

const BeersMain = () => {
  return (
    <div className="py-24">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/4 px-4">
          <h2 className="text-xl font-bold mb-4">Filter by:</h2>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="category"
              >
                Category:
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="category"
              >
                <option>All</option>
                <option>Ales</option>
                <option>Lagers</option>
                <option>Stouts</option>
                <option>IPAs</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="country"
              >
                Country:
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="country"
              >
                <option>All</option>
                <option>USA</option>
                <option>Germany</option>
                <option>Belgium</option>
                <option>England</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="brewery"
              >
                Brewery:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="brewery"
                type="text"
                placeholder="Search by brewery"
              />
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Apply Filters
            </button>
          </form>
        </div>
        <div className="w-full lg:w-3/4 px-4">
          <h2 className="text-xl font-bold mb-4">Beer Catalog</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg shadow p-4">
              <img
                src="/images/beer1.jpg"
                alt="Beer 1"
                className="w-full rounded-lg mb-4"
              />
              <h3 className="text-lg font-bold mb-2">Beer 1</h3>
              <p className="text-gray-700">Description of Beer 1</p>
            </div>
            <div className="bg-white rounded-lg shadow p-4">
              <img
                src="/images/beer2.jpg"
                alt="Beer 2"
                className="w-full rounded-lg mb-4"
              />
              <h3 className="text-lg font-bold mb-2">Beer 2</h3>
              <p className="text-gray-700">Description of Beer 2</p>
            </div>
            <div className="bg-white rounded-lg shadow p-4">
              <img
                src="/images/beer3.jpg"
                alt="Beer 3"
                className="w-full rounded-lg mb-4"
              />
              <h3 className="text-lg font-bold mb-2">Beer 3</h3>
              <p className="text-gray-700">Description of Beer 3</p>
            </div>
            <div className="bg-white rounded-lg shadow p-4">
              <img
                src="/images/beer4.jpg"
                alt="Beer 4"
                className="w-full rounded-lg mb-4"
              />
              <h3 className="text-lg font-bold mb-2">Beer 4</h3>
              <p className="text-gray-700">Description of Beer 4</p>
            </div>
            <div className="bg-white rounded-lg shadow p-4">
              <img
                src="/images/beer5.jpg"
                alt="Beer 5"
                className="w-full rounded-lg mb-4"
              />
              <h3 className="text-lg font-bold mb-2">Beer 5</h3>
              <p className="text-gray-700">Description of Beer 5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeersMain;
