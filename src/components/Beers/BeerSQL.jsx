import React, { useState, useEffect } from "react";
import BeerCard from "./BeerCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function BeerSQL() {
  const [beers, setBeers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [beersPerPage, setBeersPerPage] = useState(12);
  const [selectedHops, setSelectedHops] = useState("");
  const [abv, setAbv] = useState(11.5);
  const [ibu, setIbu] = useState(70);
  const [tempAbv, setTempAbv] = useState(abv);
  const [tempIbu, setTempIbu] = useState(ibu);
  const [category, setCategory] = useState("");
  
  useEffect(() => {
    const fetchBeers = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `http://localhost:3010/beers?search=${search}&hops=${selectedHops}&page=${currentPage}&limit=${beersPerPage}&abv=${abv}&ibu=${ibu}&category=${category}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setBeers(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("There was a problem fetching the data.");
        setLoading(false);
      }
    };

    fetchBeers();
  }, [search, selectedHops, currentPage, beersPerPage, abv, ibu, category]);

  // reset to all beers
  const resetBeers = () => {
    setAbv(11.5);
    setIbu(70);
    setTempAbv(abv);
    setTempIbu(ibu);
    setSearch("");
    setSelectedHops("");
    setCategory("");
    setCurrentPage(1);
    setInputValue("");
  };

  // make pagination mobile responsive 
  const updateBeersPerPage = () => {
    if (window.innerWidth <= 768) {
      setBeersPerPage(6);
    } else {
      setBeersPerPage(12);
    }
  };

  useEffect(() => {
    updateBeersPerPage();
    window.addEventListener("resize", updateBeersPerPage);

    return () => {
      window.removeEventListener("resize", updateBeersPerPage);
    };
  }, []);

  const handleSearch = (e) => {
    setInputValue(e.target.value);
  };

  const submitSearch = () => {
    setSearch(inputValue);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  function handleAbvChange(event) {
    setAbv(event.target.value);
  }

  function handleIbuChange(event) {
    setIbu(event.target.value);
  }

  const handleHopChange = (e) => {
    const hop = e.target.value;
    if (selectedHops.includes(hop)) {
      setSelectedHops(
        selectedHops.filter((selectedHop) => selectedHop !== hop)
      );
    } else {
      setSelectedHops([...selectedHops, hop]);
    }
  };

  function handleAbvChange(event) {
    setTempAbv(event.target.value);
  }

  const submitAbvSearch = () => {
    setAbv(tempAbv);
  };

  function handleIbuChange(event) {
    setTempIbu(event.target.value);
  }

  const submitIbuSearch = () => {
    setIbu(tempIbu);
  };

  if (loading) {
    return <div className="p-24">Loading...</div>;
  }

  // for debugging purposes
  if (error) {
    return <div className="p-24">{error}</div>;
  }

  // allows user to return to all beers when search is empty
  if (!beers.length) {
    return (
      <div>
        <div className="flex flex-col items-center p-24 md:p-24">
          <div className="text-lg font-semibold mb-6">No results.</div>
          <button
            className="group w-fit text-white px-6 py-3 my-2 mx-auto flex items-center justify-center rounded-md bg-secondary hover:cursor-pointer hover:scale-105 duration-100"
            onClick={resetBeers}
          >
            Return to all Beers
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-24 text-center md:p-24">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col ">
          <div className="border-2 border-gray-200 rounded-md p-4">
            {/* Search Beers */}
            <div className="mb-4 flex md:flex-row flex-col" name="search">
              <input
                type="text"
                placeholder="Search beers..."
                value={inputValue}
                onChange={handleSearch}
                className="md:w-auto md:mr-2 border-2 border-gray-300 rounded-md p-2 mr-2"
              />

              <button
                className="md:mt-0 md:w-auto bg-secondary text-white rounded-md p-2"
                onClick={submitSearch}
              >
                Search
              </button>
            </div>

            {/* Reset Filters */}
            <div className="mb-4">
              <button
                className="group w-fit text-white px-6 py-3 flex items-center justify-center rounded-md bg-secondary hover:cursor-pointer hover:scale-105 duration-100"
                onClick={resetBeers}
              >
                Reset Filters
              </button>
            </div>

            {/* Hops Selection */}
            <div className="mb-4 text-left" name="hops box">
              <h3 className="font-semibold text-lg mb-2">Hops</h3>
              {[
                "Amarillo",
                "Northern Brewer",
                "Centennial",
                "Liberty",
                "Citra",
              ].map((hop) => (
                <label key={hop} className="block">
                  <input
                    type="checkbox"
                    name={hop}
                    value={hop}
                    checked={selectedHops.includes(hop)}
                    onChange={handleHopChange}
                  />
                  {hop}
                </label>
              ))}
            </div>

            {/* ABV Slider */}
            <div className="mb-4" name="abv slider">
              <div className="flex flex-col text-left border-2 rounded-md p-4">
                <h2 className="font-bold text-2xl mb-2">ABV</h2>
                <div>
                  <label htmlFor="my-range" className="mb-2">
                    Choose a value:
                  </label>
                  <input
                    type="range"
                    id="my-range"
                    name="my-range"
                    min="3.41"
                    max="11.5"
                    step="0.1"
                    value={tempAbv}
                    onChange={handleAbvChange}
                    onMouseUp={submitAbvSearch}
                    className="mb-2"
                  />
                  <div> ABV up to: {abv}%</div>
                </div>
              </div>

              {/* IBU Slider */}
              <div className="mb-4" name="IBU slider">
                <div className="flex flex-col text-left border-2 rounded-md p-4">
                  <h2 className="font-bold text-2xl mb-2">IBU</h2>
                  <div>
                    <label htmlFor="my-range" className="mb-2">
                      Choose a value:
                    </label>
                    <input
                      type="range"
                      id="my-range"
                      name="my-range"
                      min="0"
                      max="70" //68 is highest in datbase
                      step="1"
                      value={tempIbu}
                      onChange={handleIbuChange}
                      onMouseUp={submitIbuSearch}
                      className="mb-2"
                    />
                    <div>Selected IBU: {ibu}</div>
                  </div>
                </div>
              </div>

              {/* Category Selection */}
              <div className="mb-4" name="categ">
                <select
                  name="catagories"
                  onChange={(e) => setCategory(e.target.value)}
                  className="border-2 border-gray-300 rounded-md p-2"
                >
                  <option value="">All Types</option>
                  <option value="Ale">Ale</option>
                  <option value="IPA">IPA</option>
                  <option value="Lager">Lager</option>
                  <option value="Porter">Porter</option>
                  <option value="Sour">Sour</option>
                  <option value="Stout">Stout</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Beer Cards */}
        <div className="flex flex-wrap justify-center items-center">
          {beers.map((beer) => (
            <BeerCard key={beer.id} 
            beer={beer} 
            onRatingUpdate={handleRatingUpdate}
            />
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center mt-6">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-secondary text-white rounded-md p-2 mr-2"
        >
          <FaChevronLeft />
        </button>
        <span className="font-semibold text-lg">{currentPage}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={beers.length < beersPerPage}
          className="bg-secondary text-white rounded-md p-2 ml-2"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default BeerSQL;
