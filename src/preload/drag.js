const { contextBridge, ipcRenderer } = require('electron')

const expose = () => {
  contextBridge.exposeInMainWorld('electron', {
    startDrag: (fileName) => {
      ipcRenderer.send('ondragstart', fileName)
    }
  })
}
export default expose