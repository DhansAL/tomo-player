const { contextBridge, ipcRenderer } = require("electron");
console.log("preload loaded successfully 👏");
const API = {
  //@ts-expect-error
  isFile: (path) => ipcRenderer.invoke("is-file", path),
};

contextBridge.exposeInMainWorld("api", API);
