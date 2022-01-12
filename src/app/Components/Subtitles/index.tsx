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
  // createEffect(() => {
  //   console.log(props.time * 1000);

  // })

  let subIdx = 0;
  window.setInterval(() => {
    if (subObj) {
      if (props.time * 1000 > subObj[subIdx].start * 1000 && props.time * 1000 < subObj[subIdx].end * 1000) {
        //show subtitle
        setSub(subObj[subIdx].body[0].text);
        //250ms is the gap between 2 onTimeUpdate calls
        if ((props.time * 1000) + 250 || (props.time * 1000) - 250 > subObj[subIdx].end * 1000) {
          subIdx++;
        }
      } else {
        //dont show subtitle
        // console.log("you have to wait son", props.time * 1000, "start-", subObj[subIdx].start * 1000, "end", subObj[subIdx].end * 1000);
      }
    }
  }, 240)


  return (
    <>
      <div>current time to be consumed by subtitles {props.time}</div>
      <div>subtitle - {sub()}</div>
      <div>duration - {props.duration}</div>
    </>
  );
};
