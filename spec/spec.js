var yourCode = require('../grader');

function isEven(n) {
  return n % 2 == 0;
}

describe('#letterGrader', function() {
  it('returns a letter grade related to a score', function() {
    var grades = [99];
    expect(yourCode.letterGrader(grades)).toEqual(["A"]);
  });
