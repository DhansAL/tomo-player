import Axios from "../../utils/axios";

/**
 * gets the collection from online database of user.
 */
export const getCollections = async () => {
  try {
    const res = await Axios.get("/collections/getcollection");
    // console.log(res);

    return res.data.yourShows;
  } catch (error) {
    console.log(error.response);

    return error.response.data;
  }
};
