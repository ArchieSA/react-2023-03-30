import { Button } from "@/components/Button/Button";
import React, { useState } from 'react';

import ThumbDown from "./images/thumb-down.svg";

import styles from "./styles.module.scss";

const MAX_DISH_COUNT = 5;

export const Dish = ({ dish }) => {
  const [count, setCount] = useState(0);

  if (!dish) {
    return null;
  }

  const { name, ingredients } = dish;

  return (
    <div>
      <span>{name}</span>
      <Button
          type="secondary"
          disabled={count <= 0}
          className={styles.decrementAction}
          onClick={() => setCount(count - 1)}
      >
        -
      </Button>
      {count}
      <Button
          type="primary"
          disabled={count >= MAX_DISH_COUNT}
          className={styles.incrementAction}
          onClick={() => setCount(count + 1)}
      >
        +
      </Button>
    </div>
  );
};
