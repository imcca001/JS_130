class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  kind() {
    this.triangle();

    if (this.scalene()) {
      return 'scalene';
    }
    else if (this.equilateral()) {
      return 'equilateral';
    }
    return 'isosceles';
  }

  scalene() {
    return !(this.side1 === this.side2 
          || this.side2 === this.side3 
          || this.side1 === this.side3);
  }

  equilateral() {
    return this.side1 === this.side2 
        && this.side2 === this.side3;
  }

  triangle() {
    if (this.side1 <= 0 || this.side2 <= 0 || this.side3 <= 0) {
      throw new TypeError('This isn\'t a triangle!');
    }
    else if ((this.side1 + this.side2) < this.side3
          || (this.side2 + this.side3) < this.side1
          || (this.side3 + this.side1) < this.side2) {
      throw new TypeError('Impossible Triangle!');
    }
  }
}


module.exports = Triangle;