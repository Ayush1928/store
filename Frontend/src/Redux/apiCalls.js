import { publicRequest } from "../requestMethod";
import {
  loginFailure,
  loginStart,
  loginSuccess,
  logoutFailure,
  logoutStart,
  logoutSuccess,
} from "./userRedux";
import {useNavigate} from "react-router-dom";

export const login = (user) => {
  return async (dispatch) => {
    dispatch(loginStart());
    try {
      const res = await publicRequest.post("/auth/login", user);
      dispatch(loginSuccess(res.data));
      const navigate = useNavigate();
      navigate("/")
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
      document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      dispatch(logoutSuccess());
    } catch (err) {
      dispatch(logoutFailure());
    }
  };
};
