import { LOADING_STATUS } from "@/constants/loading-status";
import { normalizedRestaurants } from "@/constants/normalized-fixtures";
import { RESTAURANT_ACTION } from "@/store/entities/restaurant/actions";

const initialState = {
  entities: {},
  ids: [],
  loadingStatus: LOADING_STATUS.idle,
};

export const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESTAURANT_ACTION.startLoading:
      return { ...state, loadingStatus: LOADING_STATUS.inProgress };
    case RESTAURANT_ACTION.finishLoading:
      return {
        entities: action.payload.reduce((acc, restaurant) => {
          acc[restaurant.id] = restaurant;

          return acc;
        }, {}),
        ids: action.payload.map(({ id }) => id),
        loadingStatus: LOADING_STATUS.finished,
      };
    case RESTAURANT_ACTION.failLoading:
      return { ...state, loadingStatus: LOADING_STATUS.failed };

    default:
      return state;
  }
};
