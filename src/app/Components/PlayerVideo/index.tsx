import { createEffect, createSignal, onMount, useContext } from "solid-js";
import "./player.css";
import { FileFolderContext } from "../../Contexts/FileContext";
import { Container } from "solid-bootstrap";

export const PlayerVideo = () => {
  // context api
  const globalFileProperties = useContext(FileFolderContext);
  let videoPath = globalFileProperties.propertiesForAll().path;

  //signals
  const [playing, setPlaying] = createSignal(false);
  const [muted, setMuted] = createSignal(false);
  const [played, setPlayed] = createSignal(0);
  const [duration, setDuration] = createSignal(0);
  const [playbackRate, setPlaybackRate] = createSignal(1.0);
  const [volume, setVolume] = createSignal(1);
  const [seeking, setSeeking] = createSignal(false);

  //refs
  let playerRef: HTMLVideoElement;
  let playerContainerRef: any;
  let controlsRef: any;

  //deprecating

  const [currentTime, setCurrentTime] = createSignal(0);
  const [videoTime, setVideoTime] = createSignal(0);
  const [progress, setProgress] = createSignal(0);

  //handlers
  const handlePlayPause = () => {
    setPlaying(!playing());
    playing() ? playerRef.play() : playerRef.pause();
    setVideoTime(playerRef.duration);
  };
  const handleFastForward = () => {
    playerRef.currentTime += 5;
  };

  const handleRewind = () => {
    playerRef.currentTime -= 5;
  };

  //TODO:enhance this cuz it causes unnecesary rerenders
  window.setInterval(function () {
    setCurrentTime(playerRef?.currentTime);
    // console.log(currentTime());
    setProgress((playerRef?.currentTime / videoTime()) * 100);
  }, 1000);

  // use onMount or createEffect to read after connected to DOM
  onMount(() => console.log(playerRef.duration));
  return (
    <>
      <div className="my-5">
        <label htmlFor="customRange1">Example range</label>
        <input
          type="range"
          class="custom-range"
          id="customRange1"
          value={0}
          min={0}
          max={videoTime()}
          onChange={(e) => console.log(e.target)}
          // onCl={() => console.log("drargging ")}
        />
      </div>
      <p>
        {" "}
        {Math.floor(currentTime() / 60) +
          ":" +
          ("0" + Math.floor(currentTime() % 60)).slice(-2)}
      </p>
      <div>
        <div style={{ width: `${progress()}%` }}></div>
      </div>
      <p>
        {Math.floor(videoTime() / 60) +
          ":" +
          ("0" + Math.floor(videoTime() % 60)).slice(-2)}
      </p>
      <Container>
        <video
          style={{ height: "330px", width: "400px" }}
          id="video1"
          ref={playerRef}
          src="E:\\voracious animes\\kanojo okarishimasu\\rent9.mp4"
        ></video>
        <button onClick={handleRewind}>⏪</button>

        {playing() ? (
          <button onClick={() => handlePlayPause()}>⏸</button>
        ) : (
          <button onClick={() => handlePlayPause()}>▶</button>
        )}

        <button onClick={handleFastForward}>⏩</button>
      </Container>
    </>
  );
};
