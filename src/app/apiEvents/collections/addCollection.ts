import Axios from "../../utils/axios";

/**
 * adds the collection from online database of user.
 */
type SyncCollection = [
  {
    name: string;
  }
];
export const addCollections = async (nameArr: SyncCollection) => {
  try {
    const res = await Axios.post("/collections/addcollection", {
      collectionDetails: nameArr,
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};
