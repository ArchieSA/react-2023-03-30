import React from "react";
import Review from "./Review/Review";

export default function Reviews({ reviews }) {
  if (!reviews?.length) {
    return null;
  }

  return (
    <div>
      <h4>Reviews</h4>
      {reviews.map((review) => (
        <Review review={review} key={review.id} />
      ))}
    </div>
  );
}
