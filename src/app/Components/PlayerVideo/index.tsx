import { createSignal, useContext } from "solid-js";
import { FileFolderContext } from "../../Contexts/FileContext";

export const PlayerVideo = () => {
    let  videoRef ;
    // context api
  const globalFileProperties = useContext(FileFolderContext);
  let videoPath = globalFileProperties.propertiesForAll().path;
  const handleVideoPath = () => {
    videoPath == ""
      ? console.log("please put a path first")
      : console.log("your video is ready to play");
      
    //   globalFileProperties.propertiesForAll().name
    //   globalFileProperties.propertiesForAll().path
    //   globalFileProperties.propertiesForAll().lastModified
    //   globalFileProperties.propertiesForAll().type
  };


    return (
        <div>
            <h1>player yo {videoPath}</h1>
        {
            videoPath==""?null: 
               <video
            id="video1"
            ref={videoRef}
            // file:///C:/Users/DHANANJAY/Favorites/Links/450.lnk
            src ={videoPath}
          >

          </video>
        }

      {/* <div className="controlsContainer">
        <div className="controls">
          <img
            onClick={revert}
            className="controlsIcon"
            alt=""
            src="/backward-5.svg"
          />
          {playing ? (
            <img
              onClick={() => videoHandler("pause")}
              className="controlsIcon--small"
              alt=""
              src="/pause.svg"
            />
          ) : (
            <img
              onClick={() => videoHandler("play")}
              className="controlsIcon--small"
              alt=""
              src="/play.svg"
            />
          )}
          <img
            className="controlsIcon"
            onClick={fastForward}
            alt=""
            src="/forward-5.svg"
          />
        </div>
      </div>

      <div className="timecontrols">
        <p className="controlsTime">
          {Math.floor(currentTime / 60) +
            ":" +
            ("0" + Math.floor(currentTime % 60)).slice(-2)}
        </p>
        <div className="time_progressbarContainer">
          <div
            style={{ width: `${progress}%` }}
            className="time_progressBar"
          ></div>
        </div>
        <p className="controlsTime">
          {Math.floor(videoTime / 60) +
            ":" +
            ("0" + Math.floor(videoTime % 60)).slice(-2)}
        </p> */}
      {/* </div> */}
        </div>
    )
}
