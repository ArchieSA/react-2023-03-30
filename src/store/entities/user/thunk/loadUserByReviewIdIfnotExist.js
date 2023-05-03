import { userSlice } from "..";
import { selectUserById } from "../selectors";


export const loadUserByReviewIdIfnotExist = (userId) => async (dispatch, getState) => {
    dispatch(userSlice.actions.startLoading());

      const userIds = selectUserById(getState(), userId);
  
      if (userIds) {
        return;
      }

    const responce = await fetch(`http://localhost:3001/api/users`);
    const users = await responce.json();
   
    dispatch(userSlice.actions.finishLoading(users));

};