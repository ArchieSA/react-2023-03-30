import { reviewsSlice } from "@/store/entities/reviews";
import { selectReviewsByRestaurantId } from "../../restaurant/selectors";
import { selectReviews } from "../selectors";

 export const loadReviewsByRestaurantIdIfnotExist = (restaurantId) => async (dispatch, getState) => {
    dispatch(reviewsSlice.actions.startLoading());

    const restaurantReviews = selectReviewsByRestaurantId(getState(), {
        restaurantId,
      });

      const reviewsIds = selectReviews(getState());
  
      if (restaurantReviews.every((reviewId) => reviewsIds.includes(reviewId))) {
        return;
      }

    const responce = await fetch(`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`);
    const reviews = await responce.json();
   
    dispatch(reviewsSlice.actions.finishLoading(reviews));

};