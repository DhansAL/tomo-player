import { Component, createSignal } from "solid-js";
type DragDropProps = {
  isFolder: boolean;
};
/**
 * Reusable component to get the info of dropped folder or file  .
 * checks whether dropped item is folder or file and behaves accordingly
 * 
 * @returns Properties  properties of file or folder served to component(s)
 */

export const DragDrop: Component<DragDropProps> = (
  props: DragDropProps
) => {
  // console.log(props.isFolder);
  const [properties, setProperties] = createSignal<null | FolderServed>(
    null
  );

  const handleDragOver = (e: DragEvent) => {
    e.stopPropagation();
    e.preventDefault();
  };
  const handleDrop = (e: DragEvent) => {
    e.stopPropagation();
    e.preventDefault();
    // DataTransfer.files: FileList  A FileList is not an Array,
    const allFilesFromEvent = e.dataTransfer.files; 

    //    collect only one folder | file from all items dropped.
    const { path, name, size, lastModified,type } = allFilesFromEvent[0];
    if(props.isFolder){
      setProperties({
        name,
        path,
        size,
        lastModified,
      });
    }
    if(!props.isFolder){
      setProperties({
        name,
        path,
        size,
        lastModified,
        type
      });
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
        {props.isFolder ? "Drop Folder of your shows" : "drop the show to play"}
        <div>
{
  (properties()!=null)?  properties().name : "name of file or folder"

}
        </div>
      </div>
    </div>
  );
};
