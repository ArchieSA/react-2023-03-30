import { Button } from "@/components/Button/Button";
import React, { useReducer } from "react";

import ThumbDown from "./images/thumb-down.svg";

import styles from "./styles.module.scss";

const reducer = (state, action) => {
  switch (action?.type) {
    case "inc":
      if (state < 5) {
        state = state + 1;
      };
    return state;
    
    case "dec":
      if (state > 0) {
        state = state - 1;
      };
    return state;

    default:
      return state;
  }
};

export const Dish = ({ dish }) => {
  const [state, dispatch] = useReducer(reducer, 0);

  if (!dish) {
    return null;
  }

  const { name, ingredients } = dish;

  return (
    <div>
      <span>{name}</span>
      <Button className={styles.decrementAction} onClick={() => dispatch({type: "dec"})} type="secondary">
        -
      </Button>
      {state}
      <Button className={styles.incrementAction} onClick={() => dispatch({type: "inc"})} type="primary">
        +
      </Button>
    </div>
  );
};
