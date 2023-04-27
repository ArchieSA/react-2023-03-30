import { Button } from "@/components/Button/Button";
import React, { useState } from "react";

import styles from "./styles.module.scss";
import { Ingredients } from "@/components/Ingredients/Ingredients";

export const Dish = ({ dish, amount, increment, decrement }) => {
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
    </div>
  );
};
