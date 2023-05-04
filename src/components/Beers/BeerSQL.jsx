import React, { useState, useEffect } from "react";
import BeerCard from "./BeerCard";

function BeerSQL() {
  const [beers, setBeers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [beersPerPage] = useState(10);
  const [inputValue, setInputValue] = useState("");
  const [selectedHops, setSelectedHops] = useState("");

  useEffect(() => {
    const fetchBeers = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `http://localhost:3010/beers?search=${search}&hops=${selectedHops}&page=${currentPage}&limit=${beersPerPage}`
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
  }, [search, selectedHops, currentPage, beersPerPage]);

  const handleSearch = (e) => {
    setInputValue(e.target.value);
  };

  const submitSearch = () => {
    setSearch(inputValue);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

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
    return <div className="p-24">No results.</div>;
  }

  return (
    <div className="p-48 text-center">
      <input
        type="text"
        placeholder="Search beers..."
        value={inputValue}
        onChange={handleSearch}
      />
      <button onClick={submitSearch}>Search</button>
      <div>
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
      </div>

      <h1 className="font-bold text-7xl">Our Beers</h1>

      <div className="flex flex-wrap justify-center items-center">
        {beers.map((beer) => (
          <BeerCard key={beer.id} beer={beer} />
        ))}
      </div>

      <div>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={beers.length < beersPerPage}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default BeerSQL;
