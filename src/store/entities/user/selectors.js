export const selectUsers = (state) => state.user;

export const selectUserById = (state, { userId }) =>
  selectUsers(state).entities[userId];
