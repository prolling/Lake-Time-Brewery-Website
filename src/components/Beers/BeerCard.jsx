import React, { useState } from "react";
import BeerDetails from "./BeerDetails";

function BeerCard({ beer, onRatingUpdate }) {
  const [showDetails, setShowDetails] = useState(false);

  const handleCloseDetails = async () => {
    setShowDetails(false);

    // Call onRatingUpdate to refetch the beer list
    onRatingUpdate();
  };

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
