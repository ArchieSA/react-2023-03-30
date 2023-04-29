import { LOADING_STATUS } from "@/constants/loading-status";

export const selectUserModule = (state) => state.user;

export const selectUserById = (state, { userId }) =>
  selectUserModule(state).entities[userId];

export const selectIsUserLoading = (state) => {
  selectUserModule(state).isLoading;
};

export const selectIsUserAlreadyLoaded = (state) => {
  selectUserModule(state).isLoading === LOADING_STATUS.finished;
};
