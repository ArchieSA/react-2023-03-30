import { createStore } from "@/CustomStore";

const rootReducer = (state = {}, action) => {
  switch (action?.type) {
    case "increment":
      return {
        ...state,
        [action.payload]: state[action.payload] ? state[action.payload] + 1 : 1,
      };
    case "decrement":
      return {
        ...state,
        [action.payload]: state[action.payload] ? state[action.payload] - 1 : 0,
      };

    default:
      return state;
  }
};

export const store = createStore(rootReducer);
