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
    console.log(path);
    // @ts-expect-error
    const isFile = await window.api.isFile(path);
    console.log(isFile);
    //TODO: put this in a switch to direct when to throw error
    if (props.isFile && isFile) {
      setProperties({
        name,
        path,
        size,
        lastModified,
        type,
      });
    } else {
      console.log("drop a file only");
    }

    if (!props.isFile && !isFile) {
      setProperties({
        name,
        path,
        size,
        lastModified,
      });
    } else {
      console.log("drop a folder only");
    }

    console.log(properties());
  };

  return (
    <div>
      drag drop component
      <div
        id="dropzone"
        style={{
          borderRadius: "10px",
          margin: "10px auto",
          width: "55vw",
          height: "40vh",
          border: "3px dotted crimson",
        }}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {props.isFile ? "Drop Folder of your shows" : "drop the show to play"}
        <div>
          name :
          {properties() != null ? properties().name : "name of file or folder"}
        </div>
      </div>
    </div>
  );
};
