import { createEffect, createSignal, For, useContext } from "solid-js"
import { checkDroppedFile } from "../../../modules/droppedCheck/checkDroppedFile";
import { LibraryContext } from "../../../Contexts/LibraryContext"
import { ListGroup } from "solid-bootstrap";

export const MediaSubsList = () => {
    const collectionPath = useContext(LibraryContext)

    const [filesInCollection, setFilesInCollection] = createSignal<string[]>();
    const [videoFiles, setVideoFiles] = createSignal<string[]>();
    const [subFiles, setSubFiles] = createSignal<string[]>();

    createEffect(() => {
        handleMediaSubs()
    })

    const handleMediaSubs = async () => {
        if (collectionPath.pathOfCollection() !== null) {
            //@ts-expect-error
            let files = await window.api.filesInCollection(collectionPath.pathOfCollection())
            setFilesInCollection(files)
            console.log(filesInCollection());

            // filterFiles
            //TODO: put this all in config and use regex maybe
            let video = filesInCollection().filter(video => video.includes(".mp4") ||
                video.includes(".3gp") ||
                video.includes(".avi") ||
                video.includes(".mkv") ||
                video.includes(".webm"))
            setVideoFiles(video)
            console.log(videoFiles(), "videoFiles");

            let sub = filesInCollection().filter(sub => sub.includes(".ass") || sub.includes(".srt") || sub.includes(".vtt"))
            setSubFiles(sub);
            console.log(subFiles(), "subfiles");
        }
    }


    return (
        <div>
            <div style={{ background: "green" }}>
                <h4> VideoFiles in this collection</h4>
                <div style={{ height: "200px", overflow: "scroll" }}>
                    <ListGroup>
                        <For each={videoFiles()}>
                            {
                                (video, i) =>
                                    <>
                                        <ListGroup.Item style={{ cursor: "pointer" }}>
                                            <span  >{video}</span>
                                        </ListGroup.Item>
                                    </>
                            }
                        </For>
                    </ListGroup>
                </div>
                <hr />
                <h4> Subfiles in this collection</h4>

                <div style={{ height: "200px", overflow: "scroll" }}>
                    <ListGroup>
                        <For each={subFiles()}>
                            {
                                (sub, i) =>
                                    <>
                                        <ListGroup.Item style={{ cursor: "pointer" }}>
                                            <span  >{sub}</span>
                                        </ListGroup.Item>
                                    </>
                            }
                        </For>
                    </ListGroup>
                </div>
            </div>
        </div>
    )
}
