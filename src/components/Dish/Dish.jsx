import React from "react";
import styles from './Dish.module.css'

export function Dish({ dish }) {
  if (!dish) {
    return null;
  }

  return <div>
    <h3 className={styles?.name}>{dish.name}</h3>
    {
      (dish?.ingredients?.length) ?
          <p>{dish.ingredients.join(', ')}</p> :
          undefined
    }
    <span className={styles?.price}>{dish.price}$</span>
  </div>;
}
