import { Alert, Container } from "solid-bootstrap";
import { Component, createSignal, useContext } from "solid-js";
import { FileFolderContext } from "../../../Contexts/FileContext";
import "./index.css"
type DragDropProps = {
  isFile: boolean;
};
/**
 * Reusable component to get the info of dropped folder or file  .
 * checks whether dropped item is folder or file and behaves accordingly
 *
 * @returns Properties  properties of file or folder served to component(s)
 */

export const DragDrop: Component<DragDropProps> = (props: DragDropProps) => {
  //TODO: make this signal a minor notice fadeaway component which shows minor details 
  //of events , mini alert maybe
  const [properties, setProperties] = createSignal<null | FolderFileServed>(
    null
  );

  const handleDragOver = (e: DragEvent) => {
    e.stopPropagation();
    e.preventDefault();
  };
  const handleDrop = async (e: DragEvent) => {
    e.stopPropagation();
    e.preventDefault();
    // DataTransfer.files: FileList  A FileList is not an Array,
    const allFilesFromEvent = e.dataTransfer.files;

    //    collect only one folder | file from all items dropped.
    const { path, name, size, lastModified, type } = allFilesFromEvent[0];

    /**
     * the main flag to throw error in case user gives file instead of folder or vice versa
     * sends the path of the dragged elemnet to main process and checks is file or not.
     */

    // @ts-expect-error
    let isFile = await window.api.isFile(path);
    console.log(isFile);


    switch (props.isFile + "-" + isFile) {
      case "true-true":
        setProperties({
          name,
          path,
          size,
          lastModified,
          type,
        });
        setErrorAlert(true)
        setAlertType((current) => ({ ...current, variant: "success", body: `File dropped successfully!.File dropped successfully. You dropped "${path}"`, heading: "File sucessfully dropped." }));

        break;
      case "false-false":
        setProperties({
          name,
          path,
          size,
          lastModified,
        });
        setErrorAlert(true)
        setAlertType((current) => ({ ...current, variant: "success", body: `Folder dropped successfully!.Try acessing the folder in your collection. You dropped "${path}"`, heading: "Folder sucessfully dropped." }));
        break;
      //asked file sent folder
      case "true-false":
        setErrorAlert(true)
        setAlertType((current) => ({ ...current, variant: "warning", body: `you are supposed to drop a file here. You dropped "${path}"`, heading: "OOPS! you dropped a Folder here" }));
        break;
      //asked folder sent file
      case "false-true":
        setErrorAlert(true)
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
      globalFileProperties.propertiesForAll().lastModified =
        properties().lastModified;
      globalFileProperties.propertiesForAll().type = properties().type;
      console.log(globalFileProperties.propertiesForAll(), "values in context");
      //save global properties and delete local input
      setProperties(
        null
      )
    } catch (error) {
      setErrorAlert(true);
      console.log(error);
    }
  };
  //alert utils
  const [alertType, setAlertType] = createSignal({ variant: "", heading: "", body: "" })
  const [errorAlert, setErrorAlert] = createSignal<boolean>(false);


  return (
    <div className="up">
      <Container fluid >
        {errorAlert() ? (
          <>
            <Alert variant={alertType().variant} dismissible transition onClose={() => setErrorAlert(false)}>
              <Alert.Heading>{alertType().heading}</Alert.Heading>
              <p>
                {alertType().body}
              </p>
            </Alert>
          </>
        ) : null}
      </Container>

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
            <button onclick={handleSetGlobalProperties}>set this file to play</button>
          </div>
        </div>
      </div>
    </div >
  );
};
