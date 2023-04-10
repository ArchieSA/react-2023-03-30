import React from "react";
import { Dish } from "../Dish/Dish";

export const Menu = ({ menu }) => {
  if (!menu?.length) {
    return null;
  }

  return (
    <>
      <h2>Menu:</h2>
      {menu.map((dish) => (
        <Dish key={dish.id} dish={dish} />
      ))}
    </>
  );
};
