import { Button } from "@/components/Button/Button";
import React, { useState } from "react";

import ThumbDown from "./images/thumb-down.svg";

import styles from "./styles.module.scss";

export const Dish = ({ dish }) => {
  const [count, setCount] = useState(0); 

  if (!dish) {
      return null;
    }

  let { name, ingredients } = dish;

  return (
    <div>
      <span>{name}</span>
      <Button onClick={ () => {if (count > 0)setCount(count - 1)}} className={styles.decrementAction} type="secondary">
        -
      </Button>
      {count}     
      <Button onClick={ () => {if (count < 5)setCount(count + 1)}} className={styles.incrementAction} type="primary">
        +
      </Button>
    </div>
  );
};
