import { Badge } from "solid-bootstrap";
import { createSignal, onMount } from "solid-js";
import { fileFolderStore } from "../../../../store/FileFolder";

/**
 * sets the last played video and sub path as current which are mounted on player cleanup
 * stored in Localstorage 
 * 
 */
export const ContinuePlay = () => {
    const [currentPlayInLs, setCurrentPlayInLs] = createSignal(null)
    const [videoName, setVideoName] = createSignal("")

    onMount(() => {
        if (localStorage.getItem("currentvideo") != null) {
            setCurrentPlayInLs(true)
            let name = JSON.parse(localStorage.getItem("currentvideo"))
            // TODO: splice the string
            setVideoName(name.video)
        }
    })

    const handleContinueWatching = () => {
        let continueWatching = JSON.parse(localStorage.getItem("currentvideo"))
        fileFolderStore.setState({
            name: "",
            subfilePath: continueWatching.sub,
            path: continueWatching.video,
            lastModified: 0,
            size: 0,
            lastWatch:true
        })
        console.log(fileFolderStore.getState(), "values in store for continue watching");
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
