import React from "react";
import StarRating from "./StarRating";

function BeerDetails({ beer, onClose }) {
  // make it so when you click on the outside of the modal, it closes
  const handleClickOutside = (event) => {
    event.stopPropagation();
    onClose();
  };
  // makes it so it doesn't close when you click on the inside
  const handleClickInside = (event) => {
    event.stopPropagation();
  };

  // helper functions to clean data
  // Function to remove quotes around the description
  const cleanDescription = (description) => {
    return description.replace(/"/g, "");
  };

  // check for empty string or null
  const getValue = (label, value) => {
    if (value === "" || value === null) {
      return null;
    }
    // Round the ABV value to 2 decimal places
    if (label === "ABV") {
      value = parseFloat(value).toFixed(2);
    }
    return (
      <p>
        {label}: {value}
      </p>
    );
  };

  return (
    <div
      className="fixed z-50 inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      onClick={handleClickOutside}
    >
      <div
        className="bg-white p-6 w-full max-w-lg mx-auto rounded-md relative flex flex-col items-center"
        onClick={handleClickInside}
      >
        <button className="absolute top-2 right-2" onClick={onClose}>
          &times;
        </button>
        <img
          src={beer.img}
          alt={beer.name}
          className="h-48 w-auto mx-auto mb-4 rounded-md shadow-lg"
        />
        <h2 className="text-xl font-bold mb-2">{beer.name}</h2>
        <p className="mb-4 text-gray-600">
          {cleanDescription(beer.description)}
        </p>
        <div className="space-y-1">
          {getValue("Type", beer.type)}
          {getValue("ABV", beer.ABV)}
          {getValue("IBU", beer.IBU)}
          {getValue("Hops", beer.hops)}
          {getValue("Malts", beer.malts)}
          <StarRating
            rating={beer.rating}
            onUpdate={(newRating) => {
              // Update the rating in the database here
              console.log("New rating: ", newRating);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default BeerDetails;
