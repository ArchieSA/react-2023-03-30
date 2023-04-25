import { useSelector } from "react-redux";
import React from "react";
import { selectCartModule } from "@/store/ui/cart/selectors";
import { DishContainer } from "@/containers/Dish/Dish";

export const Cart = () => {
  const cartState = useSelector(selectCartModule);

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
