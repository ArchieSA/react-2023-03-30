import { Button } from "@/components/Button/Button";
import React, { useState } from "react";
<<<<<<< HEAD

import ThumbDown from "./images/thumb-down.svg";
=======
>>>>>>> 1a863a50247fe3a8c55b1cd3bdda01782ebc038b

import styles from "./styles.module.scss";
import { Ingredients } from "@/components/Ingredients/Ingredients";
import { useAmount } from "@/hooks/useAmount";

const minState = 0;
const maxState = 5;

export const Dish = ({ dish }) => {
<<<<<<< HEAD
  const [state, setState] = useState(0);
=======
  const { amount, increment, decrement } = useAmount();
>>>>>>> 1a863a50247fe3a8c55b1cd3bdda01782ebc038b

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
