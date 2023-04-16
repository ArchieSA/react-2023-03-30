import styles from "./styles.module.scss";
import Image from "next/image";

import react, { useState } from "react";

const MAX_RATING = 5;

export const Rating = ({ value, maxRating = MAX_RATING, callback, className }) => {
  const [activeRating, setActiveRating] = useState(value)  

  return (
    <div className={className}>
      {maxRating > 0 &&
        new Array(maxRating)
          .fill(null)
          .map((_, index) => (
            <Image
              onClick = {(e) => {
                let stars = callback(e)
                setActiveRating(stars) 
                }}
              src={`/images/star${index >= activeRating ? "" : "-gold"}.png`}
              key={index}
              attrindex={index}
              className={styles.star}
              width={32}
              height={32}
              alt={index >= value ? "black" : "gold"}
            />
          ))}
    </div>
  );
};
