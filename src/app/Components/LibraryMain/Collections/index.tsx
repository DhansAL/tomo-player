import { createEffect, createSignal, createUniqueId, onMount, useContext } from "solid-js";
import { FileFolderServed } from "../../../interfaces/FileManagement/FileFolderServed";
import { FileFolderContext } from
    "../../../Contexts/FileFolderContext";
// import { CollectionList } from "../../../data/Collections/Collections";

export const Collections = () => {
    const globalFolderProperties = useContext(FileFolderContext);
    //as we get the collection name we push that on local storage
    const [currentCollection, setCurrentCollection] = createSignal<FileFolderServed | null>(null)

    // get collection name and then
    onMount(() => {
        if (globalFolderProperties.propertiesForAll().name !== "") {
            setCurrentCollection(globalFolderProperties.propertiesForAll())
            console.log(currentCollection(), "currently in library");
            // console.log(CollectionList);

        }

        // CollectionList.push({
        // })
    })

    //FIXME: when the modal is closed rerender the component.

    return (
        <div>
            {/* <button onclick={fetchContext}>check the context values</button> */}
            <div style={{ background: "green" }}>
                current collection = {JSON.stringify(currentCollection())}
            </div>
        </div>
    )
}
