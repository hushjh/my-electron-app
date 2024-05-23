const { app, BrowserWindow, globalShortcut, ipcMain } = require('electron');
const path = require('node:path');
// import createWindow from './main/darkMode.js';
// import createWindow from './main/bluetooth.js';
// import createWindow from './main/menu';
import createWindow from './main/drag.js'

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}



// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {

  globalShortcut.register('Alt+CommandOrControl+I', () => {
    console.log('Eletron loves global shortcuts')
  })
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
  // ipcMain.on('ondragstart', fileDrag)
}).then(createWindow);

// function fileDrag(event, filePath) {
//   // 文件拖放
//   const iconName = path.join(__dirname, "iconForDragAndDrop.png"); //icon
//   event.sender.startDrag({
//     file: path.join(__dirname, filePath),
//     icon: iconName,
//   });
// }

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
