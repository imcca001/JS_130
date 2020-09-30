 const PLANTS = {
    R: 'radishes',
    C: 'clover',
    G: 'grass',
    V: 'violets'
    }

const STUDENTS = [
  'Alice',
  'Bob', 
  'Charlie', 
  'David',
  'Eve', 
  'Fred', 
  'Ginny', 
  'Harriet',
  'Ileana', 
  'Joseph', 
  'Kincaid',
  'Larry'
]

  const FIRST_ROW = 0;
  const SECOND_ROW = 1;

class Garden {

  constructor(diagram, students = STUDENTS) {
    this.rows = diagram.split('\n');
    this.students = students.sort();
    this.students.forEach((student, idx) => {
      this[student.toLowerCase()] = this.getCupsFor(idx);
    });
  }

  getCupsFor(idx) {
    let firstCupIdx = idx * 2;
    let secondCupIdx = firstCupIdx + 1;
    let plants = [
      this.rows[FIRST_ROW][firstCupIdx], 
      this.rows[FIRST_ROW][secondCupIdx], 
      this.rows[SECOND_ROW][firstCupIdx], 
      this.rows[SECOND_ROW][secondCupIdx]
    ];
    return plants.map(plant => PLANTS[plant]);
  }

};

module.exports = Garden;