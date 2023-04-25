import { normalizedRestaurants } from "@/constants/normalized-fixtures";

const initialState = {
  entities: normalizedRestaurants.reduce((acc, restaurant) => {
    acc[restaurant.id] = restaurant;

    return acc;
  }, {}),
  ids: normalizedRestaurants.map(({ id }) => id),
};
console.log("initialState", initialState);

export const restaurantReducer = (state = initialState, action) => {
  return state;
};
