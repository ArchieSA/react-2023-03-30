import { Dish } from "@/components/Dish/dish";
import React from "react";

export const Menu = ({ menu }) => {
  if (!menu || !menu.length) {
    return null;
  }
 
  return (
    <ul >
      <span>Menu</span>
      {menu.map( dish => (
        <li key={dish.id}>
          <Dish key={dish.id} dish = {dish} />
        </li>
      ))}
    </ul>
  )
}