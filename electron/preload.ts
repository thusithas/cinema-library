import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('cinemaLibrary', {
  getAppInfo: () => ipcRenderer.invoke('app:get-info'),

  selectLibraryFolder: () =>
    ipcRenderer.invoke('library:select-folder'),

  scanLibraryFolder: (folderPath: string) =>
    ipcRenderer.invoke('library:scan-folder', folderPath),
})