const { app, BrowserWindow, Menu, MenuItem } = require('electron');
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

  mainWindow.webContents.on('before-input-event', (event, input) => {
    if (input.control && input.key.toLowerCase() === 'i') {
      console.log('Pressed Ctrl + i')
      event.preventDefault()
    }
  })

  const menu = new Menu()
  menu.append(new MenuItem({
    label: 'Electron',
    submenu: [
      {
        role: 'help',
        accelerator: process.platform === 'darwin' ? 'Alt+Cmd+I' : 'Alt+Shift+i',
        click: () => {
          console.log('Electron rocks!')
        }
      }
    ]
  }))
  Menu.setApplicationMenu(menu)
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