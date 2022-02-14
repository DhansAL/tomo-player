import { Alert, Button, Container } from "solid-bootstrap";
import { Component, createSignal, onMount, useContext } from "solid-js";
import { checkDroppedFile } from "../../../../modules/droppedCheck/checkDroppedFile";
import { FileFolderServed } from "../../../../interfaces/FileManagement/FileFolderServed";
import { fileFolderStore } from "../../../../store/FileFolder";

type DragDropProps = {
    isFile: boolean;
};
/**
 * Reusable component to get the info of dropped folder or file  .
 * checks whether dropped item is folder or file and behaves accordingly
 *
 * sets global file properties that is served to component(s)
 */

export const DragDrop: Component<DragDropProps> = (props: DragDropProps) => {
    const [properties, setProperties] = createSignal<null | FileFolderServed>(null);

    //alert utils
    //FIXME: MAKE ALERTS IN A STORE 
    //TODO: pull headings and body from configs.

    const [alertType, setAlertType] = createSignal({ variant: "danger", heading: "add something", body: "" })
    const [alert, setAlert] = createSignal<boolean>(false);

    // make localstorage for Collections
    onMount(() => {
        if (localStorage.getItem("Collections") === null) {
            let collectionArray: FileFolderServed[] = [];
            localStorage.setItem("Collections", JSON.stringify(collectionArray));
        }
    })

    const handleDragOver = (e: DragEvent) => {
        e.stopPropagation();
        e.preventDefault();
    };
    const handleDrop = async (e: DragEvent) => {
        e.stopPropagation();
        e.preventDefault();
        let infoOfDragged = e.dataTransfer.files;

        let path: string, name: string, size, lastModified, type, subpath;

        if (props.isFile) {
            try {
                //selection 1 was mediafile
                if (checkDroppedFile(true, infoOfDragged[0].name)) {
                    ({ path, lastModified, name, size, type } = infoOfDragged[0])
                    if (infoOfDragged[1].path === undefined) { }
                    subpath = infoOfDragged[1].path
                }
                //selection 2 was mediafile
                else {
                    ({ path, lastModified, name, size, type } = infoOfDragged[1])
                    subpath = infoOfDragged[0].path
                }
            } catch (error) {
                setAlert(true)
                setAlertType((current) => ({ ...current, variant: "danger", body: "You have to drop both video and subtitle file", heading: "Files are missing" }));
                return;
            }
        }
        if (!props.isFile) {
            ({ path, lastModified, name, size, type } = infoOfDragged[0])
        }

        /**
         * the main flag to throw error in case user gives file instead of folder or vice versa
         * sends the path of the dragged elemnet to main process and checks is file or not.
         */
        // @ts-expect-error
        let isFile = await window.api.isFile(path);

        switch (props.isFile + "-" + isFile) {
            case "true-true":
                //check if the file format is supported , if not alert and return & if true set the path and play the file
                if (!checkDroppedFile(true, name)) {
                    setAlert(true)
                    setAlertType((current) => ({ ...current, variant: "danger", body: `Dropped video file format is not supported right now. "${name}"`, heading: "Unsupported Video file format dropped." }));
                    break;

                }
                if (subpath === null || undefined) {
                    setAlert(true)
                    setAlertType((current) => ({ ...current, variant: "danger", body: `where's the subfile bro?`, heading: "Missing subfile." }));
                }

                setProperties({
                    name,
                    path,
                    size,
                    lastModified,
                    type,
                    subfilePath: subpath,
                    lastWatch: false
                });
                setAlert(true)
                setAlertType((current) => ({ ...current, variant: "success", body: `File dropped successfully!.File dropped successfully. You dropped "${path}"`, heading: "File sucessfully dropped." }));

                break;

            case "false-false":
                //goes to collection 
                setProperties({
                    name,
                    path,
                    size,
                    lastModified,
                    lastWatch: false
                });
                setAlert(true)
                setAlertType((current) => ({ ...current, variant: "success", body: `Folder dropped successfully!.Try accessing the folder in your collection. You dropped "${path}"`, heading: "Folder sucessfully dropped." }));
                break;
            //asked file sent folder
            case "true-false":
                setAlert(true)
                setAlertType((current) => ({ ...current, variant: "warning", body: `you are supposed to drop a file here. You dropped "${path}"`, heading: "OOPS! you dropped a Folder here" }));
                break;
            //asked folder sent file
            case "false-true":
                setAlert(true)
                setAlertType((current) => ({ ...current, variant: "warning", body: `you are supposed to drop folder here. You dropped "${path}"`, heading: "OOPS! you dropped a file here" }));
            default:
                break;
        }

    };

    const handleSetGlobalProperties = () => {
        try {
            if (properties() === null) {
                setAlert(true);
                setAlertType((current) => ({ ...current, variant: "warning", body: `You didn't selected anything. try selecting a file or a directory `, heading: "OOPS! got some error eh?" }));
                return
            } else {
                if (!props.isFile) {
                    fileFolderStore.setState(properties());
                    console.log(fileFolderStore.getState(), "in store for collections");

                    //push in localstorage collection
                    if (localStorage.getItem("Collections")) {
                        let arr = JSON.parse(localStorage.getItem("Collections"))
                        arr.push(properties());
                        localStorage.setItem("Collections", JSON.stringify(arr))
                    }

                    setProperties(null)
                } else {
                    fileFolderStore.setState(properties());
                    console.log(fileFolderStore.getState(), "in store for files");
                    setProperties(null)

                }
            }

        } catch (error) {
            setAlert(true);
            setAlertType((current) => ({ ...current, variant: "secondary", body: `unknown error${error}`, heading: "Unknown error" }));
            console.log(error);
        }
    };



    return (
        <div className="up">
            {alert() ? (
                <>
                    <Container fluid >
                        <Alert variant={alertType().variant} dismissible transition onClose={() => setAlert(false)}>
                            <Alert.Heading>{alertType().heading}</Alert.Heading>
                            <p>
                                {alertType().body}
                            </p>
                        </Alert>
                    </Container>
                </>
            ) : null}

            <div
                id="dropzone"
                style={{
                    borderRadius: "10px",
                    margin: "10px auto",
                    width: "inherit",
                    height: "53vh",
                }}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
            >
                {props.isFile ? <h1>Drop to play</h1> : <h1>Drop Folder which contains shows and subfiles</h1>}
                <div>
                    <div class="d-flex flex-column m-3 p-2">
                        {
                            props.isFile
                                ?
                                <>
                                    name: <p class="text-info">{properties() ? properties().name : ""}</p>
                                    subfile path: <p class="text-info">{properties() ? properties().subfilePath : ""}</p>
                                    path: <p class="text-info">{properties() ? properties().path : ""}</p>
                                    type: <p class="text-info">{properties() ? properties().type : ""}</p>
                                </>

                                : <>
                                    <div>  name: <p class="text-info">{properties() ? properties().name : ""}</p></div>
                                    <div> path: <p class="text-info">{properties() ? properties().path : ""}</p></div>
                                </>

                        }
                    </div>
                    {props.isFile ? (
                        <>
                            {/* FIXME: set a flag in onclick to move to player after getting properties */}
                            <Button variant="success" onclick={handleSetGlobalProperties}>Set</Button>
                            <Button href="#player" variant="secondary">play now</Button>

                        </>

                    ) : (
                        <Button variant="success" onclick={handleSetGlobalProperties}>{props.isFile ? "Play Now" : "Add To Collection"}</Button>
                    )
                    }
                </div>
            </div>
        </div >
    );
};