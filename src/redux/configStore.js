import { combineReducers, configureStore } from "@reduxjs/toolkit";
import login from "./stores/login/login";
import localStorage from "./middlewares/localStorage";

const reducer = combineReducers({ login });

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorage),
});

export default store;
