import { combineReducers, createStore } from "redux";
import { dishReducer } from "@/store/entities/dish";
import { restaurantReducer } from "@/store/entities/restaurant";
import { cartReducer } from "@/store/ui/cart";
import { reviewReducer } from "@/store/entities/review";
import { userReducer } from "./entities/user";

const rootReducer = combineReducers({
  cart: cartReducer,
  restaurant: restaurantReducer,
  dish: dishReducer,
  review: reviewReducer,
  user: userReducer,
});

export const store = createStore(rootReducer);
