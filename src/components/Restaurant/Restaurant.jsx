import React from "react";
import { Menu } from "../Menu/Menu";
import { Reviews } from "../Reviews/Reviews";

export const Restaurant = ({ restaurant }) => {
  if (!restaurant) {
    return null;
  }

  const { name, menu, reviews } = restaurant;

  return (
    <div> 
      <b>Restaurant: {name}</b>
      <Menu menu={menu} />
      <Reviews reviews={reviews} />
    </div>
  );
};
