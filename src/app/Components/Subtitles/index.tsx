import { createEffect, createSignal, onMount } from "solid-js";
import { subtitleGateaway } from "../../modules/subtitles/subtitleGateaway";

type subtitleProps = {
  time: number;
  duration: number;
};
export const Subtitles = (props: subtitleProps) => {
  // dont destructure props cuz it causes rerender  - solid issue
  const [sub, setSub] = createSignal("weiner");
  const [loading, setloading] = createSignal(false);

  //Parsing
  let subfile = "E:\\voracious animes\\kanojo okarishimasu\\rent 2.ass"; //temp

  createEffect(() => {
    const getArray = async () => {
      return await subtitleGateaway(subfile);
    };
    let res = getArray();

    console.log(res, props.time);
  });
  return (
    <>
      <div>current time to be consumed by subtitles {props.time}</div>
      <div>subtitle - {sub()}</div>
      <div>duration - {props.duration}</div>
    </>
  );
};
