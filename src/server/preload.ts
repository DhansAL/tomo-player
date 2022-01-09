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
const API = {
  //@ts-expect-error
  isFile: (path) => ipcRenderer.invoke("is-file", path),
  //for subtitles
  // @ts-expect-error

  sendSubFile: (channel, subFile) =>
    //TODO: whiteList Channels
    ipcRenderer.invoke("sendSubFile", subFile),
};

contextBridge.exposeInMainWorld("api", API);
