import React from "react";
import Dish from "./Dish/Dish";

export default function Menu({ menu }) {
  if (!menu?.length) {
    return null;
  }

  return (
    <div>
      <h4>Menu</h4>
      {menu.map((dish) => (
        <Dish dish={dish} key={dish.id} />
      ))}
    </div>
  );
}
