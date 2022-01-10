//@ts-expect-error
//reason - no type declarations
import { parseSubs } from "frazy-parser";
/**
 * The main parser for the app. This takes the path for subfile , reads the file synchronously
 * and then parses the blob into requiered formats and returns an iterable array
 * @param subFile path for subfile
 * @returns subArray iterable array of subtitles
 */

export const subtitleGateaway = async (subFile: string) => {
  //call different parsers according to file format check
  //checking frazyparser if passes it will be universal parser

  //   console.log(subFile, "from module");

  //@ts-expect-error
  //raw blob to be parsed
  let subFileBlob = await window.api.sendSubFile("sendSubFile", subFile);
  //iterable object
  const subObject = parseSubs(subFileBlob);
  return subObject;
};
