import React, { useState } from "react";
import { SUCCESS_COLORS } from "../../../configs/config";

export const DragDrop = () => {
const [color, setcolor] = useState(SUCCESS_COLORS.success1)


const handleDragOver = (e:React.SyntheticEvent)=>{
e.stopPropagation();
e.preventDefault();
setcolor(SUCCESS_COLORS.success2)
console.log("dragged");

}

const handleDragLeave = ()=>{
  setcolor(SUCCESS_COLORS.success1)
  console.log("exit");
  
  }
const handleDrop = (e:React.SyntheticEvent) =>{
    e.stopPropagation();
    e.preventDefault();
    //FIXME: set type for e!= React.SyntheticEvent
    console.log(e);
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
          background: color
        }}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onDragLeave={handleDragLeave}
      >
          drop here
      </div>
    </div>
  );
};
