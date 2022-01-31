import Axios from "../../utils/axios";

/**
 * gets the collection from online database of user.
 */
export const getCollections = async () => {
  try {
    const res = await Axios.get("/collections/getcollection");
    return res.data.yourShows;
  } catch (error) {
    return error.response;
    console.log(error.response);
  }
};
