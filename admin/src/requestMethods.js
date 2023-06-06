import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmU3Mzk4M2Q4ZGUxZjk5ZDIyY2FiZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MTg4NjYwMywiZXhwIjoxNjgyMTQ1ODAzfQ.c8YovQCaj3kxYkRsAf57N__HBwmKppjViRqGsCtXW-4"
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
