import { selectReviewIds } from "@/store/entities/review/selectors";
import { selectReviewsByRestaurantId } from "@/store/entities/restaurant/selectors";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { LOADING_STATUS } from "@/constants/loading-status";

export const fetchReviews = createAsyncThunk(
    'review/fetchReviews',
    async (restaurantId, {getState, rejectWithValue}) => {

       const restaurantReviews = selectReviewsByRestaurantId(getState(), {
      restaurantId,
    });

    const reviewIds = selectReviewIds(getState());

    if (restaurantReviews.every((reviewId) => reviewIds.includes(reviewId))) {
      return rejectWithValue(LOADING_STATUS.earlyAdded);
    }

    const response = await fetch(`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`);
    
    return await response.json();    
  }
);
