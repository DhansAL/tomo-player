import Axios from "../../utils/axios";

/**
 * deletes the collection from online database of user.
 */
export const deleteUserCollection = async () => {
  try {
    const res = await Axios.post("/collections/deletecollection");
    console.log(res.data);
    return res.data.msg;
  } catch (error) {
    console.log(error.response);
    return error.response.data.error;
  }
};
