import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = ({ onRatingSelect }) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const handleRating = (ratingValue) => {
    setRating(ratingValue);
    onRatingSelect(ratingValue);
  };

  return (
    <div>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;

        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => handleRating(ratingValue)}
              style={{ display: "none" }}
            />
            <FaStar
              size={30}
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
              style={{ cursor: "pointer" }}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
