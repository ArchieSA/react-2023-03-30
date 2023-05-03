import { normalizedReviews } from "@/constants/normalized-fixtures";
import { createSlice } from "@reduxjs/toolkit";
import { LOADING_STATUS } from "@/constants/loading-status";

const initialState = {
  entities: {},
  ids: [],
  loadingStatus: LOADING_STATUS.idle,
};

export const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {
    startLoading: (state, action) => {
      state.loadingStatus = LOADING_STATUS.inProgress;
    },
    finishLoading: (state) => {
      state.loadingStatus = LOADING_STATUS.finished;
    },
    failLoading: (state) => {
      state.loadingStatus = LOADING_STATUS.failed;
    }
  }
})