import React from "react";
import Image from "next/image";

import styles from "./styles.module.scss";
import classNames from "classnames";

export default function Rating({ value, className, maxRating = 5 }) {
  if (
    maxRating < 1 ||
    value < 0 ||
    value > maxRating ||
    !Number.isInteger(value) ||
    !Number.isInteger(maxRating)
  )
    return null;

  const stars = [];
  for (let i = 0; i < maxRating; i++) {
    stars.push(i < value ? "star-gold.png" : "star.png");
  }

  return (
    <ul className={classNames(styles.root, className)}>
      {stars.map((val, i) => (
        <li key={i}>
          <Image src={"/images/" + val} alt="" width={15} height={15} />
        </li>
      ))}
    </ul>
  );
}
