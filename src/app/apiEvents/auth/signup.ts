import Axios from "../../utils/axios";

export const SignupUser = async (username: string, password: string) => {
  try {
    const res = await Axios.post("/signup", { username, password });
    if (res.status === 200) {
      return res.data.message;
    }
  } catch (error) {
    return error.response.data.message || error.response.data.error;
  }
};
