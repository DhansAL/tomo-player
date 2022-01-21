import { createSignal, onCleanup, onMount, useContext } from "solid-js";
import { FileFolderContext } from "../../Contexts/FileFolderContext";
import { subtitleGateaway } from "../../modules/subtitles/subtitleGateaway";
import { Tokenization } from "./Tokenization";
type subtitleProps = {
  time: number;
  duration: number;
  seektime: number;
};

/**
 * Manages subtitle for the Player Component
 * @param props the time ,duration and time seeked for adjusting the subtitle according to currentTime
 */
export const Subtitles = (props: subtitleProps) => {
  const [sub, setSub] = createSignal([]);

  // context api
  const globalFileProperties = useContext(FileFolderContext);
  let subfile = globalFileProperties.propertiesForAll().subfilePath;

  let subObj: any;

  onMount(async () => {
    if (subfile !== "") {
      subObj = await subtitleGateaway(subfile);
    }
  });

  let subInterval = window.setInterval(() => {
    //TODO: make this faster
    if (subObj) {
      for (let i = 0; i < subObj.length; i++) {
        if (subObj[i].end * 1000 > props.time * 1000) {
          if (props.time * 1000 < subObj[i].start * 1000) {
            subObj[i - 1] ? setSub(subObj[i - 1].body[0].text) : setSub([])
            break;
          }
          setSub(subObj[i].body[0].text);
          break;
        }
      }
    }
  }, 240);

  onCleanup(() => {
    window.clearInterval(subInterval);
  });

  return (
    <>
      <div>current time to be consumed by subtitles {props.time}</div>
      <Tokenization toTokenize={sub()} />
      <div>seektime - {props.seektime}</div>
      <div>duration - {props.duration}</div>
    </>
  );
};
