<<<<<<< HEAD
import { dishReducer } from "@/store/entities/dish";
import { usersReducer } from "@/store/entities/users";
import { restaurantReducer } from "@/store/entities/restaurant";
import { reviewsReducer } from "@/store/entities/reviews";
=======
import { dishReducer, dishSlice } from "@/store/entities/dish";
import { restaurantReducer } from "@/store/entities/restaurant";
import { reviewReducer } from "@/store/entities/review";
import { userReducer } from "@/store/entities/user";
import { logger } from "@/store/middlewares/logger";
>>>>>>> 24831b1ccea2d39ee5c37958571f20f48499064f
import { cartReducer } from "@/store/ui/cart";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cart: cartReducer,
  restaurant: restaurantReducer,
<<<<<<< HEAD
  dish: dishReducer,
  reviews: reviewsReducer,
  user: usersReducer,
=======
  dish: dishSlice.reducer,
  review: reviewReducer,
  user: userReducer,
>>>>>>> 24831b1ccea2d39ee5c37958571f20f48499064f
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger]),
});

// export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
