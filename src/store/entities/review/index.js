import { LOADING_STATUS } from "@/constants/loading-status";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  entities: {},
  ids: [],
  loadingStatus: LOADING_STATUS.idle,
};

export const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loadingStatus = LOADING_STATUS.inProgress;
    },
    finishLoading: (state, { payload }) => {
      state.loadingStatus = LOADING_STATUS.finished;
      state.entities = {
        ...state.entities,
        ...payload.reduce((acc, review) => {
          acc[review.id] = review;

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
