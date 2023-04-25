import { normalizedDishes } from "@/constants/normalized-fixtures";

const initialState = {
  entities: normalizedDishes.reduce((acc, dish) => {
    acc[dish.id] = dish;

    return acc;
  }, {}),
  ids: normalizedDishes.map(({ id }) => id),
};

export const dishReducer = (state = initialState, action) => {
  return state;
};
