import { authStore } from "../../store/auth";
import Axios from "../../utils/axios";

export const loginUser = async (username: string, password: string) => {
  try {
    const res = await Axios.post("/signin", { username, password });
    if (res.status === 200) {
      const { token, user } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", user.username);

      authStore.setState({
        token: token,
        username: user.username,
        authenticate: true,
        message: "",
      });
    }
  } catch (error) {
    authStore.setState({
      token: null,
      username: null,
      authenticate: false,
      message:
        error.response.data.message ||
        error.response.data.msg ||
        error.response.data.error,
    });
  }
};

export const logoutUser = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  authStore.setState({ token: null, username: null, authenticate: false });
};
