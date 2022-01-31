import { Button } from "solid-bootstrap";
import { createEffect, createSignal, onCleanup } from "solid-js";
import { updateStreak } from "../../modules/streak/streak";
import { Subtitles } from "../Subtitles";
import { fileFolderStore } from "../../store/FileFolder";

/**
 * The parent player component. gets the path of video from context and 
 * handles ref of video.
 */
type PlayerProps = {
  // TODO: pull last played from local storage
}

type CurrentVideo = {
  video: string;
  sub: string;
  playFrom: number;
}

export const PlayerVideo = (props: PlayerProps) => {
  //ref - works like this in solid

  let playerRef: HTMLVideoElement;
  const [time, setTime] = createSignal(0);
  const [duration, setDuration] = createSignal(0);
  const [seektime, setSeektime] = createSignal(0);
  const [videoPath, setVideoPath] = createSignal(fileFolderStore.getState().path);
  const [subPath, setSubPath] = createSignal(fileFolderStore.getState().subfilePath);

  const [currentVideo, setCurrentVideo] = createSignal<CurrentVideo>(null)

  //continue from functionality
  createEffect(() => {
    if (localStorage.getItem("currentvideo")) {
      let continueWatching = JSON.parse(localStorage.getItem("currentvideo"))
      playerRef.currentTime = (continueWatching.playFrom);
    }
  })

  createEffect(() => {
    setTime(playerRef.currentTime)
    setCurrentVideo({
      video: videoPath(),
      sub: subPath(),
      playFrom: time()
    })
  })

  const handleSetDuration = () => {
    setDuration(playerRef.duration);
  };
  const handleTimeUpdate = () => {
    setTime(playerRef.currentTime)
  };
  const handleSeek = () => {
    setSeektime(playerRef.currentTime)
    playerRef.pause()
  }


  onCleanup(() => {
    localStorage.setItem('currentvideo', JSON.stringify(currentVideo()))
    if (localStorage.getItem("usingStreaks")) {
      updateStreak()
    }
  })

  return (
    <>
      <div class="vw-100 d-flex flex-column ">
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
          class="h-100 w-100"
          src={videoPath()}
        />

        <Subtitles
          subfile={subPath()}
          time={time()} duration={duration()} seektime={seektime()} />

      </div>
    </>
  );
};
