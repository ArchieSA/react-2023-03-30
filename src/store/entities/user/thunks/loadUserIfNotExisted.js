import { userSlice } from "@/store/entities/user";
import { selectUserIds } from "@/store/entities/user/selectors";

export const loadUserIfNotExisted = () => (dispatch, getState) => {
  if (selectUserIds(getState()).length) {
    return;
  }

  dispatch(userSlice.actions.startLoading());

  fetch("http://localhost:3001/api/users/")
    .then((response) => response.json())
    .then((users) => dispatch(userSlice.actions.finishLoading(users)))
    .catch(() => dispatch(userSlice.actions.failLoading()));
};
