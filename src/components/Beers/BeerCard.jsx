// BeerCard.js
import React, { useState } from "react";
import StarRating from "./StarRating";

function BeerCard({ beer }) {
  const [showDetails, setShowDetails] = useState(false);
  const [showAddRating, setShowAddRating] = useState(false);
  const [rating, setRating] = useState(beer.rating);

  const handleAddRating = () => {
    setShowAddRating(true);
  };

  const handleRate = (value) => {
    // Update the rating in the backend
    // For now, we will simply update the rating state
    setRating(value);
    setShowAddRating(false);
  };

  return (
    <div className="relative bg-gray-200 p-4 text-center cursor-pointer">
      <div onClick={() => setShowDetails(!showDetails)}>
        <img
          src={beer.img}
          alt={beer.name}
          className="w-full h-48 object-cover"
        />
        <h2 className="font-semibold text-xl mt-4">{beer.name}</h2>
      </div>
      {showDetails && (
        <div className="absolute inset-0 bg-white p-4 z-10">
          {/* ... */}
          <div className="flex items-center justify-between mt-4">
            <div>
              <StarRating rating={rating} />
              {showAddRating ? (
                <StarRating onRate={handleRate} />
              ) : (
                <button
                  className="text-blue-600 underline"
                  onClick={handleAddRating}
                >
                  Add Rating
                </button>
              )}
            </div>
            <button
              className="text-red-600"
              onClick={() => setShowDetails(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BeerCard;
