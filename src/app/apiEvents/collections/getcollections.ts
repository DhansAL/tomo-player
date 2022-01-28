import Axios from "../../utils/axios";

export const getCollections = async () => {
  try {
    const res = await Axios.get("/collections/getCollections");
    console.log(res);
  } catch (error) {
    console.log(error.response);
  }
};
