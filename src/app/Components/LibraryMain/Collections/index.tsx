import { createEffect, createSignal, createUniqueId, For, onMount, useContext } from "solid-js";
import { FileFolderServed } from "../../../interfaces/FileManagement/FileFolderServed";


// FIXME: there was never a need to make the folder properties available globally lol local storage handles my stuff


//why the hell its here, shift this to dragdrop
export const Collections = () => {

    const [currentCollection, setCurrentCollection] = createSignal<FileFolderServed[]>()

    onMount(() => {
        if (localStorage.getItem("Collections")) {
            console.log("buribyuri we have localstorage");
            setCurrentCollection(JSON.parse(localStorage.getItem("Collections")))
        }
    })

    //FIXME: when the modal is closed rerender the component.

    return (
        <div>
            {/* <button onclick={fetchContext}>check the context values</button> */}
            <div style={{ background: "green" }}>
                <h1>collections cumming</h1>
                <For each={currentCollection()}>
                    {
                        (col) =>
                            <>
                                <p>{col.name}</p>
                                path:
                                <span>{col.path}</span>
                            </>
                    }
                </For>


            </div>
        </div>
    )
}
