import { fileFormats } from "../../../configs/fileConfigs";

/**
 * @param isFile  true the file dropped is a mediafile. false for subfiles.
 *  if true then checks if the *media file format is supported by chromium.
 *
 * @param filename  the file to be checked
 *
 * @returns true if the file format is supported
 */
export const checkDroppedFile = (isFile: boolean, filename: string) => {
  if (isFile) {
    // check if the filename has supported format
    // TODO: this can be better if we slice the string and check from last index.
    const filenameFormat = filename.split(".")[1]; //split the format out of whole file name
    if (fileFormats.includes(filenameFormat)) return true;

    return false;
  }
  //check sub formats if not mediafile.
  //TODO:
};
