import { normalizedReviews } from "@/constants/normalized-fixtures";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  entities: normalizedReviews.reduce((acc, review) => {
    acc[review.id] = review;

    return acc;
  }, {}),
  ids: normalizedReviews.map(({ id }) => id),
};

// export const reviewReducer = (state = initialState, action) => {
//   return state;
// };
export const reviewSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});
