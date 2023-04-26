import { Cart } from "@/components/Cart/Cart";
import { selectCartModule } from "@/store/ui/cart/selectors";
import React from "react";
import { useSelector } from "react-redux";

export const CartContainer = () => {
  const cartState = useSelector(selectCartModule);

  if (!cartState) {
    return null;
  }

  return <Cart cartState={cartState} />;
};
