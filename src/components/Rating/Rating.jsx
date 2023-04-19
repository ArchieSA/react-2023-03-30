import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { nanoid } from "nanoid";

export const Rating = ({ maxRating, value }) => {
  let content = [];

  for (let i = 0; i < maxRating; i++) {
    if (i < value) {
      content.push(
        <Image
          key={nanoid()}
          src="/images/star-gold.png"
          width={20}
          height={20}
          alt="gold star"
        />
      );
    } else {
      content.push(
        <Image
          key={nanoid()}
          src="/images/star.png"
          width={20}
          height={20}
          alt="star"
        />
      );
    }
  }

  return <div className={styles.root}>{content}</div>;
};
