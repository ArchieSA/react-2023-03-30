import { dishReducer } from "@/store/entities/dish";
import { usersReducer } from "@/store/entities/users";
import { restaurantReducer } from "@/store/entities/restaurant";
import { reviewsReducer } from "@/store/entities/reviews";
import { cartReducer } from "@/store/ui/cart";
import { combineReducers, createStore } from "redux";

const rootReducer = combineReducers({
  cart: cartReducer,
  restaurant: restaurantReducer,
  dish: dishReducer,
  reviews: reviewsReducer,
  user: usersReducer,
});

export const store = createStore(rootReducer);
