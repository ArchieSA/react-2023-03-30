import React from "react";
import { Rating } from "../Rating/Rating";

export const Review = ({ review }) => {
  if (!review) {
    return null;
  }

  const { user, text, rating } = review;

  return (
    <div>
      <p>{user}</p>
      <Rating maxRating={5} rating={rating} />
      <p>{text}</p>
    </div>
  );
};
