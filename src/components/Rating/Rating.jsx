import styles from "./styles.module.scss";
import Image from "next/image";
import React, { useState, useEffect } from 'react';
import classNames from "classnames";

export const MAX_RATING = 5;

export const Rating = ({
  value,
  maxRating = MAX_RATING,
  className,
  onChange
}) => {
  const [currentIndex, setCurrentIndex] = useState();

  useEffect(() => setCurrentIndex(value), [value]);

  return (
    <div
      className={
        classNames(className, styles.root, { [styles.hover]: !!onChange })
      }
      onMouseLeave={() => onChange && setCurrentIndex(value)}
    >
      {maxRating > 0 &&
        new Array(maxRating)
          .fill(null)
          .map((_, index) => (
            <Image
              src={`/images/star${index >= currentIndex ? "" : "-gold"}.png`}
              key={index}
              className={styles.star}
              width={32}
              height={32}
              alt={index >= currentIndex ? "black" : "gold"}
              onClick={() => onChange && onChange((index === value - 1) ? index : index + 1)}
              onMouseEnter={() => onChange && setCurrentIndex(index + 1)}
            />
          ))}
    </div>
  );
};
