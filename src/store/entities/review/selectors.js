export const selectReviews = (state) => state.review;

export const selectReviewById = (state, { reviewId }) =>
  selectReviews(state).entities[reviewId];
