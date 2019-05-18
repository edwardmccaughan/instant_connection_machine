var fs = require('fs');
var path = require('path')
 
module.exports = class ExerciseFactory {
  constructor() {
    this.load_exercises()
  }

  random_exercise(){
    return this.exercises[Math.floor(Math.random() * this.exercises.length)];
  }

  load_exercises(){
    const exercise_file = path.join(__dirname, '../exercises.txt')
    const exercises_raw = fs.readFileSync(exercise_file, { encoding: 'utf8' });
    this.exercises = exercises_raw.split("#")
  }

} 