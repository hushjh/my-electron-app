const { app, BrowserWindow, ipcMain, Notification } = require('electron');
const path = require('node:path');
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
  showNotification()
};
function showNotification() {
  const NOTIFICATION_TITLE = 'Basic Notification'
  const NOTIFICATION_BODY = 'Notification from the Main process'
  new Notification({
    titile: NOTIFICATION_TITLE,
    body: NOTIFICATION_BODY
  }).show()
}
export default createWindow