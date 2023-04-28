import { normalizedUsers } from "@/constants/normalized-fixtures";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  entities: normalizedUsers.reduce((acc, user) => {
    acc[user.id] = user;

    return acc;
  }, {}),
  ids: normalizedUsers.map(({ id }) => id),
};

// export const userReducer = (state = initialState, action) => {
//   return state;
// };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});
