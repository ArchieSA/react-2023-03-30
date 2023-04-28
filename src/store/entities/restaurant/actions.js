export const RESTAURANT_ACTION = {
  startLoading: "restaurant/startLoading",
  finishLoading: "restaurant/finishLoading",
  failLoading: "restaurant/failLoading",
};

export const startLoadingRestaurants = () => ({
  type: RESTAURANT_ACTION.startLoading,
});
export const finishLoadingRestaurants = (restaurants) => ({
  type: RESTAURANT_ACTION.finishLoading,
  payload: restaurants,
});
export const failLoadingRestaurants = () => ({
  type: RESTAURANT_ACTION.failLoading,
});
