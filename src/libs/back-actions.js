import {LOADING_STATUS} from '@/constants/loading-status.js'

export const initSlice =  name => {
  return {
    name,
    initialState:{
      entities: {},
      ids: [],
      loadingStatus: LOADING_STATUS.idle
    },
    reducers: {
      startLoading: (state) => {
        state.loadingStatus = LOADING_STATUS.inProgress;
      },
        finishLoading: (state, { payload }) => {
        state.loadingStatus = LOADING_STATUS.finished;
        state.entities = {
          ...state.entities,
          ...payload.reduce((acc, item) => {
            acc[item.id] = item;
            return acc;
          }, {}),
        };
        state.ids = [...new Set([...state.ids, ...payload.map(({ id }) => id)])];
      },
        failLoading: (state) => {
        state.loadingStatus = LOADING_STATUS.failed;
      }
    }
  }
}

export const loadingByApi =  (url, { dispatch, slice }) => {
  dispatch(slice.actions.startLoading());

  fetch(url)
    .then(response => response.json())
    .then(result => dispatch(slice.actions.finishLoading(result)))
    .catch(err => {
      dispatch(slice.actions.failLoading())
      console.log(`Error get url ${url}. ${err.message}`)
    });
}
