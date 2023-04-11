import { Button } from "@/components/Button/Button";
import { Menu } from "@/components/Menu/Menu";
import { Reviews } from "@/components/Reviews/Reviews";
import React from "react";

export const Restaurant = ({ restaurant }) => {
  if (!restaurant) {
    return null;
  }

  const { name, menu, reviews } = restaurant;

  return (
    <div>
      <h2>{name}</h2>
      <Menu menu={menu} />
      <Reviews reviews={reviews} />
    </div>
  );
};
