import {
  RESTAURANT_ACTION,
  failLoadingRestaurants,
  finishLoadingRestaurants,
  startLoadingRestaurants,
} from "@/store/entities/restaurant/actions";
import { selectRestaurantIds } from "@/store/entities/restaurant/selectors";

export const loadRestaurantIfNotExisted = () => (dispatch, getState) => {
  if (selectRestaurantIds(getState()).length) {
    return;
  }

  dispatch(startLoadingRestaurants());

  fetch("http://localhost:3001/api/restaurants/")
    .then((response) => response.json())
    .then((restaurants) => dispatch(finishLoadingRestaurants(restaurants)))
    .catch(() => dispatch(failLoadingRestaurants()));
};
