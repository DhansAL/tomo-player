import { Layout } from "../Components/Layout";
import { useContext } from "solid-js";
import { FileFolderContext } from "../Contexts/FileFolderContext";
import { PlayerVideo } from "../Components/PlayerVideo";

export const Player = () => {
  // context api
  const globalFileProperties = useContext(FileFolderContext);
  let videoPath = globalFileProperties.propertiesForAll().path;
  const handleVideoPath = () => {
    videoPath == ""
      ? console.log("please put a path first")
      : console.log(videoPath);
  };
  return (
    <>
      <PlayerVideo />
    </>
  );
};
