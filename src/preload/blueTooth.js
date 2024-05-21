const { contextBridge, ipcRenderer } = require('electron/renderer')

const expose = () => {
  contextBridge.exposeInMainWorld('electronAPI', {
    cancelBluetoothRequest: () => ipcRenderer.send('cancel-bluetooth-request'),
    bluetoothPairingRequest: (callback) => ipcRenderer.on('bluetooth-pairing-request', () => callback()),
    bluetoothPairingResponse: (response) => ipcRenderer.send('bluetooth-pairing-response', response)
  })
}
export default expose