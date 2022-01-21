import { useContext } from "solid-js"
import { LibraryContext } from "../../../Contexts/LibraryContext"

export const MediaSubsList = () => {
    const collectionPath = useContext(LibraryContext)
    const handleClick = () => {
        console.log(collectionPath.pathOfCollection(), "in context");

    }

    return (
        <div>
            <button onclick={handleClick}>check context</button>
            <div style={{ background: "green" }}>
                MEDIA&SUBS
            </div>
        </div>
    )
}
