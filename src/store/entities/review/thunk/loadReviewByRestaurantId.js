import { reviewSlice } from "..";
import { selectReviewsByRestaurantId } from "../../restaurant/selectors";
import { selectReviewIds } from "../selectors";

export const loadReviewByRestaurantId =
  (restaurantId) => (dispatch, getState) => {
    const reviewRestaurantIds = selectReviewsByRestaurantId(getState(), {
      restaurantId,
    });
    const reviewExistedIds = selectReviewIds(getState());
    const reviewsToLoad = reviewRestaurantIds?.length
      ? reviewRestaurantIds.reduce((acc, id) => {
          if (!reviewExistedIds.includes(id)) {
            acc.push(id);
          }
          return acc;
        }, [])
      : [];

    // we can load only new reviews here, but no such fns at the backend.
    if (reviewsToLoad.length) {
      dispatch(reviewSlice.actions.startLoading());
      fetch(
        "http://localhost:3001/api/reviews?restaurantId=".concat(restaurantId)
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
