export const selectUserModule = (state) => state.users;
export const selectUserById = (state, userId ) => 
  selectUserModule(state).entities[userId]; 
