import { createEffect, createSignal, onMount, useContext } from "solid-js";
import "./player.css";
import { FileFolderContext } from "../../Contexts/FileContext";

import Plyr from "plyr";
export const PlayerVideo = () => {
  // context api
  const globalFileProperties = useContext(FileFolderContext);
  let videoPath = globalFileProperties.propertiesForAll().path;
  let playerRef: HTMLVideoElement;
  //TODO:enhance this cuz it causes unnecesary rerenders
  // window.setInterval(function () {
  //   console.log(playerRef.currentTime);
  // }, 1000);
  Plyr.setup("#player");

  return (
    <>
    {/* <video
        ref={playerRef}
        style={{ height: "330px", width: "400px" }}
        id="player"
        class="js-player"
       
      ></video>
     */}
      <video
        playsinline
        controls
        style={{ height: "330px", width: "400px", }}
        id="player"
        class="player"
        ref={playerRef}
        src="E:\\voracious animes\\kanojo okarishimasu\\rent9.mp4"
      ></video>

      <button> +++++++++++++</button>
    </>
  );
};
