import { publicRequest } from "../requestMethod";
import {
  loginFailure,
  loginStart,
  loginSuccess,
  logoutFailure,
  logoutStart,
  logoutSuccess,
} from "./userRedux";
import { useNavigate } from "react-router-dom";

export const login = (user) => {
  return async (dispatch) => {
    dispatch(loginStart());

    const timeoutDuration = 10000;
    let isTimeout = false;

    const handleTimeout = () => {
      if (!isTimeout) {
        isTimeout = true;
        dispatch(loginFailure());
      }
    };

    const timeoutId = setTimeout(handleTimeout, timeoutDuration);

    try {
      const res = await publicRequest.post("/auth/login", user);
      if (!isTimeout) {
        clearTimeout(timeoutId);
        dispatch(loginSuccess(res.data));
      }
      const navigate = useNavigate();
      navigate("/");
    } catch (err) {
      if (!isTimeout) {
        clearTimeout(timeoutId);
        dispatch(loginFailure());
      }
    }
  };
};

export const logout = (user) => {
  return async (dispatch) => {
    dispatch(logoutStart());
    try {
      await publicRequest.post("/auth/logout", user);
      document.cookie =
        "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      dispatch(logoutSuccess());
    } catch (err) {
      dispatch(logoutFailure());
    }
  };
};
