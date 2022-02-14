import { Button } from "solid-bootstrap";
import { Component, createEffect, createSignal, onCleanup } from "solid-js";
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
  const handleFullscreen = () => {
    screenfull.toggle(playerContainerRef)
  }



  onCleanup(() => {
    localStorage.setItem('currentvideo', JSON.stringify(currentVideo()))
    if (localStorage.getItem("usingStreaks")) {
      updateStreak()
    }
  })

  return (
    <>
      <div class="vw-100 bg-dark d-flex flex-column">
        < Button variant="secondary" class=" w-100">
          <a href="#" class="text-light text-decoration-none  text-center" >
            <h6>⬅ GO BACK</h6>
          </a>
        </ Button>

        <div className="d-flex flex-column" ref={playerContainerRef}>
          <video
            controls
            // controlsList="nodownload nofullscreen noremoteplayback"
            id="player"
            ondurationchange={handleSetDuration}
            onseeked={handleSeek}
            ref={playerRef}

            onTimeUpdate={handleTimeUpdate}
            class="h-100 w-100"
            src={videoPath()}
          />
          <div style="width:100%; height: 50px; position: absolute; top: 45px" class="d-flex justify-content-end">
            <div className="m-2 text-light" onclick={handleFullscreen}>fullscreen🔳</div>
          </div>

          {/* <div style="border:2px solid red;width:100%; height: 50px; position: absolute; top: 495px" class="d-flex flex-column">
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <div className="m-1">⏯</div>
                <div className="m-1 ">23:23</div>

              </div>
              <div className="d-flex">
                <div className="m-1">🔊</div>
                <div className="m-1" onclick={handleFullscreen}>🔳</div>
                <div className="m-1">❓</div>

              </div>
            </div>
            <input type="range" min={0} max={100} />
          </div> */}
          <div className="d-flex w-100" style=" height: auto; position: absolute; top: 720px; left: 0px" >
            <Subtitles
              subfile={subPath()}
              // subfile="E:\\voracious animes\\steins gate\\1.srt"
              time={time()} duration={duration()} seektime={seektime()} />
          </div>


        </div>


      </div>
    </>
  );
};
