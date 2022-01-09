const { contextBridge, ipcRenderer } = require("electron");
console.log("preload loaded successfully 👏");
const API = {
  //@ts-expect-error
  isFile: (path) => ipcRenderer.invoke("is-file", path),
  //for subtitles
  // @ts-expect-error

  //try giving types to args the preload will fail to load

  sendSubFile: (channel, subFile) => {
    //whiteList Channels
    let validChannels = ["sendSubFile"];
    if (validChannels.includes(channel)) {
      console.log("lets check your file");
      ipcRenderer.invoke(channel, subFile);
    }
  },
};

contextBridge.exposeInMainWorld("api", API);
