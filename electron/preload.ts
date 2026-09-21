import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('cinemaLibrary', {
  getAppInfo: () => ipcRenderer.invoke('app:get-info'),
})