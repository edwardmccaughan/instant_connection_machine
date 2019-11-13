const ExerciseFactory = require('../src/exercise_factory.js')
const config = require('../config/default.js')

describe("ExerciseFactory", () => {
  test("it splits the entries on the # character", () => {
    exercises_data = 'exercise one\n line2#exercise two'

    exercise_factory = new ExerciseFactory(exercises_data) 
    expected_exercises = [
      'exercise one\n line2',
      'exercise two'
    ]
    expect(exercise_factory.exercises).toEqual(expected_exercises);
  });

   test("it inserts newlines at the printer character width", () => {
    // TODO: find a way to safely mock the config file, for now just alert if it's changed from the default 
    expect(config.line_width).toEqual("48")

    exercises_data = 'fourtyfivecharacterwordxxxxxxxxxxxxxxxxxxxxxx second word\nsecond line'

    exercise_factory = new ExerciseFactory(exercises_data) 
    expected_exercises = [
      'fourtyfivecharacterwordxxxxxxxxxxxxxxxxxxxxxx\nsecond word\nsecond line'
    ]
    expect(exercise_factory.exercises).toEqual(expected_exercises);
  });
});
