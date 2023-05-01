import { dishSlice } from "@/store/entities/dish";
import { selectDishIds } from "@/store/entities/dish/selectors";
import { selectMenuByRestaurantId } from "@/store/entities/restaurant/selectors";
import { loadingByApi } from '@/libs/back-actions.js'

export const loadDishByRestaurantIdIfNotExisted =
  (restaurantId) => (dispatch, getState) => {
    const restaurantMenu = selectMenuByRestaurantId(getState(), {
      restaurantId,
    });
    const dishIds = selectDishIds(getState());

    if (restaurantMenu.every((dishId) => dishIds.includes(dishId))) {
      return;
    }

    loadingByApi(`http://localhost:3001/api/dishes?restaurantId=${restaurantId}`, { dispatch, slice: dishSlice })
  };
