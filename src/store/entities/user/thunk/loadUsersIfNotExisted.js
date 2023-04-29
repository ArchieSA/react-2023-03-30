import { selectIsUserAlreadyLoaded } from "../selectors";
import { userSlice } from "..";

// reviwIds - array
export const loadUsersIfNotExisted = () => (dispatch, getState) => {
  const isUserLoaded = selectIsUserAlreadyLoaded(getState());
  if (isUserLoaded) return;

  dispatch(userSlice.actions.startLoading());

  fetch("http://localhost:3001/api/users")
    .then((result) => result.json())
    .then((users) => {
      dispatch(userSlice.actions.finishLoading(users));
    })
    .catch((error) => {
      dispatch(userSlice.actions.failLoading(error));
    });
};
