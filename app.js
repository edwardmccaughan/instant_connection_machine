const { app, BrowserWindow, ipcMain} = require('electron')
const Printer = require('./src/printer.js')


class ButtonTrigger {
  constructor() {
    console.log('constuctoring')
    this.player1Pressed = false;
    this.player2Pressed = false;

    this.ready_to_print = true;
  }

  setPlayer1State(value) {
    this.player1Pressed = value
    this.triggerIfBoth()
  }

  setPlayer2State(value) {
    this.player2Pressed = value
    this.triggerIfBoth()
  }

  disable_printing() {
    // TODO also disable and reenable LEDs
    this.ready_to_print = false

    setTimeout(() => {
      console.log('ready to print again')
      this.ready_to_print = true

    }, 3000)
  }

  triggerIfBoth() {
    if(this.player1Pressed && this.player2Pressed && this.ready_to_print){
      console.log("both pressed")
      Printer.fake_print('woo!')
      this.disable_printing() // TODO: maybe this should be in printer.ready     
    }
  }
}


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