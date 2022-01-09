const { contextBridge, ipcRenderer } = require("electron");
console.log("preload loaded successfully 👏");
const API = {
  //@ts-expect-error
  isFile: (path) => ipcRenderer.invoke("is-file", path),
  //for subtitles
  // @ts-expect-error

  //try giving types to args the preload will fail to load

  sendSubFile: (channel, subFile) =>
    //TODO: whiteList Channels
    ipcRenderer.invoke("sendSubFile", subFile),

  // },
};

contextBridge.exposeInMainWorld("api", API);
