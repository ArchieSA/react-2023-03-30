import styles from "./styles.module.scss";
import Image from "next/image";
import classNames from "classnames";

const MAX_RATING = 5;

export const Rating = ({
  value,
  maxRating = MAX_RATING,
  className,
  onChange,
}) => {
  return (
    <div className={className}>
      {maxRating > 0 &&
        new Array(maxRating)
          .fill(null)
          .map((_, index) => (
            <Image
              src={`/images/star${index >= value ? "" : "-gold"}.png`}
              key={index}
              onClick={() => onChange && onChange(index + 1)}
              className={classNames(styles.star, onChange && styles.changable)}
              width={32}
              height={32}
              alt={index >= value ? "black" : "gold"}
            />
          ))}
    </div>
  );
};
