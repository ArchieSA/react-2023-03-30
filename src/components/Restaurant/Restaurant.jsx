import React from "react";
import { Reviews } from "../Reviews/Reviews";
import { Menu } from "../Menu/Menu";

export const Restaurant = ({ restaurant }) => {
  if (!restaurant) {
    return null;
  }

  const { name, menu, reviews } = restaurant;

  return (
    <>
      <h1>Restaurant: {name}</h1>
      <h2>Menu:</h2>
      <Menu menu={menu} />
      <h2>Reviews:</h2>
      <Reviews reviews={reviews} />
    </>
  );
};
