import { createEffect, createSignal, onMount, useContext } from "solid-js";
import { FileFolderContext } from "../../Contexts/FileContext";
export const PlayerVideo = () => {
  // context api
  const globalFileProperties = useContext(FileFolderContext);
  let videoPath = globalFileProperties.propertiesForAll().path;

  //ref
  let playerRef: HTMLVideoElement;


  return (
    <>   

      
      classic html5 player
      <video
        id="player"
        class="player"
        controls
        
        style={{ height: "330px", width: "400px", }}
        src="E:\\voracious animes\\kanojo okarishimasu\\rent9.mp4"
      ></video>
    </>
  );
};
