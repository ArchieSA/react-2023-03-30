<<<<<<< HEAD
import React from "react";
import { useSelector } from "react-redux";
import { Cart } from "@/components/Cart/Cart";
import { selectCartModule } from "@/store/ui/cart/selectors";

export const CartContainer = () => {
 
  const cartState = useSelector(selectCartModule);

  return <Cart cartState={cartState} />;
=======
import { Cart } from "@/components/Cart/Cart";
import { selectCartModule } from "@/store/ui/cart/selectors";
import React from "react";
import { useSelector } from "react-redux";

export const CartContainer = () => {
  const cart = useSelector(selectCartModule);

  if (!Object.keys(cart || {}).length) {
    return null;
  }

  return <Cart cart={cart} />;
>>>>>>> 24831b1ccea2d39ee5c37958571f20f48499064f
};
