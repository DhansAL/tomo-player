import { createEffect, createSignal, For, useContext } from "solid-js";
import { LibraryContext } from "../../../Contexts/LibraryContext";
import { ListGroup } from "solid-bootstrap";
import { FileFolderServed } from "../../../interfaces/FileManagement/FileFolderServed";
import { Button } from "solid-bootstrap";
import { FileFolderContext } from "../../../Contexts/FileFolderContext";

export const MediaSubsList = () => {
  const collectionPath = useContext(LibraryContext);
  const [currentCollection, setCurrentCollection] = createSignal()

  const [filesInCollection, setFilesInCollection] = createSignal<string[]>();
  const [videoFiles, setVideoFiles] = createSignal<string[]>();
  const [subFiles, setSubFiles] = createSignal<string[]>();

  const [currentSub, setCurrentSub] = createSignal(null);
  const [currentVideo, setCurrentVideo] = createSignal(null);



  const [toplay, setToplay] = createSignal<FileFolderServed>({
    lastModified: 0,
    path: "",
    subfilePath: "",
    name: "",
    size: 0
  });

  createEffect(() => {
    handleMediaSubs();
  });

  const handleMediaSubs = async () => {
    if (collectionPath.pathOfCollection() !== null) {
      setCurrentCollection(collectionPath.pathOfCollection())

      //@ts-expect-error
      let files = await window.api.filesInCollection(
        collectionPath.pathOfCollection()
      );
      setFilesInCollection(files);

      // filterFiles
      //TODO: put this all in config and use regex maybe
      let video = filesInCollection().filter(
        (video) =>
          video.includes(".mp4") ||
          video.includes(".3gp") ||
          video.includes(".avi") ||
          video.includes(".mkv") ||
          video.includes(".webm")
      );
      setVideoFiles(video);

      let sub = filesInCollection().filter(
        (sub) =>
          sub.includes(".ass") || sub.includes(".srt") || sub.includes(".vtt")
      );
      setSubFiles(sub);
    }
  };

  const handleSetSub = (subpath: string) => {
    setCurrentSub(subpath);
  };

  const handleSetVideo = (videoPath: string) => {
    setCurrentVideo(videoPath);
  };

  const globalFileProperties = useContext(FileFolderContext);

  const setToPlayer = () => {
    try {
      if (currentSub() !== null && currentVideo() !== null) {
        setToplay({
          lastModified: 0,
          name: "",
          size: 0,
          path: `${currentCollection()}\\${currentVideo()}`,
          subfilePath: `${currentCollection()}\\${currentSub()}`
        })
        globalFileProperties.setPropertiesForAll(toplay())
        console.log(globalFileProperties.propertiesForAll(), "in context");

      }
    } catch (error) {
      console.log(error);

    }
  }


  return (
    <div>
      <div style={{ background: "green" }}>
        <Button variant="success" onClick={setToPlayer}>set ep and subs</Button>
        <h4> VideoFiles in this collection</h4>
        <div style={{ height: "200px", overflow: "scroll" }}>
          <ListGroup>
            <For each={videoFiles()}>
              {(video, i) => (
                <>
                  <ListGroup.Item style={{ cursor: "pointer" }}>
                    <span onclick={() => handleSetVideo(video)}>{video}</span>
                  </ListGroup.Item>
                </>
              )}
            </For>
          </ListGroup>
        </div>
        <hr />
        <h4> Subfiles in this collection</h4>

        <div style={{ height: "200px", overflow: "scroll" }}>
          <ListGroup>
            <For each={subFiles()}>
              {(sub, i) => (
                <>
                  <ListGroup.Item style={{ cursor: "pointer" }}>
                    <span onclick={() => handleSetSub(sub)}>{sub}</span>
                  </ListGroup.Item>
                </>
              )}
            </For>
          </ListGroup>
        </div>
      </div>
    </div>
  );
};
