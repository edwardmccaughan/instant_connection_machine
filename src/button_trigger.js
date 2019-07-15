const Printer = require('./printer.js')
const ExerciseFactory = require('./exercise_factory.js')

module.exports = class ButtonTrigger {
  constructor(two_button_mode) {
    // TODO: maybe these should be done by callbacks or something, having everything
    // in here makes ButtonTrigger untidy
    this.printer = new Printer(true)
    this.exercise_factory = new ExerciseFactory()
    this.two_button_mode = two_button_mode

    this.button1Pressed = false;
    this.button2Pressed = false;
  }

  setButton1State(value) {
    this.button1Pressed = value
    this.triggerIfReady()
  }

  setButton2State(value) {
    this.button2Pressed = value
    this.triggerIfReady()
  }

  is_ready(){
    if(this.two_button_mode) {
      return this.button1Pressed && this.button2Pressed && this.printer.ready
    } else {
      return (this.button1Pressed || this.button2Pressed) && this.printer.ready
    }

  }


  triggerIfReady() {
    if(this.is_ready()){
      console.log("buttons triggered", this.button1Pressed, this.button2Pressed)
      this.printer.print_multiline(this.exercise_factory.random_exercise())
    }
  }
}