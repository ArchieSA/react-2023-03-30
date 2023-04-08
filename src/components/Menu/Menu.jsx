import React from "react";
import styles from './Menu.module.css'
import {Dish} from "../Dish/Dish";

export function Menu({ menu }) {
  if (!menu?.length) {
    return null;
  }

  return <>
    <h2 className={styles.title}>Menu</h2>
    <div className={styles.menu}>
      {menu.map((dish) => <Dish key={dish.id} dish={dish}/>)}
    </div>
  </>;
}
