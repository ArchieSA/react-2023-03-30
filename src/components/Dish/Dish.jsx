import { Button } from "@/components/Button/Button";
import React, { useState } from "react";

import ThumbDown from "./images/thumb-down.svg";

import styles from "./styles.module.scss";

const minState = 0;
const maxState = 5;

export const Dish = ({ dish }) => {
  const [state, setState] = useState(0);

  if (!dish) {
    return null;
  }

  const { name, ingredients } = dish;

  return (
    <div>
      <span>{name}</span>
      <Button className={styles.decrementAction} type="secondary" onClick={() => state !== 0 ? setState(state - 1) : minState}>
        -
      </Button>
      {state}
      <Button className={styles.incrementAction} type="primary" onClick={() => state !== 5 ? setState(state + 1) : maxState}>
        +
      </Button>
    </div>
  );
};
