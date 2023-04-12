import { Button } from "@/components/Button/Button";
import React from "react";

import ThumbDown from "./images/thumb-down.svg";

import styles from "./styles.module.scss";

export const Dish = ({ dish }) => {
  if (!dish) {
    return null;
  }

  const { name, ingredients } = dish;

  return (
    <div>
      <span>{name}</span>
      <Button className={styles.decrementAction} type="secondary">
        {/* <img src="/images/thumb-down.svg" alt="" /> */}
        {/* <ThumbDown /> */}
        -
      </Button>
      <Button className={styles.incrementAction} type="primary">
        +
      </Button>
    </div>
  );
};
