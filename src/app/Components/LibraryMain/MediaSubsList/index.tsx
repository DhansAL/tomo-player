import { createSignal, useContext } from "solid-js"
import { LibraryContext } from "../../../Contexts/LibraryContext"

export const MediaSubsList = () => {
    const collectionPath = useContext(LibraryContext)

    const [filesInCollection, setFilesInCollection] = createSignal<string[]>();

    const handleClick = async () => {
        //@ts-expect-error
        let files = await window.api.filesInCollection(collectionPath.pathOfCollection())
        setFilesInCollection(files)
        console.log(filesInCollection());

    }

    return (
        <div>
            <button onclick={handleClick}>check the files to be filtered</button>
            <div style={{ background: "green" }}>
                MEDIA&SUBS
            </div>
        </div>
    )
}
