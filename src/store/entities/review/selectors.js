import { LOADING_STATUS } from "@/constants/loading-status";

export const selectReviewModule = (state) => state.review;

export const selectReviewById = (state, { reviewId }) =>
  selectReviewModule(state).entities[reviewId];

export const selectReviewIds = (state) => selectReviewModule(state).ids;

export const selectIsReviewLoading = (state) => {
  return selectReviewModule(state).isLoading === LOADING_STATUS.inProgress;
};
