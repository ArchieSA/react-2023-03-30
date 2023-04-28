import { dishSlice } from "@/store/entities/dish";
import { selectDishIds } from "@/store/entities/dish/selectors";
import { selectMenuByRestaurantId } from "@/store/entities/restaurant/selectors";

export const loadDishByRestaurantIdIfNotExisted =
  (restaurantId) => (dispatch, getState) => {
    const restaurantMenu = selectMenuByRestaurantId(getState(), {
      restaurantId,
    });
    const dishIds = selectDishIds(getState());

    if (restaurantMenu.every((dishId) => dishIds.includes(dishId))) {
      return;
    }

    dispatch(dishSlice.actions.startLoading());

    fetch(`http://localhost:3001/api/dishes?restaurantId=${restaurantId}`)
      .then((response) => response.json())
      .then((dishes) => dispatch(dishSlice.actions.finishLoading(dishes)))
      .catch(() => dispatch(dishSlice.actions.failLoading()));
  };
