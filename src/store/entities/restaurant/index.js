import { LOADING_STATUS } from "@/constants/loading-status";
import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { fetchRestaurant } from "./thunks/fetchRestaurant";

const restaurantEntityAdaptor = createEntityAdapter();

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: restaurantEntityAdaptor.getInitialState({
    loadingStatus: LOADING_STATUS.idle,
  }),
  extraReducers: {
    [fetchRestaurant.pending]: (state) => {
      state.loadingStatus = LOADING_STATUS.inProgress;
    },
    [fetchRestaurant.fulfilled]: (state, { payload }) => {
      state.loadingStatus = LOADING_STATUS.finished;
      restaurantEntityAdaptor.setAll(state, payload);
    },
    [fetchRestaurant.rejected]: (state, { payload }) => {
      state.loadingStatus =
        payload === LOADING_STATUS.earlyAdded
          ? LOADING_STATUS.finished
          : LOADING_STATUS.failed;
    },
  },
});
