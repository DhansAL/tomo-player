const { contextBridge, ipcRenderer } = require("electron");
console.log("preload loaded successfully 👏");
/**
 * @bugs  -1. try giving types to args the preload will fail to load also remove ts error flag.
 * 2. 
 *   sendSubFile: (channel, subFile) => {
    ipcRenderer.invoke("sendSubFile", subFile),
 }
 cant wrap in paranthesis why?
 * */
//TODO: whiteList Channels
const API = {
  //main flag for files
  //@ts-expect-error
  isFile: (path) => ipcRenderer.invoke("is-file", path),

  //for subtitles
  // @ts-expect-error
  sendSubFile: (subFile) => ipcRenderer.invoke("sendSubFile", subFile),

  //getting all files in Collection directory
  //@ts-expect-error
  filesInCollection: (collectionPath) =>
    ipcRenderer.invoke("files-collection", collectionPath),
};

contextBridge.exposeInMainWorld("api", API);
