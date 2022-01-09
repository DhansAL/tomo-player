const { contextBridge, ipcRenderer } = require("electron");
console.log("preload loaded successfully 👏");
const API = {
  isFile: (path: string) => ipcRenderer.invoke("is-file", path),
  //for subtitles
  sendSubFile: (channel: string, subFile: string) => {
    //whiteList Channels
    console.log("subfile active");

    let validChannels = ["sendSubFile"];
    if (validChannels.includes(channel)) {
      ipcRenderer.invoke(channel, subFile);
    }
  },
};

contextBridge.exposeInMainWorld("api", API);
