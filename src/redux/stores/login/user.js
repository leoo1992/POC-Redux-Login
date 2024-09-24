import createAsyncSlice from "../../helper/createAsyncSlice";

const user = createAsyncSlice({
  name: "user",
  reducers: {
    removeUser(state) {
      state.data = null;
    },
  },
  fetchConfig: (token) => ({
    url: "https://dogsapi.origamid.dev/json/api/user",
    options: {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  }),
});

export default user;