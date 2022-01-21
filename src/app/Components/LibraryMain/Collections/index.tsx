import { ListGroup } from "solid-bootstrap";
import { createSignal, For, onMount, useContext } from "solid-js";
import { LibraryContext } from "../../../Contexts/LibraryContext";
import { FileFolderServed } from "../../../interfaces/FileManagement/FileFolderServed";

export const Collections = () => {

    const collectionPath = useContext(LibraryContext);

    const [currentCollection, setCurrentCollection] = createSignal<FileFolderServed[]>()
    onMount(() => {
        if (localStorage.getItem("Collections")) {
            setCurrentCollection(JSON.parse(localStorage.getItem("Collections")))
        }
    })
    const handleSendList = (path: string) => {
        collectionPath.setPathOfCollection(path);
        console.log(path, "in context");

    }

    return (
        <div>
            {/* <button onclick={fetchContext}>check the context values</button> */}
            <div style={{ background: "green" }}>
                <h4>collections </h4>
                <ListGroup>
                    <For each={currentCollection()}>
                        {
                            (col, i) =>
                                <>
                                    <ListGroup.Item style={{ cursor: "pointer" }}>
                                        <span onclick={() => handleSendList(col.path)} >{col.name}</span>
                                    </ListGroup.Item>
                                </>
                        }
                    </For>
                </ListGroup>

            </div>
        </div>
    )
}
