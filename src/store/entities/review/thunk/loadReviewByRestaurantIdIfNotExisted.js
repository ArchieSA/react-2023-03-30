import { selectReviewsByRestaurantId } from "@/store/entities/restaurant/selectors";
import { loadingByApi } from '@/libs/back-actions.js'
import { selectReviewIds } from '@/store/entities/review/selectors.js'
import { reviewSlice } from '@/store/entities/review/index.js'

export const loadReviewByRestaurantIdIfNotExisted =
  (restaurantId) => (dispatch, getState) => {
    const restaurantReviews = selectReviewsByRestaurantId(getState(), {
      restaurantId,
    });
    const reviewIds = selectReviewIds(getState());

    if (restaurantReviews.every(reviewId => reviewIds.includes(reviewId))) {
      return;
    }

    loadingByApi(`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`, { dispatch, slice: reviewSlice })
  };
