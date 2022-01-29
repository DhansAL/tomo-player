import { Badge } from "solid-bootstrap";
import { useContext } from "solid-js";
import { FileFolderContext } from "../../../../Contexts/FileFolderContext";

export const ContinuePlay = () => {

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
            <h5 class="text-light">Continue watching</h5>
            <Badge onclick={handleContinueWatching} style={{ cursor: "pointer" }} bg="info"><a class="text-decoration-none text-light" href="#player">kanojo okarishimasu ▶</a></Badge>

        </div>
    </>
};
