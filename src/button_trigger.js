const Printer = require('./printer.js')

module.exports = class ButtonTrigger {
  constructor() {
    this.printer = new Printer()

    this.player1Pressed = false;
    this.player2Pressed = false;
  }

  setPlayer1State(value) {
    this.player1Pressed = value
    this.triggerIfBoth()
  }

  setPlayer2State(value) {
    this.player2Pressed = value
    this.triggerIfBoth()
  }

  triggerIfBoth() {
    if(this.player1Pressed && this.player2Pressed && this.printer.ready){
      console.log("both pressed")
      this.printer.fake_print('woo!')
    }
  }
}