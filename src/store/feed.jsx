import { PHOTOS_GET } from '../api'
import createAsyncSlice from './helper/CreateAsyncslice'

const slice = createAsyncSlice({
  name: "feed",
  initialState: {
    list: [],
    page: 1,
    infinite: true
  },
  reducers: {
    addPhotos(state, action) {
      state.list.push(...action.payload)
      if(action.payload.length === 0) state.infinite = false
    },
    addPages(state){
      state.pages++
    },
    resetState(state) {
      state.infinite = true;
      state.pages = 1;
      state.list = [];
      state.data = null;
      state.error = null;
      state.loading = false;
    },
  },
  fetchConfig: ({page, total, user: userId}) => PHOTOS_GET({page, total, user: userId}),
})

export const fetchFeed = slice.asyncAction;
export const {addPhotos, addPages, resetState: resetFeedState} = slice.actions

export const loadNewPhotos = ({total = 6, user}) => async (dispatch, getState) => {
  const {feed} = getState();
  dispatch(addPages());
  const {payload} = await dispatch(fetchFeed({page: feed.pages, total, user}));
  dispatch(addPhotos(payload))
}

export default slice.reducer