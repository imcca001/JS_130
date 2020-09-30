class Luhn {
  constructor(number) {
    this.luhn = number;
  }

  valid() {
    if (this.luhn.length === 1) {
      return false;
    }
    let nums = this.luhn.match(/[0-9]/g);
    let total = nums.reduce((accum, num) => accum + parseInt(num), 0);
    if (total === 0 && nums.length === 1) {
      return false;
    }
    let numChars = this.luhn.match(/[0-9\s]/g);
    if (numChars.length !== this.luhn.length) {
      return false;
    }
    let doubled = nums.reverse().map((num, idx) => {
      if (idx % 2 !== 0) {
        let doubleNum = num * 2;
        if (doubleNum > 9) {
          return doubleNum - 9;
        }
        return doubleNum;
      }
      return num;
    });
    let reduced = doubled.reduce((accum, num) => accum + parseInt(num), 0);
    return reduced % 10 === 0;

  //return true;
  }
}
