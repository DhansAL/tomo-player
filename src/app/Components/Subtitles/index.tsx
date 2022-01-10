import { createEffect, createSignal, onMount } from "solid-js";
import { subtitleGateaway } from "../../modules/subtitles/subtitleGateaway";

type subtitleProps = {
  time: number;
  duration: number;
};
export const Subtitles = (props: subtitleProps) => {
  // dont destructure props cuz it causes rerender  - solid issue
  const [sub, setSub] = createSignal("weiner");
  const [load, setLoad] = createSignal(false);

  //Parsing
  //getting the file
  let subfile = "E:\\voracious animes\\kanojo okarishimasu\\rent 2.ass"; //temp
  let subObj: any;
  //stick to async ipc
  onMount(async () => {
    subObj = await subtitleGateaway(subfile);
    console.log(subObj)
    setLoad(true);
    // console.log(load());
  });
  
  createEffect(()=>{
    console.log(props.time,"time");
    
  })

  // console.log(subObj[Math.floor(props.time)].end,"end time");
  const handleSubLoad = () => {
    let i = 0;
    while (i < subObj.length) {
      console.log(subObj[i].end, "end time");
      i++;
    }
  };
  return (
    <>
      <button onclick={handleSubLoad}>ready</button>
      <div>current time to be consumed by subtitles {props.time}</div>
      <div>subtitle - {sub()}</div>
      <div>duration - {props.duration}</div>
    </>
  );
};
