import React from "react";
import { Review } from "../Review/Review";

export const Reviews = ({ reviews }) => {
  return (
    <>
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </>
  );
};
