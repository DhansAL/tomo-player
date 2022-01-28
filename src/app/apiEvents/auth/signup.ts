import Axios from "../../utils/axios";

export const SignupUser = async (username: string, password: string) => {
  //send username and password to /api/signup

  try {
    const res = await Axios.post("/signup", { username, password });
    if (res.status === 200) {
      return res.data.message;
    }
  } catch (error) {
    return error.response.data.message;
  }
};
