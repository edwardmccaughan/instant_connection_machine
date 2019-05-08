const Printer = require('./printer.js')
const ExerciseFactory = require('./exercise_factory.js')

module.exports = class ButtonTrigger {
  constructor() {
    // TODO: maybe these should be done by callbacks or something, having everything
    // in here makes ButtonTrigger untidy
    this.printer = new Printer(true)
    this.exercise_factory = new ExerciseFactory()

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
      this.printer.print_multiline(this.exercise_factory.random_exercise())
    }
  }
}