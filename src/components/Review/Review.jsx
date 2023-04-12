import React from "react";
import { Raiting } from "../Raiting/Raiting";

export const Review = ({ review }) => {
  if (!review) {
    return null;
  }

  const { user, text, rating } = review;

  return (
    <div>
      <p>{user}</p>
      <Raiting maxRating={5} value={rating}/>
      <p>{text}</p>
    </div>
  );
};
