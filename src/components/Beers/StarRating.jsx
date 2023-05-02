// StarRating.js
import React, { useState } from "react";

function StarRating({ rating, onRate }) {
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = (value) => {
    onRate(value);
  };

  const handleMouseEnter = (value) => {
    setHoverRating(value);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((value) => (
        <button
          key={value}
          className={`w-6 h-6 ${
            (hoverRating || rating) >= value
              ? "text-yellow-400"
              : "text-gray-300"
          }`}
          onClick={() => handleClick(value)}
          onMouseEnter={() => handleMouseEnter(value)}
          onMouseLeave={handleMouseLeave}
        >
          ★
        </button>
      ))}
    </div>
  );
}

export default StarRating;
