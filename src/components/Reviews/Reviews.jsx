import { ReviewContainer } from "@/containers/Review/Review";
import React from "react";

export const Reviews = ({ reviews }) => {
  if (!reviews?.length) {
    return null;
  }

  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {reviews.map((reviewId) => (
          <li key={reviewId}>
            <ReviewContainer reviewId={reviewId}/>
          </li>
        ))}
      </ul>
    </div>
  );
};
