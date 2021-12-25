const { contextBridge, ipcRenderer } = require("electron");
console.log("preload loaded successfully 👏");
const API = {
  //@ts-expect-error
  sendMsg: (mesg) => ipcRenderer.send("message", mesg),
  foldfunc: () =>
    ipcRenderer.send("choose-directory", "choose your folder please"),
};

contextBridge.exposeInMainWorld("api", API);
