import { combineReducers, configureStore } from "@reduxjs/toolkit";
import login from "./stores/login/login";
import photos from "./stores/photos/photos";
import localStorage from "./middlewares/localStorage";

const reducer = combineReducers({ login, photos });

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorage),
});

export default store;
