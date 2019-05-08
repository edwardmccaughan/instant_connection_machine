const { app, BrowserWindow, ipcMain} = require('electron')
const Printer = require('./src/printer.js')

function createWindow () {
  let mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true
    }
  })

  mainWindow.loadFile('index.html')
  mainWindow.webContents.openDevTools()

  ipcMain.on('keydown', function(event, key) {
    console.log('keydown received', key)

    if (key === 'KeyQ') {
      Printer.print_line('woooo')
    }
  })

  ipcMain.on('keyup', function(event, key) {
    console.log('keyup received', key)
    // Printer.print_line()
  })
}


app.on('ready', createWindow)