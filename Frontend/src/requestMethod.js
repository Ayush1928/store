import axios from "axios";

const BASE_URL = process.env.BASE_URL;
let TOKEN = null;

const persistedData = JSON.parse(localStorage.getItem("persist:root"));
if (persistedData && persistedData.user) {
  const user = JSON.parse(persistedData.user).currentUser;
  TOKEN = user ? user.accessToken : null;
}

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `Bearer ${TOKEN}` },
});
