import createAsyncSlice from "../../helper/createAsyncSlice";

export const photos = createAsyncSlice({
  name: 'photos',
  initialState: {
    list: [],
    pages: 0,
    infinite: true,
  },
  reducers: {
    addPhotos(state, action) {
      state.list.push(...action.payload);
      state.pages++;
      if (action.payload.length === 0) state.infinite = false;
    },
    removePhotos(state) {
      state.pages = 0;
      state.infinite = true;
      state.list = [];
      state.data = null;
    },
  },
  fetchConfig: (pages = 1) => ({
    url: `https://dogsapi.origamid.dev/json/api/photo/?_page=${pages}&_total=3&_user=0`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  }),
});

export const { addPhotos, removePhotos } = photos.actions;
export const fetchPhotos = photos.asyncAction;

export const loadNewPhotos = (pages = 1) => async (dispatch) => {
  const { payload } = await dispatch(fetchPhotos(pages));
  return await dispatch(addPhotos(payload));
};

export default photos.reducer;
