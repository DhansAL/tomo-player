import { createEffect, createSignal, useContext } from "solid-js";
import { FileFolderContext } from "../../../Contexts/FileFolderContext";

export const Collections = () => {
    const globalFolderProperties = useContext(FileFolderContext);

    const folderName = globalFolderProperties.propertiesForAll().name;
    const [name, setName] = createSignal<string>(folderName)

    //FIXME: when the modal is closed rerender the component.
    createEffect(() => {
        if (folderName !== "") {
            setName(folderName)
            console.log(name());
        }

    })

    return (
        <div>
            <div style={{ background: "green" }}>
                COLLECTIONS
                name: {name()}
            </div>
        </div>
    )
}
