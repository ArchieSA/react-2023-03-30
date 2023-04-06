import { Button } from "@/components/Button/Button";
import React from "react";
import Menu from "../Menu/Menu";
import Reviews from "../Reviews/Reviews";

export const Restaurant = ({ restaurant }) => {
  if (!restaurant) {
    return null;
  }

  const { name, menu, reviews } = restaurant;

  return (
    <div className="restaurant">
      <h3>{name}</h3>
      <Menu menu={menu} />
      <Reviews reviews={reviews} />
    </div>
  );
};
