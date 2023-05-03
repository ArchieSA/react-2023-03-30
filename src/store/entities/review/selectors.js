export const selectReviewModule = (state) => state.reviews;

export const selectReviewById = (state, { reviewId }) =>  
  selectReviewModule(state).entities[reviewId];

  
