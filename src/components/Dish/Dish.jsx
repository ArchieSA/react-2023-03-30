import { Button } from "@/components/Button/Button";
import React, { useState } from "react";

import styles from "./styles.module.scss";

const MAX_COUNT = 5;

export const Dish = ({ dish }) => {
  const [count, setCount] = useState(0);

  if (!dish) {
    return null;
  }

  const { name } = dish;

  return (
    <div>
      <span>{name}</span>
      <Button
        className={styles.decrementAction}
        onClick={() => {
          count > 0 && setCount(count - 1);
        }}
        type="secondary"
      >
        -
      </Button>
      {count}
      <Button
        className={styles.incrementAction}
        onClick={() => {
          count < MAX_COUNT && setCount(count + 1);
        }}
        type="primary"
      >
        +
      </Button>
    </div>
  );
};
