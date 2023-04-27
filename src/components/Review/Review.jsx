// import { Rating } from "@/components/Rating/Rating";
import React from "react";

export const Review = ({ reviewText, reviewId }) => {
  
  if (!reviewText) {
    return null;
  }

  return (
    <span id={reviewId}>
      <span>{reviewText}</span>
    </span>
  );
};
