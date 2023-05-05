import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

function StarRating({ beerId, rating, onUpdate }) {
  const [newRating, setNewRating] = useState(rating);
  const [showDelete, setShowDelete] = useState(false);
  const [showSubmit, setShowSubmit] = useState(false);
  const [showAddRating, setShowAddRating] = useState(true);

  // async to add a beer rating and update it in the database
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

  // async to delete a beer rating and update it in the database
  async function deleteLastRating() {
    try {
      const response = await fetch(
        `http://localhost:3010/beers/${beerId}/last_rating`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      console.log("Rating deleted successfully");
      setNewRating(0);
      setShowAddRating(false);
      setShowSubmit(false);
      setShowDelete(false);

      return await response.json();
    } catch (err) {
      console.error(err);
    }
  }

  StarRating.updateBeerRating = updateBeerRating;

  const handleStarClick = (index) => {
    if (showSubmit) {
      setNewRating(index + 1);
    }
  };

  const handleAddRatingClick = () => {
    console.log("beerId:", beerId);
    setNewRating(0);
    setShowAddRating(false);
    setShowDelete(false);
    setShowSubmit(true);
  };

  const handleSubmitRatingClick = async () => {
    // Update the rating in the database
    const updatedBeer = await updateBeerRating(beerId, newRating);

    if (onUpdate && updatedBeer) {
      onUpdate(updatedBeer);
    }
    setShowAddRating(false);
    setShowSubmit(false);
    setShowDelete(true);
  };

  const handleDeleteRatingClick = async () => {
    // Delete the rating from the database
    const updatedBeer = await deleteLastRating(beerId);

    if (onUpdate && updatedBeer) {
      onUpdate(updatedBeer);
    }
    setShowDelete(false);
    setShowSubmit(false);
    setShowAddRating(false);
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
      {showAddRating ? (
        <button
          className="ml-2 text-blue-600 hover:text-blue-800 focus:outline-none"
          onClick={handleAddRatingClick}
        >
          Add rating
        </button>
      ) : (
        <>
          {showDelete ? (
            <button
              className="ml-2 text-red-600 hover:text-red-800 focus:outline-none"
              onClick={handleDeleteRatingClick}
            >
              Delete rating
            </button>
          ) : null}
          {showSubmit ? (
            <button
              className="ml-2 text-green-600 hover:text-green-800 focus:outline-none"
              onClick={handleSubmitRatingClick}
            >
              Submit rating
            </button>
          ) : null}
        </>
      )}
    </div>
  );
}

export default StarRating;
