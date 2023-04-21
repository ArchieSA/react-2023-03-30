import { Button } from "@/components/Button/Button";
import React, { useState } from "react";
<<<<<<< HEAD

import ThumbDown from "./images/thumb-down.svg";
=======
>>>>>>> 1a863a50247fe3a8c55b1cd3bdda01782ebc038b

import styles from "./styles.module.scss";
import { Ingredients } from "@/components/Ingredients/Ingredients";
import { useDispatch, useSelector } from "@/CustomStore";

const minState = 0;
const maxState = 5;

export const Dish = ({ dish }) => {
<<<<<<< HEAD
<<<<<<< HEAD
  const [state, setState] = useState(0);
=======
  const { amount, increment, decrement } = useAmount();
>>>>>>> 1a863a50247fe3a8c55b1cd3bdda01782ebc038b
=======
  const amount = useSelector((state) => state[dish.name] || 0);
  const dispatch = useDispatch();
  const increment = () => dispatch({ type: "increment", payload: dish.name });
  const decrement = () => dispatch({ type: "decrement", payload: dish.name });
>>>>>>> 29a6de83d87f50a480d5fe9e00ab84678c773a86

  if (!dish) {
    return null;
  }

  const { name, ingredients } = dish;

  return (
    <div>
<<<<<<< HEAD
      <span>{name}</span>
      <Button className={styles.decrementAction} type="secondary" onClick={() => state !== 0 ? setState(state - 1) : minState}>
        -
      </Button>
      {state}
      <Button className={styles.incrementAction} type="primary" onClick={() => state !== 5 ? setState(state + 1) : maxState}>
        +
      </Button>
=======
      <div className={styles.mainInfo}>
        <span className={styles.title}>{name}</span>
        <Button
          className={styles.decrementAction}
          type="secondary"
          disabled={amount === 0}
          onClick={decrement}
        >
          -
        </Button>
        {amount}
        <Button
          className={styles.incrementAction}
          type="primary"
          disabled={amount === 5}
          onClick={increment}
        >
          +
        </Button>
      </div>
      {amount > 0 && (
        <Ingredients ingredients={ingredients} className={styles.ingredients} />
      )}
>>>>>>> 1a863a50247fe3a8c55b1cd3bdda01782ebc038b
    </div>
  );
};
