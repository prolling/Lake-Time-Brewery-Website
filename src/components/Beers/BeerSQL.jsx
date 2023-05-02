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

  useEffect(() => {
    const fetchBeers = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `http://localhost:3010/beers?search=${search}&sortBy=rating&order=DESC&page=${currentPage}&limit=${beersPerPage}`
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
  }, [search, currentPage, beersPerPage]);

  const handleSearch = (e) => {
    setInputValue(e.target.value);
  };

  const submitSearch = () => {
    setSearch(inputValue);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // Your existing render code here
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

      <h1 className="font-bold text-7xl">List of Beers</h1>

      <div className="flex flex-wrap justify-center items-center">
        {beers.map((beer) => (
          <BeerCard key={beer.id} beer={beer} />
          // <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 group">
          //   <div key={beer.id}>{beer.name}</div>
          //   <img src={beer.img} alt={beer.name}></img>
          // </div>
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
