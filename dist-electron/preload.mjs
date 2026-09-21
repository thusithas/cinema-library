"use strict";
const electron = require("electron");
electron.contextBridge.exposeInMainWorld("cinemaLibrary", {
  getAppInfo: () => electron.ipcRenderer.invoke("app:get-info")
});
