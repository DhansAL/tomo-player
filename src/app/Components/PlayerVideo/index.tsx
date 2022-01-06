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
               <img
            id="video1"
            ref={videoRef}
            src ={`https://www.gstatic.com/webp/gallery/4.sm.jpg`}
          >

          </img>
        }
        </div>
    )
}
