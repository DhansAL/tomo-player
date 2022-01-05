import { createSignal, useContext } from "solid-js";
import { FileFolderContext } from "../../Contexts/FileContext";

export const PlayerVideo = () => {
    let  videoRef ;
    // context api
  const globalFileProperties = useContext(FileFolderContext);
  let videoPath = globalFileProperties.propertiesForAll().path;



    return (
        <div>
            <h1>player yo {videoPath}</h1>
        {
            videoPath==""?null: 
               <video
            id="video1"
            ref={videoRef}
            src ={videoPath}
          >

          </video>
        }
        </div>
    )
}
