import React from "react";
import { useSelector } from "react-redux";
import { Cart } from "@/components/Cart/Cart";
import { selectCartModule } from "@/store/ui/cart/selectors";

export const CartContainer = () => {
 
  const cartState = useSelector(selectCartModule);

  return <Cart cartState={cartState} />;
};
