import { LOADING_STATUS } from "@/constants/loading-status";
import { normalizedRestaurants } from "@/constants/normalized-fixtures";
import { RESTAURANT_ACTION } from "@/store/entities/restaurant/actions";
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
      state.loadingStatus = LOADING_STATUS.finished;
      state.entities = {
        ...state.entities,
        ...payload.reduce((acc, restaurant) => {
          acc[restaurant.id] = restaurant;

          return acc;
        }, {}),
      };
      state.ids = [...new Set([...state.ids, ...payload.map(({ id }) => id)])];
    },
    failLoading: (state) => {
      state.loadingStatus = LOADING_STATUS.failed;
    },
  },
});
