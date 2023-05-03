import {userSlice} from "@/store/entities/user";

export const loadUserIfNotExisted = () => (dispatch, getState) => {
  dispatch(userSlice.actions.startLoading());

  fetch(`http://localhost:3001/api/users`)
    .then((response) => response.json())
    .then((users) => dispatch(userSlice.actions.finishLoading(users)))
    .catch(() => dispatch(userSlice.actions.failLoading()));
};
