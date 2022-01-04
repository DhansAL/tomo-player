import { Component, createSignal } from "solid-js";
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
  const [properties, setProperties] = createSignal<null | FolderServed>(null);

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

    switch (props.isFile + "-" + isFile) {
      case "true-true":
        setProperties({
          name,
          path,
          size,
          lastModified,
          type,
        });
        console.log("files set success", "isFile:", isFile);
        break;
      case "false-false":
        setProperties({
          name,
          path,
          size,
          lastModified,
        });
        console.log("folders set success");
        break;
      //asked file sent folder
      case "true-false":
        console.log(
          "you were supposed to drop files only",
          isFile,
          props.isFile,
          "props"
        );
        break;
      //asked folder sent file
      case "false-true":
        console.log("you should be dropping folders only");
      default:
        break;
    }

    console.log(properties());
  };

  return (
    <div>
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
        </div>
      </div>
    </div>
  );
};
