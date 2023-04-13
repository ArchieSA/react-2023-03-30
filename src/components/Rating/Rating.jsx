import React from 'react';
import classNames from "classnames";

import styles from "./styles.module.sass";

const ratingStyles = {
  star: styles.star,
  nostar: styles.nostar,
};

export const Rating = ({ratingCurrent, ratingMax}) => {

  let arr = [];
  for (let index = 0; index < ratingMax; index++) {
    if (index < ratingCurrent) {
      arr[index] = 'star';
    } else {
      arr[index] = 'nostar';
    }
    
  }

  return (
      <ul className={classNames(styles.rating)}>
        {arr.map((value, index) => <li key={index} className={classNames(ratingStyles[value])}></li>)}
      </ul>
  )
}
  