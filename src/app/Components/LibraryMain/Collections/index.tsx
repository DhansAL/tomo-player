import { createEffect, createSignal, onMount, useContext } from "solid-js";
import { FileFolderContext } from
    "../../../Contexts/FileFolderContext";

export const Collections = () => {
    const globalFolderProperties = useContext(FileFolderContext);
    //as we get the collection name we push that on local storage
    const [collections, setCollections] = createSignal([])

    // get collection name and then
    onMount(() => {
        //check if local storage exists
        // if(localStorage.getItem)


    })

    //FIXME: when the modal is closed rerender the component.

    return (
        <div>
            {/* <button onclick={fetchContext}>check the context values</button> */}
            <div style={{ background: "green" }}>
                COLLECTIONS
                name: {globalFolderProperties.propertiesForAll().name}
            </div>
        </div>
    )
}
