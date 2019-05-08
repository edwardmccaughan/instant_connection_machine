const {ipcRenderer} = require('electron')

window.addEventListener("keydown", (event) => {
  window.event = event
  ipcRenderer.send('keydown', event.code)
}, false)

window.addEventListener("keyup", (event) => {
  ipcRenderer.send('keyup', event.code)
}, false)