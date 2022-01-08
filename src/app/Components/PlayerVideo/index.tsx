import { createEffect, createSignal, onMount, useContext } from "solid-js";
import { FileFolderContext } from "../../Contexts/FileContext";
import { Subtitles } from "../Subtitles";
export const PlayerVideo = () => {
  // context api
  const globalFileProperties = useContext(FileFolderContext);
  let videoPath = globalFileProperties.propertiesForAll().path;

  //ref
  let playerRef: HTMLVideoElement;


//TODO: maybe make custom video player but it works for now
  return (
    <>   
    <div>
      
    <video
        id="player"
        // poster="E:\\wallpaperz\\lol.jpg"
        ref={playerRef}
        controls
        style={{ height: "100vh", width: "100vw", }}
        src="E:\\voracious animes\\kanojo okarishimasu\\rent9.mp4"
      ></video>
      <Subtitles></Subtitles>
    </div>

 
    </>
  );
};
