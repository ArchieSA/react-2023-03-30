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
      <Rating rating={rating}/>      
      <p>{text}</p>
    </div>
  );
};
