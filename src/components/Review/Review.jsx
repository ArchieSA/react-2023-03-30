import React from "react";
import { Rating } from "@/components/Rating/Rating";

export const Review = ({ review }) => {
  if (!review) {
    return null;
  }

  const { user, text, rating, maxRating } = review;

  return (
    <div>
      <p>{user}</p>
      <Rating value={rating} maxRating={maxRating}></Rating>
      <p>{text}</p>
    </div>
  );
};
