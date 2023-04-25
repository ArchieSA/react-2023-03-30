import { Dish } from "@/components/Dish/Dish";
import { selectDishById } from "@/store/entities/dish/selectors";
import { decrementDish, incrementDish } from "@/store/ui/cart/actions";
import { selectDishAmount } from "@/store/ui/cart/selectors";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const DishContainer = ({ dishId }) => {
  const dish = useSelector((state) => selectDishById(state, { dishId }));
  const amount = useSelector((state) => selectDishAmount(state, { dishId }));
  const dispatch = useDispatch();
  const increment = () => dispatch(incrementDish(dishId));
  const decrement = () => dispatch(decrementDish(dishId));

  return (
    <Dish
      dish={dish}
      amount={amount}
      increment={increment}
      decrement={decrement}
    />
  );
};
