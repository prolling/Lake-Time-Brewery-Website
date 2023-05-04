import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

function StarRating({ beerId, rating, onUpdate }) {
  const [newRating, setNewRating] = useState(rating);
  const [editMode, setEditMode] = useState(false);

  async function updateBeerRating(beerId, newRating) {
    console.log("beerId:", beerId);
    try {
      const response = await fetch(
        `http://localhost:3010/beers/${beerId}/rating`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            rating: newRating,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Return the updated beer object
      return await response.json();
    } catch (err) {
      console.error(err);
    }
  }

  StarRating.updateBeerRating = updateBeerRating;

  const handleStarClick = (index) => {
    if (editMode) {
      setNewRating(index + 1);
    }
  };

  const handleAddRatingClick = () => {
    console.log("beerId:", beerId);
    setNewRating(0);
    setEditMode(true);
  };

  const handleSubmitRatingClick = async () => {
    // Update the rating in the database
    const updatedBeer = await updateBeerRating(beerId, newRating);

    if (onUpdate && updatedBeer) {
      onUpdate(updatedBeer);
    }
    setEditMode(false);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((_, index) => (
          <span
            key={index}
            className="cursor-pointer"
            onClick={() => handleStarClick(index)}
          >
            {index < newRating ? (
              <AiFillStar className="text-yellow-500" />
            ) : (
              <AiOutlineStar className="text-gray-300" />
            )}
          </span>
        ))}
      </div>
      {!editMode ? (
        <button
          className="ml-2 text-blue-600 hover:text-blue-800 focus:outline-none"
          onClick={handleAddRatingClick}
        >
          Add rating
        </button>
      ) : (
        <button
          className="ml-2 text-green-600 hover:text-green-800 focus:outline-none"
          onClick={handleSubmitRatingClick}
        >
          Submit rating
        </button>
      )}
    </div>
  );
}

export default StarRating;
