import { createEffect, createSignal, useContext } from "solid-js";
import { FileFolderContext } from
    "../../../Contexts/FileFolderContext";

export const Collections = () => {
    const globalFolderProperties = useContext(FileFolderContext);
    //FIXME: when the modal is closed rerender the component.
    const [n, sn] = createSignal("")
    const handle = () => {
        sn((globalFolderProperties.propertiesForAll().name))
        console.log(globalFolderProperties.propertiesForAll());
    }
    createEffect(() => {
        sn((globalFolderProperties.propertiesForAll().name));
    })
    return (
        <div>
            {/* <button onclick={fetchContext}>check the context values</button> */}
            <button onclick={handle}>force update</button>
            <div style={{ background: "green" }}>
                COLLECTIONS
                name: {n()}
            </div>
        </div>
    )
}
