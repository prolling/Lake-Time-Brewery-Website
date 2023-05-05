// BeerCard.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";
import BeerDetails from "./BeerDetails";

function BeerCard({ beer: initialBeer, onRatingUpdate }) {
  const [showDetails, setShowDetails] = useState(false);
  const [beer, setBeer] = useState(initialBeer);

  const handleCloseDetails = async () => {
    setShowDetails(false);

    // Call onRatingUpdate to refetch the beer list
    onRatingUpdate();
  };

  {
    showDetails && (
      <BeerDetails
        beer={beer}
        onClose={() => setShowDetails(false)}
        onRatingUpdate={onRatingUpdate}
      />
    );
  }

  return (
    <div className="relative p-4 text-center flex-shrink-0">
      <img
        src={beer.img}
        alt={beer.name}
        className="h-48 w-52 object-cover cursor-pointer rounded-md"
        onClick={() => setShowDetails(true)}
      />
      {showDetails && (
        <BeerDetails
          beer={beer}
          onClose={handleCloseDetails}
          onRatingUpdate={onRatingUpdate}
        />
      )}
    </div>
  );
}

export default BeerCard;
