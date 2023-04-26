import { normalizedReviews } from "@/constants/normalized-fixtures";

const initialState = {
  entities: normalizedReviews.reduce((acc, review) => {
    acc[review.id] = review;

    return acc;
  }, {}),
};

export const reviewReducer = (state = initialState, action) => {
  return state;
};
