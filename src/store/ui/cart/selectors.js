export const selectCartModule = (state) => {
  
  return state.cart;
};

export const selectDishAmount = (state, { dishId }) => {
  
  return selectCartModule(state)[dishId] || 0;
}
  
