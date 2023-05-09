import { LOADING_STATUS } from "@/constants/loading-status";
import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { fetchReviews } from "./thunks/loadReviewsByRestaurantIdIfNotExisted";

const reviewsEntityAdopter = createEntityAdapter();

export const reviewSlice = createSlice({
  name: "review",
  initialState: reviewsEntityAdopter.getInitialState({
    loadingStatus: LOADING_STATUS.idle
  }),
  extraReducers: {
    [fetchReviews.pending]: (state) => {
      state.loadingStatus = LOADING_STATUS.inProgress;
    },
    [fetchReviews.fulfilled]: (state, { payload }) => {
      state.loadingStatus = LOADING_STATUS.finished;
      reviewsEntityAdopter.setMany(state, payload);
    },
    [fetchReviews.rejected]: (state, { payload }) => {
      state.loadingStatus = 
      payload === LOADING_STATUS.earlyAdded
          ? LOADING_STATUS.finished
          : LOADING_STATUS.failed;
    },
  },
});
