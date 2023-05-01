import { loadingByApi } from '@/libs/back-actions.js'
import { selectRestaurantIds } from '@/store/entities/restaurant/selectors.js'
import { restaurantSlice } from '@/store/entities/restaurant/index.js'

export const loadRestaurantIfNotExisted =
  () => (dispatch, getState) => {
    if (selectRestaurantIds(getState()).length) {
      return;
    }

    loadingByApi(`http://localhost:3001/api/restaurants`, { dispatch, slice: restaurantSlice })
  };
