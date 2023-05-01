import { loadingByApi } from '@/libs/back-actions.js'
import { selectUserIds } from '@/store/entities/user/selectors.js'
import { userSlice } from '@/store/entities/user/index.js'

export const loadUserIfNotExisted =
  () => (dispatch, getState) => {
    if (selectUserIds(getState()).length) {
      return;
    }

    loadingByApi(`http://localhost:3001/api/users`, { dispatch, slice: userSlice })
  };
