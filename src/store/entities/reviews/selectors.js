import { LOADING_STATUS } from "@/constants/loading-status";

export const selectReviewModule = (state) => state.reviews;

export const selectReviewById = (state, { reviews }) => {
    const ids = reviews.map(review => {
        return selectReviewModule(state).entities[review]
    });
    
    return ids;
}

export const selectReviews = (state) => selectReviewModule(state).ids;

export const selectReviewsLoadingStatus = (state) =>
selectReviewModule(state).loadingStatus;

export const selectIsReviewsLoading = (state) =>
selectReviewsLoadingStatus(state) === LOADING_STATUS.inProgress;

