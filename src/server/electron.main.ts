import {
  app,
  BrowserWindow,
  ipcMain,
  dialog,
  session,
  protocol,
  webContents,
} from "electron";
import {
  readFile,
  lstatSync,
  readFileSync,
  readdirSync,
  readdir,
} from "original-fs";
import path from "path";

// This allows TypeScript to pick up the magic constant that's auto-generated by Forge's Webpack
// plugin that tells the Electron app where to look for the Webpack-bundled app code (depending on
// whether you're running in development or production).
declare const MAIN_WINDOW_WEBPACK_ENTRY: string;

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  // eslint-disable-line global-require
  app.quit();
}

const createWindow = (): void => {
  // Create the browser window.
  let mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: {
      webSecurity: false, // FIXME: FIX PRIVILIGED PROTOCOL TO ALLOW file:// in dom
      preload: path.join(process.cwd(), "./src/server/preload.ts"),
    },
  });

  // and load the index.html of the app.
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();
};
//CSP REGISTERIES
app.on("ready", () => {
  session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
    callback({
      responseHeaders: {
        ...details.responseHeaders,
        "Content-Security-Policy": [
          //FIXME: connect-src needs update
          "default-src 'unsafe-inline' 'self';script-src 'self' 'unsafe-eval';  img-src file://* https://* filesystem: data: ; media-src file://* ; connect-src * ",
        ],
      },
    });
  });
});

//ipc check
// ipcMain.on("message", (event: Electron.IpcMainEvent, args: string) => {
//   console.log(args);
// });

//get filePath via dialog
//TODO: include this in dragdrop
ipcMain.on(
  "choose-directory",
  (event: Electron.IpcMainEvent, dialogName: string) => {
    dialog
      .showOpenDialog({
        title: dialogName,
        buttonLabel: "select folder",
        properties: ["openDirectory"],
      })
      .then((result) => {
        if (result) {
          console.log(result.filePaths[0]);
        }
      });
  }
);

//file or folder checker
//for dragdrop component
ipcMain.handle("is-file", async (_, path) => {
  //TODO: use the async variant of this function
  return lstatSync(path).isFile();
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
// app.on("ready",()=>{
// protocol.ref
// })

/**
 * @fix Custom protocols are not working
 */
// protocol.registerSchemesAsPrivileged([
//   {
//     scheme: "file://",
//     privileges: {
//       standard: true,
//       stream: true,
//     },
//   },
// ]);

//getting subfile to send filedata to parse
ipcMain.handle("sendSubFile", async (_, subFile) => {
  let blobToSend = readFileSync(subFile, "utf-8");
  return blobToSend;
});

ipcMain.handle("files-collection", async (_, collectionPath) => {
  readdir(collectionPath, (err, files) => {
    console.log(collectionPath);

    if (err) {
      console.log(err);
    } else {
      console.log(files);
      return files;
    }
  });
});

app.on("ready", createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
