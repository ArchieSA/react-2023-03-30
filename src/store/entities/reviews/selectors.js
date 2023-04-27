export const selectReviewModule = (state) => state.reviews;

export const selectReviewById = (state, { reviews }) => {
    const ids = reviews.map(review => {
        return selectReviewModule(state).entities[review]
    });
    return ids;
}


