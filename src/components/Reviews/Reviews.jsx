import React from "react";
import { Review } from "../Review/Review";

export const Reviews = ({ reviews }) => {
  if (!reviews || !reviews.length) {
    return null;
  }  

  return (
    <div>
      <b>Reviews:</b>
      {reviews.map((review) => <Review key={review.id} review={review} />)}
    </div>
  );
}
