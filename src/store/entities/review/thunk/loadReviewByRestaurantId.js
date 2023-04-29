import { reviewSlice } from "..";
import { selectReviewsByRestaurantId } from "../../restaurant/selectors";
import { selectReviewIds } from "../selectors";

export const loadReviewByRestaurantId =
  (reataurantId) => (dispatch, getState) => {
    const state = getState();
    const reviewRestaurantIds = selectReviewsByRestaurantId(state, {
      reataurantId,
    });
    const reviewExistedIds = selectReviewIds(state);

    const reviewsToLoad = reviewRestaurantIds?.length
      ? reviewRestaurantIds.reduce((acc, id) => {
          reviewExistedIds.includes(id) || acc.push(id);
          return acc;
        }, [])
      : [];

    // we can load only new reviews here, but no such fns at the backend.
    if (!reviewsToLoad.length) {
      dispatch(reviewSlice.actions.startLoading());
      fetch(
        "http://localhost:3001/api/reviews?restaurantId=".concat(reataurantId)
      )
        .then((result) => result.json())
        .then((reviews) => {
          dispatch(reviewSlice.actions.finishLoading(reviews));
        })
        .catch((error) => {
          dispatch(reviewSlice.actions.failLoading(error));
        });
    }
  };
