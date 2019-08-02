const { app, BrowserWindow, ipcMain} = require('electron')
const ButtonTrigger = require('./src/button_trigger.js')
const config = require('./config/default.js')

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

  let buttonTrigger = new ButtonTrigger(config.two_button_mode)

  ipcMain.on('keydown', (event, key) => {
    //console.log('keydown received', key)
    if (key === 'KeyQ') {
      buttonTrigger.setButton1State(true)
    } else if (key === 'KeyW') {
      buttonTrigger.setButton2State(true)
    }
  })

  ipcMain.on('keyup', (event, key) => {
    // console.log('keyup received', key)
    if (key === 'KeyQ') {
      buttonTrigger.setButton1State(false)
    } else if (key === 'KeyW') {
      buttonTrigger.setButton2State(false)
    }
  })
}


app.on('ready', createWindow)