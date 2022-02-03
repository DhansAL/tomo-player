import Axios from "../../utils/axios";

type SyncCollection = [
  {
    name: string;
  }
];
/**
 * adds the collection from online database of user.
 */
export const addCollections = async (nameArr: SyncCollection) => {
  try {
    const res = await Axios.post("/collections/addcollection", {
      collectionDetails: nameArr,
    });
    return res.data;
  } catch (error) {
    return error.response;
  }
};
