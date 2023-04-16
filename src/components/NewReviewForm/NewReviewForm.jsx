import { Rating, MAX_RATING } from "@/components/Rating/Rating";
import React, { useReducer, useState } from "react";

const initialState = {
  name: "",
  text: "",
  rating: MAX_RATING,
};

const reducer = (state, action) => {
  switch (action?.type) {
    case "setName":
      return { ...initialState, name: action.payload };
    case "setText":
      return { ...state, text: action.payload };
    case "setRating":
      return { ...state, rating: action.payload };

    default:
      return state;
  }
};

export const NewReviewForm = () => {
  const [formValue, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>
        <label>Name</label>
        <input
          value={formValue.name}
          onChange={(event) =>
            dispatch({ type: "setName", payload: event.target.value })
          }
        />
      </div>
      <div>
        <label>Text</label>
        <input
          value={formValue.text}
          onChange={(event) =>
            dispatch({ type: "setText", payload: event.target.value })
          }
        />
      </div>
      <div>
        <label>Rating</label>
        <input
          value={formValue.rating}
          type="number"
          min={0}
          max={MAX_RATING}
          onChange={(event) =>
            dispatch({ type: "setRating", payload: event.target.value })
          }
        />
        <Rating
          value={formValue.rating}
          onChange={(rating) =>
            dispatch({ type: "setRating", payload: rating })
          }
        />
      </div>
    </div>
  );
};
