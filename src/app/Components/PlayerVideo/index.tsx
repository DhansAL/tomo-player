import { Button } from "solid-bootstrap";
import { createEffect, createSignal, onCleanup } from "solid-js";
import { updateStreak } from "../../modules/streak/streak";
import { Subtitles } from "../Subtitles";
import { fileFolderStore } from "../../store/FileFolder";
import screenfull from "screenfull";

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
  let playerContainerRef: HTMLDivElement
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
            style={{ border: 'solid 2px red' }}
            controls
            id="player"
            ondurationchange={handleSetDuration}
            onseeked={handleSeek}
            ref={playerRef}

            onTimeUpdate={handleTimeUpdate}
            class="h-100 w-100"
            src={videoPath()}
          />
          <div style=" height: 40px; position: absolute; top: 695px; left: 1400px" >

            <button onClick={handleFullscreen}>fullscreen</button>
          </div>
          {/* <div ref={divref} style="width: 100px; height: 30px; color: white; z-index: 232232323231; position: absolute; top: 700px; left: 0px; background: green;">test</div> */}
          <div className="d-flex w-100" style=" height: 40px; position: absolute; top: 720px; left: 0px" >
            <Subtitles
              subfile={subPath()}
              time={time()} duration={duration()} seektime={seektime()} />
          </div>


        </div>


      </div>
    </>
  );
};
