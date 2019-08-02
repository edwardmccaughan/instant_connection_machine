const fs = require('fs');
const path = require('path')
const config = require('../config/default.js')

module.exports = class ExerciseFactory {
  constructor() {
    this.load_exercises()
  }

  random_exercise(){
    return this.exercises[Math.floor(Math.random() * this.exercises.length)];
  }

  load_exercises(){
    const exercise_file = path.join(__dirname, `${config.pages_file}`)
    const exercises_raw = fs.readFileSync(exercise_file, { encoding: 'utf8' });
    this.exercises = exercises_raw.split("#")
  }

} 