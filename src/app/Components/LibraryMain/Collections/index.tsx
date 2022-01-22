import { ListGroup } from "solid-bootstrap";
import { createSignal, For, onMount, useContext } from "solid-js";
import { LibraryContext } from "../../../Contexts/LibraryContext";
import { FileFolderServed } from "../../../interfaces/FileManagement/FileFolderServed";

export const Collections = () => {

    const collectionPath = useContext(LibraryContext);

    const [currentCollection, setCurrentCollection] = createSignal<FileFolderServed[]>(null)
    onMount(() => {
        if (localStorage.getItem("Collections")) {
            setCurrentCollection(JSON.parse(localStorage.getItem("Collections")))
        }
    })

    const handleSendList = (path: string) => {
        collectionPath.setPathOfCollection(path);

    }
    return (
        <div>
            <div style={{ background: "#2e3b4e" }}>
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
                                (col, i) =>
                                    <>
                                        <ListGroup.Item
                                            style={{
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
