import React from "react";
import { Dish } from "@/components/Dish/Dish";


export const Menu = ({menu}) => {
  return (
    <div>
      <h4>Menu</h4>
      {
        menu.map(dish => (
          <Dish key={dish.id} name={dish.name} price={dish.price} />
        ))
      }
      
    </div>
  )
}
