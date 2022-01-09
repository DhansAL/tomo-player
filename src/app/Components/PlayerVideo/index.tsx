import { createEffect, createSignal, onMount, useContext } from "solid-js";
import { FileFolderContext } from "../../Contexts/FileContext";
import { Subtitles } from "../Subtitles";
export const PlayerVideo = () => {
  // context api
  const globalFileProperties = useContext(FileFolderContext);
  let videoPath = globalFileProperties.propertiesForAll().path;

  //ref
  let playerRef: HTMLVideoElement;
  const [time, setTime] = createSignal<number>(0);
  const [duration, setDuration] = createSignal<number>(0);
  const handleSetDuration = () => {
    setDuration(playerRef?.duration);
  };
  const handleTimeUpdate = () => {
    setTime(playerRef.currentTime);
  };

  //TODO: maybe make custom video player but it works for now
  return (
    <>
      <div>
        <video
          id="player"
          // poster="E:\\wallpaperz\\lol.jpg"
          ondurationchange={handleSetDuration}
          ref={playerRef}
          controls
          onTimeUpdate={handleTimeUpdate}
          style={{ height: "100vh", width: "100vw" }}
          src="E:\\voracious animes\\kanojo okarishimasu\\rent 2.mp4"
        ></video>
        <span>Subtitles</span>
        <Subtitles time={time()} duration={duration()}></Subtitles>
      </div>
    </>
  );
};
