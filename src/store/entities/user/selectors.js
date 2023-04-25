export const selectUsers = (state) => state.user;

export const selectReviewById = (state, { userId }) =>
  selectUsers(state).entities[userId];
