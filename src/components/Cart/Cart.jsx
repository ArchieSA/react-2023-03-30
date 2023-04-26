import React from "react";
import { DishContainer } from "@/containers/Dish/Dish";

export const Cart = ({ cartState }) => {
  return (
    <div>
      <h3>Cart</h3>
      <ul>
        {Object.entries(cartState).map(([id]) => (
          <li key={id}>
            <DishContainer dishId={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};
