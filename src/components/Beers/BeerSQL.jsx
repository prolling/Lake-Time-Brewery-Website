import React, { useState, useEffect } from "react";
import BeerCard from "./BeerCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function BeerSQL() {
  const [beers, setBeers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [beersPerPage] = useState(10);
  const [inputValue, setInputValue] = useState("");
  const [selectedHops, setSelectedHops] = useState("");
  const [abv, setAbv] = useState(15);
  const [ibu, setIbu] = useState(70);
  const [abvLoading, setAbvLoading] = useState(true);
  const [category, setCategory] = useState("");

  useEffect(() => {
    const fetchBeers = async () => {
      setLoading(true);
      setAbvLoading(true);
      try {
        const response = await fetch(
          `http://localhost:3010/beers?search=${search}&hops=${selectedHops}&page=${currentPage}&limit=${beersPerPage}&abv=${abv}`
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
  }, [search, selectedHops, currentPage, beersPerPage, abv]);

  // reset to all beers
  const resetBeers = () => {
    setAbv(15);
    setIbu(70);
    setSearch("");
    setSelectedHops("");
    setCategory("");
    setCurrentPage(1);
  };

  const handleSearch = (e) => {
    setInputValue(e.target.value);
  };

  const submitSearch = () => {
    setSearch(inputValue);
  };

  const submitABVSearch = () => {
    setAbvLoading(abv);
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

  // For hops checkbox
  const handleHopChange = (e) => {
    const hop = e.target.value;
    if (selectedHops.includes(hop)) {
      // If hop is already selected, remove it from the array
      setSelectedHops(
        selectedHops.filter((selectedHop) => selectedHop !== hop)
      );
    } else {
      // If hop is not selected, add it to the array
      setSelectedHops([...selectedHops, hop]);
    }
  };

  if (loading) {
    return <div className="p-24">Loading...</div>;
  }

  if (error) {
    return <div className="p-24">{error}</div>;
  }

  if (!beers.length) {
    return (
      <div>
        <div className="p-24">No results.</div>
        <div className="">
          <button
            className="group w-fit text-white px-6 py-3 my-2 mx-auto flex items-center justify-center rounded-md bg-secondary hover:cursor-pointer hover:scale-105 duration-100 animate-jump-3"
            onClick={resetBeers}
          >
            Return to all Beers
          </button>
        </div>
      </div>
    );
  }

  const categorySelect = document.getElementById("categories");

  // Add event listeners to the dropdown boxes
  // categorySelect.addEventListener("change", handleCatagoryChange);

  // function handleDropdownChange() {
  //   const category = categorySelect.value;
  //   const price = priceSelect.value;

  // Make an AJAX request to your server-side code using

  return (
    <div className="p-48 text-center">
      <div className="flex">
        <div className="flex flex-col">
          <div name="search">
            <input
              type="text"
              placeholder="Search beers..."
              value={inputValue}
              onChange={handleSearch}
            />

            <button onClick={submitSearch}>Search</button>
          </div>

          <div name="hops box">
            <label>
              <input
                type="checkbox"
                name="Amarillo"
                value="Amarillo"
                checked={selectedHops.includes("Amarillo")}
                onChange={handleHopChange}
              />
              Amarillo
            </label>
            <label>
              <input
                type="checkbox"
                name="Northern Brewer"
                value="Northern Brewer"
                checked={selectedHops.includes("Northern Brewer")}
                onChange={handleHopChange}
              />
              Northern Brewer
            </label>
            <label>
              <input
                type="checkbox"
                name="Centennial"
                value="Centennial"
                checked={selectedHops.includes("Centennial")}
                onChange={handleHopChange}
              />
              Centennial
            </label>
            <label>
              <input
                type="checkbox"
                name="Liberty"
                value="Liberty"
                checked={selectedHops.includes("Liberty")}
                onChange={handleHopChange}
              />
              Liberty
            </label>
            <label>
              <input
                type="checkbox"
                name="Citra"
                value="Citra"
                checked={selectedHops.includes("Citra")}
                onChange={handleHopChange}
              />
              Citra
            </label>
            {/* Add more checkboxes for each hop here */}
          </div>
          <div name="abv slider">
            <div className="flex flex-col text-left border-2 border-black">
              <h2 className="font-bold text-2xl">ABV</h2>
              <div>
                <label htmlFor="my-range">Choose a value:</label>
                <input
                  type="range"
                  id="my-range"
                  name="my-range"
                  min="3"
                  max="15"
                  step="0.1"
                  value={abv}
                  onChange={handleAbvChange}
                />
                <div>Selected ABV: {abv}%</div>
              </div>
            </div>
          </div>

          <div name="IBU slider">
            <div className="flex flex-col text-left border-2 border-black">
              <h2 className="font-bold text-2xl">IBU</h2>
              <div>
                <label htmlFor="my-range">Choose a value:</label>
                <input
                  type="range"
                  id="my-range"
                  name="my-range"
                  min="0"
                  max="70" //68 is highest in datbase
                  step="1"
                  value={ibu}
                  onChange={handleIbuChange}
                />
                <div>Selected IBU: {ibu}</div>
              </div>
            </div>
          </div>

          <div name="categ">
            <select name="catagories">
              <option value="Ale">Ale</option>
              <option value="IPA">IPA</option>
              <option value="Lager">Lager</option>
              <option value="Porter">Porter</option>
              <option value="Sour">Sour</option>
              <option value="Stout">Stout</option>
            </select>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center">
          {beers.map((beer) => (
            <BeerCard key={beer.id} beer={beer} />
          ))}
        </div>
      </div>

      <div>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <FaChevronLeft />
        </button>
        <span>{currentPage}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={beers.length < beersPerPage}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default BeerSQL;
