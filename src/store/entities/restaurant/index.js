import { LOADING_STATUS } from "@/constants/loading-status";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  entities: {},
  ids: [],
  loadingStatus: LOADING_STATUS.idle,
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loadingStatus = LOADING_STATUS.inProgress;
    },
    finishLoading: (state, { payload }) => {
      state.entities = payload.reduce((acc, restaurant) => {
        acc[restaurant.id] = restaurant;
        return acc;
      }, {});
      state.ids = payload.map(({ id }) => id);
      state.loadingStatus = LOADING_STATUS.finished;
    },
    failLoading: (state) => {
      state.loadingStatus = LOADING_STATUS.inProfailedgress;
    },
  },
});
