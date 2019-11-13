const Printer = require('./printer.js')
const ExerciseFactory = require('./exercise_factory.js')
const ButtonTrigger = require('./button_trigger.js')
const config = require('../config/default.js')

const fs = require('fs');
const path = require('path')

module.exports = class ConnectionMachine {
  constructor() {
    const exercise_file = path.join(__dirname, `${config.pages_file}`)
    const exercises_data = fs.readFileSync(exercise_file, { encoding: 'utf8' });
    this.exercise_factory = new ExerciseFactory(exercises_data)

    this.printer = new Printer(true)
    this.buttonTrigger = new ButtonTrigger(config.two_button_mode, this.printer, this.exercise_factory);
  }
}