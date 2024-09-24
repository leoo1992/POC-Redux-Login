import { combineReducers } from "@reduxjs/toolkit";
import token from "./token";
import user from "./user";

const reducer = combineReducers({ token: token.reducer, user: user.reducer });
const fetchUser = user.asyncAction;
const fetchToken = token.asyncAction;
const {removeToken} = token.actions;
const {removeUser} = user.actions;

export const login = (user) => async (dispatch) => {
  if (user) {
    try {
      const { payload } = await dispatch(fetchToken(user));
      if (payload?.token) {
        await dispatch(fetchUser(payload.token));
      }
    } catch (error) {
      console.log(error);
    }
  }
};

export const autoLogin = () => async (dispatch, getState) => {
  const state = getState();
  const data = state.login.token.data;

  if (data) return await dispatch(fetchUser(data.token));
};

export const userLogout = () => (dispatch) => {
  dispatch(removeUser());
  dispatch(removeToken());
  window.localStorage.removeItem("token");
};

export default reducer;
