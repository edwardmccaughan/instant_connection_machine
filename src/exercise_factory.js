const config = require('../config/default.js')

module.exports = class ExerciseFactory {
  constructor(exercises_data) {
    this.exercises = this.wrap_long_lines(exercises_data).split("#")
  }

  random_exercise(){
    return this.exercises[Math.floor(Math.random() * this.exercises.length)];
  }

  wrap_long_lines(exercises) {
    // taken from https://stackoverflow.com/a/51506718/10682668
    return exercises.replace(
      new RegExp(`(?![^\\n]{1,${config.line_width}}$)([^\\n]{1,${config.line_width}})\\s`, 'g'), '$1\n'
    );
  }
}
