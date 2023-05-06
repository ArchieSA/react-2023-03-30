import { LOADING_STATUS } from "@/constants/loading-status";
import { selectRestaurantIds } from "@/store/entities/restaurant/selectors";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRestaurant = createAsyncThunk(
  "restaurant/fetchRestaurant",
  async (_, { getState, rejectWithValue }) => {
    if (selectRestaurantIds(getState()).length) {
      return rejectWithValue(LOADING_STATUS.earlyAdded);
    }

    const response = await fetch("http://localhost:3001/api/restaurants/");
    return response.json();
  }
);
