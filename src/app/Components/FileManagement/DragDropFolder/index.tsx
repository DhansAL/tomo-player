/**
 * Reusable component to get the folderInfo of a folder dropped .
 *checks whether dropped item is folder. if not folder, throw error

 * @returns FileProperties - the path of folder served to collection component
 */

// takes ONE folder  FOR NOW but will take multiple files too
//how, just make the destructuring part in a loop
// TODO: or file (in case reusing this component)
// and give its properties
/**
 *     name, // name of show (which includes media)
      path, // path to the folder of show
      size,
      type,
      lastModified,
 */

import { Component, createSignal } from "solid-js";

export const DragDropFolder: Component = () => {
  const [FileProperties, setFileProperties] = createSignal<null | FolderServed>(
    null
  );

  const handleDragOver = (e: DragEvent) => {
    e.stopPropagation();
    e.preventDefault();
  };
  const handleDrop = (e: DragEvent) => {
    e.stopPropagation();
    e.preventDefault();
    const allFilesFromEvent = e.dataTransfer.files;
    // DataTransfer.files: FileList  A FileList is not an Array,

    //we are going to collect only one folder at a time if its dropped for now
    const { path, name, size, type, lastModified } = allFilesFromEvent[0];
    setFileProperties({
      name,
      path,
      size,
      lastModified,
    });
    console.log(FileProperties());
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
        drop folders only
      </div>
    </div>
  );
};
