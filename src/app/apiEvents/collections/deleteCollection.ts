import Axios from "../../utils/axios";

/**
 * deletes the collection from online database of user.
 */
export const deleteUserCollection = async () => {
  try {
    const res = await Axios.post("/collections/deletecollection");
    return res.data.msg;
  } catch (error) {
    return error.response.data.error;
  }
};
