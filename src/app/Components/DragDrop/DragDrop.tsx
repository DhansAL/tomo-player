import React from "react";

export const DragDrop = () => {
const handleDragOver = (e:React.SyntheticEvent)=>{
e.stopPropagation();
e.preventDefault();
console.log("dragged");

}
const handleDrop = (e:React.SyntheticEvent) =>{
    e.stopPropagation();
    e.preventDefault();
    //@ts-expect-error 
    //FIXME: set type for e!= React.SyntheticEvent
    console.log(e.dataTransfer);
    //@ts-expect-error
    const files = e.dataTransfer.files;
    for(const file of files){
        console.log(file.path);
        
    }

    
// const files = e.dataTransfer.files;

}
const accessfiles = (e:WindowEventHandlers)=>{
    
}


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
          drop here
      </div>
    </div>
  );
};
