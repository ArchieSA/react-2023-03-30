import { LOADING_STATUS } from "@/constants/loading-status";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  entities: {},
  ids: [],
  isLoading: LOADING_STATUS.idle,
};

// export const reviewReducer = (state = initialState, action) => {
//   return state;
// };
export const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = LOADING_STATUS.inProgress;
    },
    finishLoading: (state, { payload }) => {
      state.entities = {
        ...state.entities,
        ...payload.reduce((acc, review) => {
          acc[review.id] = review;

          return acc;
        }, {}),
      };
      state.ids = payload.map(({ id }) => id);
      state.isLoading = LOADING_STATUS.finished;
    },
    failLoading: (state, { payload }) => {
      state.isLoading = LOADING_STATUS.failed;
      console.log("review failLoading", payload);
    },
  },
});
