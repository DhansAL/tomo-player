import { Link } from "solid-app-router";
import { Button, Container } from "solid-bootstrap";
import { createSignal, onMount, useContext } from "solid-js";
import { FileFolderContext } from "../../Contexts/FileFolderContext";
import { Subtitles } from "../Subtitles";

/**
 * The parent player component. gets the path of video from context and 
 * handles ref of video.
 */
export const PlayerVideo = () => {
  // context api
  const globalFileProperties = useContext(FileFolderContext);
  let videoPath = ""
  videoPath = globalFileProperties.propertiesForAll().path;

  //ref
  let playerRef: HTMLVideoElement;
  const [time, setTime] = createSignal(0);
  const [duration, setDuration] = createSignal(0);
  const [seektime, setSeektime] = createSignal(0);

  const handleSetDuration = () => {
    setDuration(playerRef?.duration);
  };
  const handleTimeUpdate = () => {
    setTime(playerRef.currentTime);
  };
  const handleSeek = () => {
    setSeektime(playerRef.currentTime)
    playerRef.pause()
  }

  return (
    <>
      <div class="vw-100 d-flex flex-column overflow-hidden" >
        < Button variant="secondary" class=" w-100">
          <a href="#" class="text-light text-decoration-none  text-center" >
            <h6>⬅ GO BACK</h6>
          </a>
        </ Button>
        <video
          id="player"
          ondurationchange={handleSetDuration}
          onseeked={handleSeek}
          ref={playerRef}
          controls
          onTimeUpdate={handleTimeUpdate}
          style={{ height: "100vh", width: "100vw" }}
          src={videoPath}
        >

        </video>
        <Subtitles time={time()} duration={duration()} seektime={seektime()} />
      </div>
    </>
  );
};
