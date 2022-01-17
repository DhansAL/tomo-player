import { Alert } from "solid-bootstrap";
import { Component, createSignal, useContext } from "solid-js";
import { FileFolderContext } from "../../../Contexts/FileContext";
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
  const [errorAlert, setErrorAlert] = createSignal<boolean>(false);
  //TODO: make this signal a minor notice fadeaway component which shows minor details 
  //of events , mini alert maybe
  const [minorErrors, setMinorErrors] = createSignal<string>("seems good for now");
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
     * sends the path of the dragged to main and checks is file or not.
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
        setMinorErrors("files set success" + "isFile:" + `${isFile}`);
        break;
      case "false-false":
        setProperties({
          name,
          path,
          size,
          lastModified,
        });
        setMinorErrors("folders set success");
        break;
      //asked file sent folder
      case "true-false":
        setMinorErrors(
          "you were supposed to drop files only" +
          `${isFile}` +
          props.isFile +
          "props"
        );
        break;
      //asked folder sent file
      case "false-true":
        setMinorErrors("you should be dropping folders only");
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

  return (
    <div>

      {errorAlert() ? (
        <>

          <Alert variant="danger" dismissible transition onClose={() => setErrorAlert(false)}>
            <Alert.Heading>Check your file added</Alert.Heading>
            <p>
              Aww yeah, you successfully added a folder or not a proper file path
            </p>
          </Alert>
        </>
      ) : null}
      <div id="error">possible errors -{minorErrors()}</div>
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
        <div>
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
    </div>
  );
};
