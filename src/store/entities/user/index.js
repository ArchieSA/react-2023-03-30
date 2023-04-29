import { LOADING_STATUS } from "@/constants/loading-status";
import { normalizedUsers } from "@/constants/normalized-fixtures";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  entities: {},
  ids: [],
  isLoading: LOADING_STATUS.idle,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = LOADING_STATUS.inProgress;
    },
    finishLoading: (state, { payload }) => {
      (state.entities = {
        ...state.entities,
        ...payload.reduce((acc, user) => {
          acc[user.id] = user;

          return acc;
        }, {}),
      }),
        (state.ids = payload.map(({ id }) => id));
    },
    failLoading: (state) => {
      state.isLoading = LOADING_STATUS.failed;
    },
  },
});
