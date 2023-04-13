import React from "react";
import { Rating } from "@/components/Rating/Rating";

export const Review = ({ review }) => {
  if (!review) {
    return null;
  }

  const { user, text, rating } = review;

  return (
    <div>
      <p>{user}</p>
      <Rating ratingCurrent={rating} ratingMax={5} />
      <p>{text}</p>
      
    </div>
  );
};
