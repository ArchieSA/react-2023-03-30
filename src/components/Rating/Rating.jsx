import React from 'react';
import classNames from "classnames";
import Image from 'next/image';

import styles from "./styles.module.sass";

const ratingStyles = {
  star: styles.star,
  nostar: styles.nostar,
};

export const Rating = ({ratingCurrent, ratingMax}) => {

  let arr = [];
  for (let index = 0; index < ratingMax; index++) {
    if (index < ratingCurrent) {
      arr[index] = 1;
    } else {
      arr[index] = 0 ;
    }
    
  }

  return (
      <ul className={classNames(styles.rating)}>
        { arr.map((value, index) => (
          <li key={index} >
            {value ? <Image src="/images/star-gold.png" alt="" width="20" height="20" /> : <Image src="/images/star.png" alt="" width="20" height="20" /> }
          </li>)
        )}
      </ul>
  )
}
  