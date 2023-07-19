import {
  loginFailure,
  loginStart,
  loginSuccess,
  logoutStart,
  logoutSuccess,
  logoutFailure,
} from "./userRedux";
import { publicRequest } from "../requestMethod";

export const login = (user) => {
  return async (dispatch) => {
    dispatch(loginStart());
    try {
      const res = await publicRequest.post("/auth/login", user);
      dispatch(loginSuccess(res.data));
    } catch (err) {
      dispatch(loginFailure());
    }
  };
};

export const logout = (user) => {
  return async (dispatch) => {
    dispatch(logoutStart());
    try {
      await publicRequest.post("/auth/logout", user);
      dispatch(logoutSuccess());
    } catch (err) {
      dispatch(logoutFailure());
    }
  };
};
