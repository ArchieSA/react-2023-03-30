import styles from "./styles.module.scss";
import Image from "next/image";
import {useState} from "react";

const MAX_RATING = 5;

export const Rating = ({ value, maxRating = MAX_RATING, className, onChange}) => {
  const [state, setState] = useState(value);
  return (
    <div className={className}>
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
              onClick = {() => {
                if (onChange) {
                  setState(index + 1 === state ? index : index + 1);
                  onChange(state);
                }
              }}
            />
          ))}
    </div>
  );
};
