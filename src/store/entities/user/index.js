import { LOADING_STATUS } from "@/constants/loading-status";
import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./thunks/fetchUsers";

const userEntityAdapter = createEntityAdapter();

export const userSlice = createSlice({
  name: "user",
  initialState: userEntityAdapter.getInitialState({
    loadingStatus: LOADING_STATUS.idle,
  }),
  extraReducers: {
    [fetchUsers.pending]: (state) => {
      state.loadingStatus = LOADING_STATUS.inProgress;
    },
    [fetchUsers.fulfilled]: (state, { payload }) => {
      state.loadingStatus = LOADING_STATUS.finished;
      userEntityAdapter.setAll(state, payload);
    },
    [fetchUsers.rejected]: (state, { payload }) => {
      state.loadingStatus =
        payload === LOADING_STATUS.earlyAdded
          ? LOADING_STATUS.finished
          : LOADING_STATUS.failed;
    },
  },
});
