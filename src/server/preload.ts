const { contextBridge, ipcRenderer } = require("electron");
console.log("preload loaded successfully 👏");

const API = {
  //@ts-expect-error
  sendMsg: (mesg) => ipcRenderer.send("message", mesg),
};

contextBridge.exposeInMainWorld("api", API);
