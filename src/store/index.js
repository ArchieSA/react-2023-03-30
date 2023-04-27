import { dishReducer } from "@/store/entities/dish";
import { restaurantReducer } from "@/store/entities/restaurant";
import { cartReducer } from "@/store/ui/cart";
import { reviewReducer } from "./entities/review";
import { userReducer } from "./entities/users";
import { combineReducers, createStore } from "redux";

const rootReducer = combineReducers({
  cart: cartReducer,
  restaurant: restaurantReducer,
  dish: dishReducer,
  review: reviewReducer,
  users: userReducer,
  
});

export const store = createStore(rootReducer);
