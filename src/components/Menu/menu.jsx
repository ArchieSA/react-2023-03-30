import { Dish } from "@/components/Dish/dish";
import React from "react";

export const Menu = ({ menu }) => {
  if (!menu) {
    return null;
  }

  return (
    <div >
      <span>Menu</span>
      {menu.map( dish => (
        <Dish key={dish.id} dish = {dish} />
      ))}
    </div>
  )
}