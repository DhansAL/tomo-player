import { Layout } from "../Components/Layout";
import { useContext } from "solid-js";
import { FileFolderContext } from "../Contexts/FileContext";
import { PlayerVideo } from "../Components/PlayerVideo";

export const Player = () => {
  // context api
  const globalFileProperties = useContext(FileFolderContext);
  let videoPath = globalFileProperties.propertiesForAll().path;
  const handleVideoPath = () => {
    videoPath == ""
      ? console.log("please put a path first")
      : console.log(videoPath);

    //   globalFileProperties.propertiesForAll().name
    //   globalFileProperties.propertiesForAll().path
    //   globalFileProperties.propertiesForAll().lastModified
    //   globalFileProperties.propertiesForAll().type
  };
  return (
    //TODO: handle single video player and subtitles
    <>
        <Layout />
      {/* <div>
        player will test context
        <button onclick={handleVideoPath}>check the context values</button>
      </div> */}
      <PlayerVideo />
    </>
  );
};
