import { createSignal, onMount, useContext } from "solid-js";
import { SolidPlyr } from "solid-plyr";
import "./player.css";
import { FileFolderContext } from "../../Contexts/FileContext";

export const PlayerVideo = () => {
  let playerRef: HTMLVideoElement;
  // context api
  const globalFileProperties = useContext(FileFolderContext);
  let videoPath = globalFileProperties.propertiesForAll().path;

  //signals
  const [playing, setPlaying] = createSignal(false);
  const [currentTime, setCurrentTime] = createSignal(0);
  const [videoTime, setVideoTime] = createSignal(0);
  const [progress, setProgress] = createSignal(0);

  //handlers
  const videoHandler = (control: string) => {
    if (control === "play") {
      playerRef.play();
      setPlaying(true);
      setVideoTime(playerRef.duration);
    } else if (control === "pause") {
      playerRef.pause();
      setPlaying(false);
    }
  };

  const fastForward = () => {
    playerRef.currentTime += 5;
  };

  const revert = () => {
    playerRef.currentTime -= 5;
  };
  //TODO:enhance this cuz it causes unnecesary rerenders
  window.setInterval(function () {
    setCurrentTime(playerRef?.currentTime);
    console.log(currentTime());
    setProgress((playerRef?.currentTime / videoTime()) * 100);
  }, 1000);

  // use onMount or createEffect to read after connected to DOM
  onMount(() => console.log(playerRef));
  return (
    <div className="app">
      <video
        id="video1"
        ref={playerRef}
        src="E:\\voracious animes\\kanojo okarishimasu\\rent9.mp4"
      ></video>
      <div className="controlsContainer">
        <div className="controls">
          <button onClick={revert} className="controlsIcon">
            Rewind
          </button>

          {playing() ? (
            <button
              onClick={() => videoHandler("pause")}
              className="controlsIcon--small"
            >
              pause
            </button>
          ) : (
            <button
              onClick={() => videoHandler("play")}
              className="controlsIcon--small"
            >
              play
            </button>
          )}

          <button className="controlsIcon" onClick={fastForward}>
            FastForward
          </button>
        </div>
      </div>
      <div className="timecontrols">
        <p className="controlsTime">
          {" "}
          {Math.floor(currentTime() / 60) +
            ":" +
            ("0" + Math.floor(currentTime() % 60)).slice(-2)}
        </p>
        <div className="time_progressbarContainer">
          <div
            style={{ width: `${progress()}%` }}
            className="time_progressBar"
          ></div>
        </div>
        <p className="controlsTime">
          {Math.floor(videoTime() / 60) +
            ":" +
            ("0" + Math.floor(videoTime() % 60)).slice(-2)}
        </p>
      </div>
    </div>
  );
};
