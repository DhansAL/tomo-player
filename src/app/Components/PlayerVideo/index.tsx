import { Badge, Button } from "solid-bootstrap";
import { Component, createEffect, createSignal, onCleanup, onMount } from "solid-js";
import { updateStreak } from "../../modules/streak/streak";
import { Subtitles } from "../Subtitles";
import { fileFolderStore } from "../../store/FileFolder";
import screenfull from "screenfull";

/**
 * The parent player component. gets the path of video from context and 
 * handles ref of video.
 */
type PlayerProps = {
}

type CurrentVideo = {
  video: string;
  sub: string;
  playFrom: number;
}

export const PlayerVideo: Component = (props: PlayerProps) => {
  //ref - works like this in solid

  let playerRef: HTMLVideoElement;

  let playerContainerRef: HTMLDivElement
  //TODO: make one obj signal
  const [time, setTime] = createSignal(0);
  const [duration, setDuration] = createSignal(0);
  const [seektime, setSeektime] = createSignal(0);
  const [videoPath, setVideoPath] = createSignal(fileFolderStore.getState().path);
  const [subPath, setSubPath] = createSignal(fileFolderStore.getState().subfilePath);
  const [currentVideo, setCurrentVideo] = createSignal<CurrentVideo>(null)

  //continue from functionality
  onMount(() => {
    if (localStorage.getItem("currentvideo") && fileFolderStore().lastWatch) {
      let continueWatching = JSON.parse(localStorage.getItem("currentvideo"))
      playerRef.currentTime = (continueWatching.playFrom);
    }
    screenfull.toggle(playerContainerRef)
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
    fileFolderStore.setState({
      name: "",
      subfilePath: "",
      path: "",
      lastModified: 0,
      size: 0,
      lastWatch: false
    })
  })

  return (
    <>

      <div class="d-flex flex-column" ref={playerContainerRef}>
        <video
          controls
          id="player"
          ondurationchange={handleSetDuration}
          onseeked={handleSeek}
          ref={playerRef}
          onTimeUpdate={handleTimeUpdate}
          class="h-100 w-100"
          src={videoPath()}
        />
        <div className="d-flex w-100 cursor-pointer" style="left:8px ;position:absolute; top: 10px" >
          <Badge
            as='span'
            bg="secondary"
            text="light">
            <a href="#" class="text-decoration-none text-light">back</a>
          </Badge>
        </div>

        <div className="d-flex w-100" style="height:auto; position: absolute; top: 720px" >
          <Subtitles
            subfile={subPath()}
            time={time()} duration={duration()} seektime={seektime()} />
        </div>
      </div>
    </>
  );
};
