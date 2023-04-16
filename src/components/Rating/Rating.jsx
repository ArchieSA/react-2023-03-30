import { useEffect, useReducer } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";


const MAX_RATING = 5;

const initialState = 0;

const reducer = (state, action) => {
  switch (action?.type) {
    case "setRating":
      return action.payload > 5
        ? state
        : { ...state, rating: Number(action.payload) };

    default:
      return state;
  }
};

export const Rating = ({ value, maxRating = MAX_RATING, className }) => {
  const [formValue, dispatch] = useReducer(reducer, initialState);
  console.log(formValue.rating)

  return (
    <div className={className}>
      {maxRating > 0 &&
        new Array(maxRating)
          .fill(null)
          .map((_, index) => (            
            <Image
              onClick={(rating) =>
                dispatch({ type: "setRating", payload: rating.target.alt })
              }
              src={`/images/star${index >= (value ? value : formValue.rating ?? 0) ? "" : "-gold"}.png`}
              key={index}
              className={styles.star}
              width={32}
              height={32}
              alt={index + 1}
            />
          ))}
    </div>
  );
};
