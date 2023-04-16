import { Dish } from "@/components/Dish/dish";
import classNames from "classnames";
import React from "react";

import styles from './styles.module.scss'


export const Menu = ({ menu }) => {
  if (!menu || !menu.length) {
    return null;
  }
 
  return (
    <ul 
      className={classNames(styles.root)}>
      <h3>Menu</h3>
       {menu.map( dish => (
        <li key={dish.id}>
          <Dish key={dish.id} dish = {dish} />
        </li>
      ))}
    </ul>
  )
}