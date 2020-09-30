// isoceles
// scalene
// equilateral
// illegal 
    // negative
    // sides don't add up
    // any 0 values

class Triangle {
  constructor(side1, side2, side3) {
    this.sides = [side1, side2, side3];
  }

  kind() {
    if (this.isTriangle()) {
      return this.type();
    }

    throw new Error("Not a triangle!");
  }

  isTriangle() {
    if (this.sides.every(side => side > 0)) {
      return this.validSideLengths()
    }
  }

  validSideLengths() {
    let checkArray = this.sides.slice();
    checkArray.sort(function(a, b) {
      return a - b;
    });
    return checkArray[2] < (checkArray[0] + checkArray[1])
  }

  type() {
    if (this.equilateral()) {
      return "equilateral";
    }

    return this.isoceles() ? "isosceles" : "scalene";
  }

  equilateral() {
    return this.sides[0] === this.sides[1] && this.sides[1] === this.sides[2];
  }

  isoceles() {
    return this.sides[0] === this.sides[1] || this.sides[0] === this.sides[2] || this.sides[1] === this.sides[2];
  }
}

module.exports = Triangle;