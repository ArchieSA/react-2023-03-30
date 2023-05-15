import { LOADING_STATUS } from "@/constants/loading-status";
import { selectDishIds } from "@/store/entities/dish/selectors";
import { selectMenuByRestaurantId } from "@/store/entities/restaurant/selectors";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchDishesByRestaurantId = createAsyncThunk(
  "dish/fetchDishesByRestaurantId",
  async (restaurantId, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const restaurantMenu = selectMenuByRestaurantId(state, {
        restaurantId,
      });
      const dishIds = selectDishIds(state);

      if (restaurantMenu.every((dishId) => dishIds.includes(dishId))) {
        return rejectWithValue(LOADING_STATUS.earlyAdded);
      }

      const response = await fetch(
        `http://localhost:3001/api/dishes?restaurantId=${restaurantId}`
      );

      return await response.json();
    } catch (err) {
      rejectWithValue(`Error in "dish/fetchDishesByRestaurantId" ${err.message}` );
    }

  }
);
