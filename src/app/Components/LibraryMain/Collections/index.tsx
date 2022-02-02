import { Badge, ListGroup } from "solid-bootstrap";
import { createEffect, createSignal, For, onMount, useContext } from "solid-js";
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

    //change style of elm on click
    const [select, setselect] = createSignal("")

    const handleSendList = (path: string) => {
        collectionPath.setPathOfCollection(path);
        setselect(path)
    }

    const handleDeleteShow = (idx: number) => {
        if (localStorage.getItem("Collections")) {
            let tempArr = JSON.parse(localStorage.getItem("Collections"))

            if (tempArr.length == 1) {
                localStorage.removeItem("Collections")
                setCurrentCollection(null)
                return
            }
            tempArr.splice(idx, 1)
            localStorage.setItem("Collections", JSON.stringify(tempArr))
            setCurrentCollection(tempArr)
        }
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
                                (col, idx) =>
                                    <>
                                        <ListGroup.Item
                                            style={select() == col.path ? {
                                                cursor: "pointer",
                                                background: "#335280",
                                                color: "white"
                                            } : {
                                                cursor: "pointer",
                                            }}>
                                            <div className="d-flex justify-content-between">
                                                <span onclick={() => handleSendList(col.path)} >
                                                    {col.name}
                                                </span>
                                                <Badge class="align-items-center d-flex" onclick={() => handleDeleteShow(idx())} bg='danger'>
                                                    <span>remove</span>
                                                </Badge>

                                            </div>
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