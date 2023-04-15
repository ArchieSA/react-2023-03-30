import React from "react";
import { Button } from "@/components/Button/Button";
import { Rating } from "@/components/Rating/Rating";

export const Review = ({ review }) => {
  if (!review) {
    return null;
  }

  const { user, text, rating } = review;

  return (
    <div>
      <p>{user}</p>
      <Rating value={rating}></Rating>
      <p>{text}</p>
   
    </div>
  );
};
