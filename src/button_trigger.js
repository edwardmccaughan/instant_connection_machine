module.exports = class ButtonTrigger {
  constructor(two_button_mode, printer, exercise_factory) {
    this.printer = printer
    this.exercise_factory = exercise_factory
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