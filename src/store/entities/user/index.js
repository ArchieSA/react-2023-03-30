import { LOADING_STATUS } from "@/constants/loading-status";
import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "./thunks/loadUserIfNotExisted";

const userEntityAdapter = createEntityAdapter();

export const userSlice = createSlice({
  name: "user",
  initialState: userEntityAdapter.getInitialState({
    loadingStatus: LOADING_STATUS.idle,
  }),
  extraReducers: {
    [fetchUser.pending]: (state) => {
      state.loadingStatus = LOADING_STATUS.inProgress;
    },
    [fetchUser.fulfilled]: (state, { payload }) => {
      console.log(payload)
      state.loadingStatus = LOADING_STATUS.finished;
      userEntityAdapter.setMany(state, payload)
    },
    [fetchUser.rejected]: (state, {payload}) => {
      state.loadingStatus = 
      payload === LOADING_STATUS.earlyAdded
      ? LOADING_STATUS.finished
      : LOADING_STATUS.failed;
    },
  },
});
