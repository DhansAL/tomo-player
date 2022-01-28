import axios from "axios";
import { authStore } from "../store/auth";
import { api } from "./urlConfig";

const token = window.localStorage.getItem("token");

const Axios = axios.create({
  baseURL: api,
  headers: { Authorization: token ? `Bearer ${token}` : "" },
});

Axios.interceptors.request.use((req) => {
  const auth = authStore.getState();
  console.log(auth);
  if (auth.token) {
    req.headers.Authorization = `Bearer ${auth.token}`;
  }
  return req;
});
export default Axios;
