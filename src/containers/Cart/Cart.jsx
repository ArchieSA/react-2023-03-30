import { Cart } from "@/components/Cart/Cart";
import { selectCartModule } from "@/store/ui/cart/selectors";
import React from "react";
import { useSelector } from "react-redux";

export const CartContainer = () => {
  const cart = useSelector(selectCartModule);

  // reduce проверяет, есть ли в заказе хоть 1 блюдо по кол-ву (*если убрать в корзине до 0).
  if (
    !Object.keys(cart || {}).length ||
    Object.values(cart).reduce((acc, n) => acc + n, 0) === 0
  ) {
    return <div>No dishes in the cart.</div>;
  }

  return <Cart cart={cart} />;
};
