import { Button } from "@/components/Button/Button";
import { Menu } from "../Menu/menu";
import { Reviews } from "../Reviews/reviews";
import { NewReviewForm } from "../NewReviewForm/NewReviewForm";
import classNames from "classnames";
import React from "react";

import styles from "./styles.module.scss"


export const Restaurant = ({ restaurant }) => {
  if (!restaurant) {
    return null;
  }

  const { name, menu, reviews } = restaurant;
   
  return (
    <div className={classNames(styles.root)}>
      <h2
        className={classNames(styles.title)}
      >{name}</h2>
      <Menu menu={menu}/>
      <Reviews reviews={reviews} />
      <NewReviewForm/>
    </div>
  );
};
