import React from "react";
import { Dish } from "../Dish/Dish";

export const Menu = ({ menu }) => {
  return (
    <>
      {menu.map((dish) => (
        <Dish key={dish.id} dish={dish} />
      ))}
    </>
  );
};
