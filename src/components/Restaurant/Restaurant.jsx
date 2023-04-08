import React from "react";
import {Menu} from "../Menu/Menu";
import styles from './Restaurant.module.css'
import {Reviews} from "../Reviews/Reviews";

export const Restaurant = ({ restaurant }) => {
  if (!restaurant) {
    return null;
  }

  const { name, menu, reviews } = restaurant;

  return (
    <div className={styles.card}>
        <h1 className={styles.name}>{name}</h1>
        <hr className={styles.hr}/>
        <Menu menu={menu}/>
        <hr className={styles.hr}/>
        <Reviews reviews={reviews}/>
    </div>
  );
};
