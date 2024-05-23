const { app, BrowserWindow, ipcMain, Notification } = require('electron');
const path = require('node:path');
let progressInterval
const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });
  // and load the index.html of the app.
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`));
  }
  // Open the DevTools.
  mainWindow.webContents.openDevTools();
  
  const INCREAMENT = 0.03
  const INTERVAL_DELAY = 100 // ms
  let c = 0
  progressInterval = setInterval(() => {
    mainWindow.setProgressBar(c)
    if (c < 2) {
      c += INCREAMENT
    } else {
      c = (-INCREAMENT * 5)
    }
  }, INTERVAL_DELAY)
};
app.on('before-quit', () => {
  clearInterval(progressInterval)
})

export default createWindow