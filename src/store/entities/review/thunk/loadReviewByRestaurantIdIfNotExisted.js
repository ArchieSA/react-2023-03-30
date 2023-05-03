import {selectReviewsByRestaurantId} from "@/store/entities/restaurant/selectors";
import {selectReviewById, selectReviewIds} from "@/store/entities/review/selectors";
import {reviewSlice} from "@/store/entities/review";

export const loadReviewByRestaurantIdIfNotExisted = (restaurantId) => (dispatch, getState) => {
  const restaurantReviews = selectReviewsByRestaurantId(getState(), {
    restaurantId
  });

  const reviewIds = selectReviewIds(getState());

  if (restaurantReviews.every((reviewId) => reviewIds.includes(reviewId))) {
    return;
  }

  dispatch(reviewSlice.actions.startLoading());

  fetch(`http://localhost:3001/api/reviews?restaurantId=${ restaurantId }`)
    .then((reposnse) => reposnse.json())
    .then((reviews) => dispatch(reviewSlice.actions.finishLoading(reviews)))
    .catch(() => dispatch(reviewSlice.actions.failLoading()))
};