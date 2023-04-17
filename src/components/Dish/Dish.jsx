import { Button } from "@/components/Button/Button";
import React, {useState} from "react";

import ThumbDown from "./images/thumb-down.svg";

import styles from "./styles.module.scss";

export const Dish = ({ dish }) => {
  const [dishCount, setDishCount] = useState(0);

  if (!dish) {
    return null;
  }

  const { name, ingredients } = dish;

  const increaseCount = () => {
    setDishCount(dishCount >= 5 ? 5 : dishCount + 1)
  }

  const decreaseCount = () => {
    setDishCount(dishCount <= 0 ? 0 : dishCount - 1)
  }


  return (
    <div>
      <span>{name}</span>
      <Button className={styles.decrementAction} onClick={decreaseCount} type="secondary">
        -
      </Button>
      {dishCount}
      <Button className={styles.incrementAction} onClick={increaseCount} type="primary">
        +
      </Button>
    </div>
  );
};
