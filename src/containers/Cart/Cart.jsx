import { useSelector } from "react-redux";
import React from "react";
import { selectCartModule } from "@/store/ui/cart/selectors";
import { Cart } from "@/components/Cart/Cart";

export const CartContainer = () => {
  const cartState = useSelector(selectCartModule);

  if (!cartState) {
    return null;
  }

  return <Cart cartState={cartState} />;
};
