import { createEffect, createSignal, For, useContext } from "solid-js";
import { ListGroup } from "solid-bootstrap";
import { FileFolderServed } from "../../../interfaces/FileManagement/FileFolderServed";
import { Button } from "solid-bootstrap";
import { Link } from "solid-app-router";
import { fileFolderStore } from "../../../store/FileFolder";
import { LibraryStore } from "../../../store/LibraryCollection";

export const MediaSubsList = () => {
  const collectionPath = LibraryStore.getState().collectionPath;
  const [currentCollection, setCurrentCollection] = createSignal();

  const [filesInCollection, setFilesInCollection] = createSignal<string[]>();
  const [videoFiles, setVideoFiles] = createSignal<string[]>(null);
  const [subFiles, setSubFiles] = createSignal<string[]>(null);

  const [currentSub, setCurrentSub] = createSignal(null);
  const [currentVideo, setCurrentVideo] = createSignal(null);

  const [toplay, setToplay] = createSignal<FileFolderServed>({
    lastModified: 0,
    path: "",
    subfilePath: "",
    name: "",
    size: 0,
  });

  createEffect(() => {
    handleMediaSubs();
  });

  const handleMediaSubs = async () => {
    if (collectionPath.pathOfCollection() !== null) {
      setCurrentCollection(collectionPath.pathOfCollection());

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
  //style change on select
  const [selectSub, setSelectSub] = createSignal("")

  const handleSetSub = (subpath: string) => {
    setCurrentSub(subpath);
    setSelectSub(subpath)
  };

  const [selectVideo, setselectVideo] = createSignal("")
  const handleSetVideo = (videoPath: string) => {
    setCurrentVideo(videoPath);
    setselectVideo(videoPath)

  };


  const setToPlayer = () => {
    try {
      if (currentSub() !== null && currentVideo() !== null) {
        setToplay({
          lastModified: 0,
          name: "",
          size: 0,
          path: `${currentCollection()}\\${currentVideo()}`,
          subfilePath: `${currentCollection()}\\${currentSub()}`,
        });
        fileFolderStore.setState(toplay())
        console.log(fileFolderStore.getState(), "in store, set to play");

      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div style={{ background: "#2e3b4e" }}>
        {currentSub() !== null && currentVideo() !== null ? (
          <Button
            style={{ width: "100%" }}
            variant="success"
            onClick={setToPlayer}
          >
            <Link class="text-light text-decoration-none" href="/player">
              Play▶
            </Link>
          </Button>
        ) : (
          <Button style={{ width: "100%" }} variant="warning">
            Select episode and subtitle
          </Button>
        )}

        <h4 class="text-light  p-2">Shows</h4>
        <hr class="text-light" />

        <div style={{ height: "250px", overflow: "scroll" }}>
          {videoFiles() === null ? (
            <div class="m-3 p3">
              <h5 class="text-muted ">Click the desired show </h5>
              <small class="text-light">select episode to play</small>
            </div>
          ) : (
            <ListGroup>
              <For each={videoFiles()}>
                {(video, i) => (
                  <>
                    <ListGroup.Item style={selectVideo() == video ? {
                      cursor: "pointer", background: "#0c4b36 ",
                      color: "white"
                    } : { cursor: "pointer" }}>
                      <span onclick={() => handleSetVideo(video)}>{video}</span>
                    </ListGroup.Item>
                  </>
                )}
              </For>
            </ListGroup>
          )}
        </div>
        <hr />
        <h4 class="text-light  p-2"> Subtitles</h4>
        <hr class="text-light" />

        <div style={{ height: "250px", overflow: "scroll" }}>
          {videoFiles() === null ? (
            <div class="m-3 p3">
              <h5 class="text-muted ">Click the desired subtitle </h5>
              <small class="text-light">
                make sure your subtitle matches your show{" "}
              </small>
            </div>
          ) : (
            <ListGroup>
              <For each={subFiles()}>
                {(sub, i) => (
                  <>
                    <ListGroup.Item style={selectSub() == sub ? {
                      cursor: "pointer", background: "#0c4b36",
                      color: "white"
                    } : { cursor: "pointer" }}>
                      <span onclick={() => handleSetSub(sub)}>{sub}</span>
                    </ListGroup.Item>
                  </>
                )}
              </For>
            </ListGroup>
          )}
        </div>
      </div>
    </div>
  );
};
