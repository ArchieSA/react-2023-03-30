import { Button } from "@/components/Button/Button";
import React from "react";
import { Menu } from "../Menu/Menu";
import { Reviews } from "../Reviews/Reviews";

export const Restaurant = ({ restaurant }) => {
  if (!restaurant) {
    return null;
  }

  const { name } = restaurant;
  const { menu } = restaurant;
  const { reviews } = restaurant;

  return (
    <div>
        <h2>{name}</h2>
        <Menu menu={menu} />
        <Reviews reviews={reviews} />
    </div>
  );
};
