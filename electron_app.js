const { app, BrowserWindow, ipcMain} = require('electron')
const ConnectionMachine = require('./src/connection_machine.js')

createWindow = () => {
  let mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true
    }
  })

  mainWindow.loadFile('index.html')
  mainWindow.webContents.openDevTools()

  const connection_machine = new ConnectionMachine()

  ipcMain.on('keydown', (event, key) => {
    //console.log('keydown received', key)
    if (key === 'KeyQ') {
      connection_machine.buttonTrigger.setButton1State(true)
    } else if (key === 'KeyW') {
      connection_machine.buttonTrigger.setButton2State(true)
    }
  })

  ipcMain.on('keyup', (event, key) => {
    // console.log('keyup received', key)
    if (key === 'KeyQ') {
      connection_machine.buttonTrigger.setButton1State(false)
    } else if (key === 'KeyW') {
      connection_machine.buttonTrigger.setButton2State(false)
    }
  })
}


app.on('ready', createWindow)