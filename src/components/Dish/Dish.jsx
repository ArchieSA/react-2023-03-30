import { Button } from "@/components/Button/Button";
import React, { useState } from "react";

import styles from "./styles.module.scss";
import { Ingredients } from "@/components/Ingredients/Ingredients";
import { useAmount } from "@/hooks/useAmount";

const minState = 0;
const maxState = 5;

export const Dish = ({ dish }) => {
  const { amount, increment, decrement } = useAmount();

  if (!dish) {
    return null;
  }

  const { name, ingredients } = dish;

  return (
    <div>
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
    </div>
  );
};
