import { createEffect, createSignal, useContext } from "solid-js"
import { checkDroppedFile } from "../../../modules/droppedCheck/checkDroppedFile";
import { LibraryContext } from "../../../Contexts/LibraryContext"

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
                MEDIA&SUBS
            </div>
        </div>
    )
}
