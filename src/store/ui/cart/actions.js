export const CART_ACTIONS = {
  increment: "cart/increment",
  decrement: "cart/decrement",
};

export const incrementDish = (dishId) => ({
  type: CART_ACTIONS.increment,
  payload: dishId,
});

export const decrementDish = (dishId) => ({
  type: CART_ACTIONS.decrement,
  payload: dishId,
});
