import { ListGroup } from "solid-bootstrap";
import { createSignal, For, onMount } from "solid-js";
import { LibraryStore } from "../../../store/LibraryCollection";
import { FileFolderServed } from "../../../interfaces/FileManagement/FileFolderServed";

export const Collections = () => {

    const collectionPath = LibraryStore.getState().collectionPath;

    const [currentCollection, setCurrentCollection] = createSignal<FileFolderServed[]>(null)
    onMount(() => {
        if (localStorage.getItem("Collections")) {
            setCurrentCollection(JSON.parse(localStorage.getItem("Collections")))
        }
    })

    //change style of elm on click
    const [select, setselect] = createSignal("")

    const handleSendList = (path: string) => {
        collectionPath.setPathOfCollection(path);
        setselect(path)
    }

    return (
        <div>
            <div style={{ background: "#2e3b4e", height: "85vh", overflow: "scroll" }}>
                <h4 class="text-light  p-2">Collections</h4>
                <hr class="text-light" />
                <ListGroup>
                    {currentCollection() === null ? <>
                        <div class="m-3 p3">
                            <h5 class="text-muted ">Try adding some shows ^_^ </h5>
                            <span class="text-light">You can add shows in overview section</span>
                        </div>
                    </> : (
                        <For each={currentCollection()}>

                            {
                                (col) =>
                                    <>
                                        <ListGroup.Item
                                            style={select() == col.path ? {
                                                cursor: "pointer",
                                                background: "#335280",
                                                color: "white"
                                            } : {
                                                cursor: "pointer",
                                            }}>
                                            <span onclick={() => handleSendList(col.path)} >
                                                {col.name}
                                            </span>
                                        </ListGroup.Item>
                                    </>
                            }
                        </For>
                    )}

                </ListGroup>

            </div >
        </div >
    )
}
