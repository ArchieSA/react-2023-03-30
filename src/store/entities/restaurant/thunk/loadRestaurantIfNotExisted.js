import { restaurantSlice } from "@/store/entities/restaurant";
import { selectRestaurantIds } from "@/store/entities/restaurant/selectors";

export const loadRestaurantIfNotExisted = () => (dispatch, getState) => {
  if (selectRestaurantIds(getState()).length) {
    return;
  }

  dispatch(restaurantSlice.actions.startLoading());

  fetch("http://localhost:3001/api/restaurants/")
    .then((response) => response.json())
    .then((restaurants) => dispatch(restaurantSlice.actions.finishLoading(restaurants)))
    .catch(() => dispatch(restaurantSlice.actions.failLoading()));
};
