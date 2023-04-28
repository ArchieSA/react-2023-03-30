import React from "react";
import { DishContainer } from "@/containers/Dish/Dish";

<<<<<<< HEAD
export const Cart = (cartState) => { 

=======
export const Cart = ({ cart }) => {
>>>>>>> 24831b1ccea2d39ee5c37958571f20f48499064f
  return (
    <div>
      <h3>Cart</h3>
      <ul>
        {Object.entries(cart).map(([id]) => (
          <li key={id}>
            <DishContainer dishId={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};
