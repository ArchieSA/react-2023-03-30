import { Cart } from "@/components/Cart/Cart";
import { selectCartModule } from "@/store/ui/cart/selectors";
import React from "react";
import { useSelector } from "react-redux";

export const CartContainer = () => {
  const cart = useSelector(selectCartModule);

  if (!Object.keys(cart || {}).length) {
    return (
      <div>
      <h3>Cart</h3>
      <p>Блюдо не выбрано</p>
      </div>
    );
  }

  return <Cart cart={cart} />;
};
