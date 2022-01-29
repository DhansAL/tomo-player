import { Badge } from "solid-bootstrap";
import { createSignal, onMount, useContext } from "solid-js";
import { FileFolderContext } from "../../../../Contexts/FileFolderContext";

export const ContinuePlay = () => {
    const [currentPlayInLs, setCurrentPlayInLs] = createSignal(null)
    const [videoName, setVideoName] = createSignal("")

    onMount(() => {
        if (localStorage.getItem("currentvideo") != null) {
            setCurrentPlayInLs(true)
            let name = JSON.parse(localStorage.getItem("currentvideo"))
            setVideoName(name.video)

        }
    })

    const globalFileProperties = useContext(FileFolderContext);
    const handleContinueWatching = () => {
        let continueWatching = JSON.parse(localStorage.getItem("currentvideo"))
        globalFileProperties.setPropertiesForAll({
            name: "",
            subfilePath: continueWatching.sub,
            path: continueWatching.video, lastModified: 0, size: 0
        })
        console.log(globalFileProperties.propertiesForAll(), "values in context,continue watching");
    }

    return <>
        <div class="m-3" >
            {
                currentPlayInLs() ? (
                    <>
                        <h5 class="text-light">Continue watching</h5>
                        <Badge onclick={handleContinueWatching} style={{ cursor: "pointer" }} bg="info"><a class="text-decoration-none text-light" href="#player">play {videoName()} ▶</a></Badge></>
                )
                    : (
                        <>
                            <h5 class="text-light">Continue watching ▶</h5>
                            <p class="text-decoration-none text-muted">play something first</p>
                        </>
                    )
            }



        </div>
    </>
};
