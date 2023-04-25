import { Dish } from "@/components/Dish/Dish";
import React from "react";

import styles from "./styles.module.scss";
import { DishContainer } from "@/containers/Dish/Dish";

export const Menu = ({ menu }) => {
  return (
    <div className={styles.root}>
      <h3>Menu</h3>
      <ul className={styles.dishList}>
        {menu.map((dishId) => (
          <li key={dishId} className={styles.dish}>
            <DishContainer dishId={dishId} />
          </li>
        ))}
      </ul>
    </div>
  );
};
