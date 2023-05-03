import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

function StarRating({ rating, onUpdate }) {
  const [newRating, setNewRating] = useState(rating);
  const [editMode, setEditMode] = useState(false);

  const handleStarClick = (index) => {
    if (editMode) {
      setNewRating(index + 1);
      if (onUpdate) {
        onUpdate(index + 1);
      }
      setEditMode(false);
    }
  };

  const handleAddRatingClick = () => {
    setNewRating(0);
    setEditMode(true);
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
      {!editMode && (
        <button
          className="ml-2 text-blue-600 hover:text-blue-800 focus:outline-none"
          onClick={handleAddRatingClick}
        >
          Add rating
        </button>
      )}
    </div>
  );
}

export default StarRating;

