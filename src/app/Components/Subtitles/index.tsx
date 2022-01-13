import { createEffect, createSignal, onCleanup, onMount } from "solid-js";
import { subtitleGateaway } from "../../modules/subtitles/subtitleGateaway";
import { Tokenization } from "./Tokenization";
type subtitleProps = {
  time: number;
  duration: number;
  seektime: number;
};

export const Subtitles = (props: subtitleProps) => {
  const [sub, setSub] = createSignal([]);

  let subfile = "E:\\voracious animes\\kanojo okarishimasu\\rent 2.ass"; //temp
  let subObj: any;

  onMount(async () => {
    subObj = await subtitleGateaway(subfile);
  });

  //the global idx of a current sub
  let subIdx = 0;

  // FIXME: handle onRight/leftArrowClick
  //FIXME:  this is still faulty
  // TODO: create a global function which runs on each timeChange and find the current sub by iterating, maybe use binary search?

  createEffect(() => {
    props.seektime;
    //update the idx according to the seektime
    if (subObj) {
      for (let i = 0; i < subObj.length; i++) {
        if (subObj[i].end * 1000 > props.seektime * 1000) {
          if (props.seektime * 1000 < subObj[i].start * 1000) {
            subIdx = i - 1;
            break;
          }
          subIdx = i;
          break;
        }
      }
    }
  });

  //main sub iterating function
  let subInterval = window.setInterval(() => {
    if (subObj) {
      if (
        props.time * 1000 > subObj[subIdx].start * 1000 &&
        props.time * 1000 < subObj[subIdx].end * 1000
      ) {
        // tokenize the text
        let currentSub = subObj[subIdx].body[0].text;
        setSub(currentSub);
        //250ms(avg) is the gap between 2 onTimeUpdate calls
        if (
          props.time * 1000 + 250 ||
          props.time * 1000 - 250 > subObj[subIdx].end * 1000
        ) {
          subIdx++;
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
