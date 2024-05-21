const { contextBridge, ipcRenderer } = require('electron')

const expose = () => {
  contextBridge.exposeInMainWorld('darkMode', {
    toggle: () => ipcRenderer.invoke('dark-mode:toggle'),
    system: () => ipcRenderer.invoke('dark-mode:system')
  })
}
export default expose