import { LOADING_STATUS } from "@/constants/loading-status";
import { selectRestaurantIds } from "@/store/entities/restaurant/selectors";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRestaurants = createAsyncThunk(
  'restaurant/fetchRestaurants',
  async (restaurantIds, {getState, rejectWithValue}) => {

     if (selectRestaurantIds(getState()).length) {

      return rejectWithValue(LOADING_STATUS.earlyAdded);
  }

  const responce = await fetch("http://localhost:3001/api/restaurants/");

  return await responce.json();
  }
)
