class Matrix {
  constructor(values) {
    this.rows = [];
    this.createRow(values);
    this.columns = [];
    this.createColumns();
  }

  rows() {
    return this.rows;
  }

  pushRow(values) {
    this.rows.push(values.split(' ').map(str => parseInt(str)));
  }

  createRow(values) {
    if (values.includes('\n')) {
      let rows = values.split('\n');
      rows.forEach(row => this.pushRow(row));
    }
    else {
      this.pushRow(values);
    }
  }

  createColumns() {
    let size = this.rows[0].length;
    for(let idx = 0; idx < size; idx++) {
      let column = [];
      this.rows.forEach(row => column.push(row[idx]));
      this.columns.push(column);
    }
  }

  saddlePoints(){
    let points = [];
    for (let i = 0; i < this.rows.length; i++) {
      for (let j = 0; j < this.rows[i].length; j++) {
        if (this.rows[i][j] === Math.max(...this.rows[i])) {
          if (this.rows[i][j] === Math.min(...this.columns[j])) {
            points.push([i, j]);
          }
        }
      }
    }
    return points;
  }
};

module.exports = Matrix;