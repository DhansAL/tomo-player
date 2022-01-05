import { Layout } from "../Components/Layout"
import { useContext } from "solid-js";
import { FileFolderContext } from "../Contexts/FileContext";



export const Player = () => {
           // context api
  const globalFileProperties = useContext(FileFolderContext);
  let videoPath = globalFileProperties.propertiesForAll().path
  const handleVideoPath = () => {

    //   globalFileProperties.propertiesForAll().name
    //   globalFileProperties.propertiesForAll().path
    //   globalFileProperties.propertiesForAll().lastModified 
    //   globalFileProperties.propertiesForAll().type 
      console.log(typeof(videoPath));
    
}
    return (
        <div>
            <Layout/>
            player will test context
            <button onclick={handleVideoPath}>check the context values</button>
        </div>
        //TODO: handle single video player and subtitles
    )

    }