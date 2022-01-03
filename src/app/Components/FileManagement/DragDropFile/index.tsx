/**
 * Reusable component to get the path string of file dropped .
 * 
 * @returns pathstring - the path of the file dropped
 */

export const DragDropFile = () => {

    const handleDragOver = (e:DragEvent)=>{
    e.stopPropagation();
    e.preventDefault();
    console.log("dragged");
        
    
    }
    const handleDrop = (e:DragEvent) =>{
        e.stopPropagation();
        e.preventDefault();
        // console.log(e);
        const files = e.dataTransfer.files;
        //(property) DataTransfer.files: FileList
        //Returns a FileList of the files being dragged, if any.
        // A FileList is not an Array, but it does conform to its contract (has length and numeric indices), so we can "borrow" Array methods:        
        for(let i = 0;i<e.dataTransfer.files.length;i++){
            console.log(files[i].path)
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
