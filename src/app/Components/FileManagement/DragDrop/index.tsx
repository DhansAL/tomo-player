import { Alert, Container } from "solid-bootstrap";
import { Component, createSignal, useContext } from "solid-js";
import { checkDroppedFile } from "../../../modules/droppedCheck/checkDroppedFile";
import { FileFolderContext } from "../../../Contexts/FileFolderContext";
import { FileFolderServed } from "../../../interfaces/FileManagement/FileFolderServed";

type DragDropProps = {
    isFile: boolean;
};
/**
 * Reusable component to get the info of dropped folder or file  .
 * //TODO: use this as a popover onClick
 * checks whether dropped item is folder or file and behaves accordingly
 *
 * sets PropertiesForAll(contextApi) of file or folder served to component(s)
 */

export const DragDrop: Component<DragDropProps> = (props: DragDropProps) => {
    const [properties, setProperties] = createSignal<null | FileFolderServed>(
        null
    );

    //alert utils
    //FIXME: MAKE ALERTS IN A STORE AND PUT A DEFAULT SET CASE WHICH IS TO BE SET AFTER EACH ALERT.
    const [alertType, setAlertType] = createSignal({ variant: "danger", heading: "add something", body: "" })
    const [errorAlert, setAlert] = createSignal<boolean>(false);

    const handleDragOver = (e: DragEvent) => {
        e.stopPropagation();
        e.preventDefault();
    };
    const handleDrop = async (e: DragEvent) => {
        e.stopPropagation();
        e.preventDefault();
        let infoOfDragged = e.dataTransfer.files;

        let path: string, name: string, size, lastModified, type, subpath;

        //selection 1 is mediafile
        try {
            if (checkDroppedFile(true, infoOfDragged[0].name)) {
                ({ path, lastModified, name, size, type } = infoOfDragged[0])
                if (infoOfDragged[1].path === undefined) { }
                subpath = infoOfDragged[1].path
            }
            //selection 2 is mediafile
            else {
                ({ path, lastModified, name, size, type } = infoOfDragged[1])
                subpath = infoOfDragged[0].path
            }
        } catch (error) {
            setAlert(true)
            setAlertType((current) => ({ ...current, variant: "danger", body: "please drop all the requiered files.", heading: "Files are missing" }));
            return;
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
                    setAlertType((current) => ({ ...current, variant: "danger", body: `Dropped file format is not supported right now. "${name}"`, heading: "Unsupported file format dropped." }));
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
                });
                setAlert(true)
                setAlertType((current) => ({ ...current, variant: "success", body: `Folder dropped successfully!.Try acessing the folder in your collection. You dropped "${path}"`, heading: "Folder sucessfully dropped." }));
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

        console.log(properties());
    };

    // context api
    const globalFileProperties = useContext(FileFolderContext);
    const handleSetGlobalProperties = () => {
        try {
            globalFileProperties.propertiesForAll().name = properties().name;
            globalFileProperties.propertiesForAll().path = properties().path;
            globalFileProperties.propertiesForAll().lastModified = properties().lastModified;
            globalFileProperties.propertiesForAll().type = properties().type;
            globalFileProperties.propertiesForAll().subfilePath = properties().subfilePath;
            console.log(globalFileProperties.propertiesForAll(), "values in context");
            //save global properties and delete local input
            setProperties(
                null
            )
        } catch (error) {
            setAlert(true);
            console.log(error);
        }
    };



    return (
        <div className="up">
            {errorAlert() ? (
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
                    width: "55vw",
                    height: "50vh",
                    border: "3px dotted crimson",
                }}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
            >
                {props.isFile ? "drop the show to play" : "Drop Folder of your shows"}
                <div >
                    <div>
                        name :
                        {properties() != null
                            ? properties().name
                            : "name of file or folder"}
                    </div>
                    <div>
                        path:
                        {properties() != null
                            ? properties().path
                            : "path of file or folder"}
                    </div>
                    <div>
                        type:
                        {properties() != null ? properties().type : "type"}
                    </div>
                    <div>

                        {props.isFile && properties() != null ? properties()?.subfilePath : "type"}
                    </div>
                    <div>
                        <button onclick={handleSetGlobalProperties}>set this file to play</button>
                    </div>
                </div>
            </div>
        </div >
    );
};