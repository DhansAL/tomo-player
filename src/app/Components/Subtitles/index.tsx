import { createEffect, createSignal, onMount } from "solid-js";

import { subtitleGateaway } from "../../modules/subtitles/subtitleGateaway";
type subtitleProps = {
  time: number;
  duration: number;
};
export const Subtitles = (props: subtitleProps) => {
  const [sub, setSub] = createSignal("weiner");
  const [load, setLoad] = createSignal(false);

  let subfile = "E:\\voracious animes\\kanojo okarishimasu\\rent 2.ass"; //temp
  let subObj: any;
  //stick to async ipc
  onMount(async () => {
    subObj = await subtitleGateaway(subfile);
    setLoad(true);
  });

  //sample obj
  // { "id": 1,
  //  "start": 0.8,
  //  "end": 2.38,
  //  "body": [{ "text": "（和也(かずや)）ああ…" }] 
  //  }

  let subIdx = 0;
  createEffect(() => {
    props.time; //current timestamp
    //logic
    if (subObj) {
      if (props.time * 1000 > subObj[subIdx].start * 1000 && props.time * 1000 < subObj[subIdx].end * 1000) {
        //show subtitle
        setSub(subObj[subIdx].body[0].text);

        if ((props.time * 1000) + 250 || (props.time * 1000) - 250 > subObj[subIdx].end * 1000) {
          subIdx++;
        }
      } else {
        //dont show subtitle
        console.log("you have to wait son", props.time * 1000, "start-", subObj[subIdx].start * 1000, "end", subObj[subIdx].end * 1000);
      }
    }

  });

  // createEffect(() => {
  //   props.time
  //   if (subObj) {
  //     let i = Math.floor(props.time)
  //     let start = subObj[i].start * 1000
  //     let end = subObj[i].end * 1000;

  //     if ((start < props.time * 1000
  //       &&
  //       end > props.time * 1000)) {

  //       console.log("search for me now", "END-", end, "<-->", "START-", start);

  //       if (props.time * 1000 < end * 1000) {
  //         //we dont want to inc i till it passes the end
  //         i = i - 1;
  //       }
  //     } else {
  //       console.log("no subs to search", props.time * 1000);
  //     }
  //   }
  // })

  return (
    <>
      <div>current time to be consumed by subtitles {props.time}</div>
      <div>subtitle - {sub()}</div>
      <div>duration - {props.duration}</div>
    </>
  );
};
