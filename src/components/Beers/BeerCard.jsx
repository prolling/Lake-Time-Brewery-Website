// BeerCard.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";
import BeerDetails from "./BeerDetails";

function BeerCard({ beer }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="relative p-4 text-center flex-shrink-0">
      <img
        src={beer.img}
        alt={beer.name}
        className="h-48 w-52 object-cover cursor-pointer rounded-md"
        onClick={() => setShowDetails(true)}
      />
      {showDetails && (
        <BeerDetails beer={beer} onClose={() => setShowDetails(false)} />
      )}
    </div>
  );
}

export default BeerCard;
