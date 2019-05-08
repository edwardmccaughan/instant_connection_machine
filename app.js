const { app, BrowserWindow, ipcMain} = require('electron')
const ButtonTrigger = require('./src/button_trigger.js')


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


  let buttonTrigger = new ButtonTrigger()

  ipcMain.on('keydown', (event, key) => {
    //console.log('keydown received', key)

    // Printer.print_line('woooo')
    if (key === 'KeyQ') {
      buttonTrigger.setPlayer1State(true)
    } else if (key === 'KeyW') {
      buttonTrigger.setPlayer2State(true)
    }
  })

  ipcMain.on('keyup', (event, key) => {
    // console.log('keyup received', key)
    if (key === 'KeyQ') {
      buttonTrigger.setPlayer1State(false)
    } else if (key === 'KeyW') {
      buttonTrigger.setPlayer2State(false)
    }
  })
}


app.on('ready', createWindow)