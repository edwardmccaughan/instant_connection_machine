module.exports = class ExerciseFactory {
  constructor() {
    // TODO: this should come from a config file somewhere
    this.exercises = [
      'player one: bake player2 a cake',
      'sing a song together\nabout a happy squirrel\nand a giant robot',
      'hippy eye gazing\nfor about 5 mins\nthen go for a walk'
    ]
  }

  random_exercise(){
    return this.exercises[Math.floor(Math.random() * this.exercises.length)];
  }
}