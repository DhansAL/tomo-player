/**
 * deletes locally stored collections.
 * @returns message to be consumed by settings component
 */

export const collectionFlush = () => {
  if (localStorage.getItem("Collections")) {
    localStorage.removeItem("Collections");
    return "deleted local collection";
  } else {
    return "No collections found locally";
  }
};
