import React from "react";

export const Review = ({ review }) => {
  return (
    <>
      <h3>User: {review.user}</h3>
      <h3>Rating: {review.rating}</h3>
      <span>{review.text}</span>
    </>
  );
};
