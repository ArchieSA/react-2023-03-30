import { Review } from "../Review/review";
import React from "react";

export const Reviews = ({ reviews }) => {
  if(!reviews || !reviews.length) {
    return null;
  }

  return (
    <div>
      <span>Reviews</span>
      {reviews.map( review => (
        <Review key={review.id} review={review}/>
      ))}
    </div>
  )
}