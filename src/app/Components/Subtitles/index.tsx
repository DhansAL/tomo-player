import { createEffect, createSignal, onMount } from "solid-js";
import { subtitleGateaway } from "../../modules/subtitles/subtitleGateaway";

type subtitleProps = {
  time: number;
  duration: number;
};
export const Subtitles = (props: subtitleProps) => {
  // dont destructure props cuz it causes rerender  - solid issue
  const [sub, setSub] = createSignal("weiner");

  //Parsing
  //getting the file
  let subfile = "E:\\voracious animes\\kanojo okarishimasu\\rent 2.ass"; //temp

  //stick to async ipc
  createEffect(() => {
    //IPC handling
    //@ts-expect-error
    window.api.sendSubFile(subfile);
    //@ts-expect-error
    window.api.recieveSubBlob((subBlob) => {});
  });
  //   console.log(SUBBLOB());

  return (
    <>
      <div>current time to be consumed by subtitles {props.time}</div>
      <div>subtitle - {sub()}</div>
      <div>duration - {props.duration}</div>
    </>
  );
};
