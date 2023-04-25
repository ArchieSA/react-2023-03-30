import React from "react";
import { ReviewContainer } from "@/containers/Review/Review";

export const Reviews = ({ reviewIds }) => {
  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {reviewIds.map((reviewId) => (
          <li key={reviewId}>
            <ReviewContainer reviewId={reviewId} />
          </li>
        ))}
      </ul>
    </div>
  );
};
