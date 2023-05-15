


import { reviewSlice } from "@/store/entities/review";
import { selectReviewsByRestaurantId } from "@/store/entities/restaurant/selectors";
import { selectReviewsIds } from "../selectors";

export const loadReviewByRestaurantIdIfNotExisted =
  (restaurantId) => (dispatch, getState) => {
    const restaurantReviews = selectReviewsByRestaurantId(getState(), {
      restaurantId,
    });
    const reviewIds = selectReviewsIds(getState());

    if (restaurantReviews.every((reviewId) => reviewIds.includes(reviewId))) {
      return;
    }

    dispatch(reviewSlice.actions.startLoading());

    fetch(`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`)
      .then((response) => response.json())
      .then((reviews) => dispatch(reviewSlice.actions.finishLoading(reviews)))
      .catch(() => dispatch(reviewSlice.actions.failLoading()));
  };
