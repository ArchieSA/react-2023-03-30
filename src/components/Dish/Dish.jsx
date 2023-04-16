import { Button } from "@/components/Button/Button";
import React, { useState } from "react";

import ThumbDown from "./images/thumb-down.svg";

import styles from "./styles.module.scss";

const minState = 0;
const maxState = 5;

export const Dish = ({ dish }) => {
  const [number, setNumber] = useState(0);

  if (!dish) {
    return null;
  }

  const { name, ingredients } = dish;

  return (
    <div>
      <span>{name}</span>
      <Button className={styles.decrementAction} type="secondary" onClick={() => number !== 0 ? setNumber(number - 1) : minState}>
        -
      </Button>
      {number}
      <Button className={styles.incrementAction} type="primary" onClick={() => number !== 5 ? setNumber(number + 1) : maxState}>
        +
      </Button>
    </div>
  );
};
