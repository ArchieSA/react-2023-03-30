import { useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

const MAX_RATING = 5;

export const Rating = ({
  value,
  maxRating = MAX_RATING,
  className,
  onChange,
}) => {
  const [state, setState] = useState(value);

  return (
    <div className={className} onMouseLeave={() => onChange && setState(value)}>
      {maxRating > 0 &&
        new Array(maxRating)
          .fill(null)
          .map((_, index) => (
            <Image
              src={`/images/star${index >= state ? "" : "-gold"}.png`}
              key={index}
              className={styles.star}
              width={32}
              height={32}
              alt={index >= value ? "black" : "gold"}
              onClick={() => onChange && onChange(index + 1)}
              onMouseEnter={() => onChange && setState(index + 1)}
            />
          ))}
    </div>
  );
};
