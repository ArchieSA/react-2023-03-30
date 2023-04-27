import {normalizedReviews} from "@/constants/normalized-fixtures";

const initialState = {
    entities: normalizedReviews.reduce((acc, review) => {
        acc[review.id] = review;
        return acc;
    }, {}),
    ids: normalizedReviews.map(({id}) => id)
}
console.log("initialState", initialState);

export const reviewReducer = (state = initialState, action) => {
    return state;
}