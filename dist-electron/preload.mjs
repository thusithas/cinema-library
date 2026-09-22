"use strict";
const electron = require("electron");
electron.contextBridge.exposeInMainWorld("cinemaLibrary", {
  getAppInfo: () => electron.ipcRenderer.invoke("app:get-info"),
  selectLibraryFolder: () => electron.ipcRenderer.invoke("library:select-folder"),
  scanLibraryFolder: (folderPath) => electron.ipcRenderer.invoke("library:scan-folder", folderPath)
});
