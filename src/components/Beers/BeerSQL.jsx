import React, { useState, useEffect } from "react";

function BeerSQL() {
  const [beers, setBeers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3010/beers")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setBeers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("There was a problem fetching the data.");
        setLoading(false);
      });
  }, []);

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
      <h1 className="font-bold text-7xl">List of Beers</h1>
      <ul>
        {beers.map((beer) => (
          <li key={beer.id}>{beer.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default BeerSQL;
