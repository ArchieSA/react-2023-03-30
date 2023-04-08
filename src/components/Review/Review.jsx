import React from "react";
import styles from './Review.module.css'
import ReactStars from "react-rating-stars-component";

export function Review({ review }) {
  const numberOfRatingStars = 5;

  if (!review) {
    return null;
  }

  return (
      <div>
          <h3 className={styles.name}>{review.user}</h3>
          <p>{review.text}</p>
          <ReactStars
              edit={false}
              count={numberOfRatingStars}
              value={review.rating}
              size={24}
              activeColor="#ffd700"
          />
      </div>
  );
}
