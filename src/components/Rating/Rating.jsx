import styles from "./styles.module.scss";
import Image from "next/image";
import { useEffect, useState } from "react";

const MAX_RATING = 5;

export const Rating = ({ value, maxRating = MAX_RATING, className, onChange }) => {
  const [currentValue, setCurrentValue] = useState();

  useEffect(() => setCurrentValue(value), [value]);

  return (
    <div className={className}>
      {maxRating > 0 &&
        new Array(maxRating)
          .fill(null)
          .map((_, index) => (
            <Image
              src={`/images/star${index >= currentValue ? "" : "-gold"}.png`}
              key={index}
              className={styles.star}
              width={32}
              height={32}
              alt={index >= currentValue ? "black" : "gold"}
              onClick={() => onChange && onChange((index === value - 1) ? index : index + 1)}
            />
          ))}
    </div>
  );
};
