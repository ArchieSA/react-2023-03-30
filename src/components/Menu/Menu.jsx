import React from "react";
import { Dish } from "../Dish/Dish";

export const Menu = ({ menu }) => {
  if (!menu || !menu.length) {
    return null;
  }  

  return (
    <div>
      <b>Menu:</b>
      <ol>{menu.map((dish) => <li><Dish key={dish.id} dish={dish} /></li>)}</ol>
    </div>
  );
}
