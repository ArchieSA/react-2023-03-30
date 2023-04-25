import { Rating } from "@/components/Rating/Rating";
import React from "react";

export const Review = ({ review }) => {
  const { user, text, rating } = review;

  return (
    <div>
      <p>{user}</p>
      <Rating value={rating} />
      <p>{text}</p>
    </div>
  );
};
