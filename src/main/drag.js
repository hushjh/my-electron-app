const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('node:path');
const fs = require('node:fs')
const https = require('node:https')
const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      sandbox: false
    },
  });
  const iconName = path.join(__dirname, 'iconForDragAndDrop.png')
  const icon = fs.createWriteStream(iconName)
  fs.writeFileSync(path.join(__dirname, 'drag-and-drop-1.md'), 'first file to test drag and drop')
  fs.writeFileSync(path.join(__dirname, 'drag-and-drop-2.md'), 'second file to test drag and drop')
  https.get('https://img.icons8.com/ios/452/drag-and-drop.png', response => {
    response.pipe(icon)
  })
  ipcMain.on('ondragstart', (event, filePath) => {
    event.sender.startDrag({
      file: path.join(__dirname, filePath),
      icon: iconName
    })
  })
  // and load the index.html of the app.
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`));
  }

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
};
export default createWindow