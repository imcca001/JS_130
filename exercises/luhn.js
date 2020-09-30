const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

class Luhn {
  constructor(luhn) {
    this.luhnNumber = this.stripSpaces(luhn);

  }

  containsInvalidCharacter(str) {
    for (let idx = 0; idx < str.length; idx++) {
      let char = str[idx];
      if (!DIGITS.includes(char)) {
        return true;
      }
    }
    return false;
  }

  doubleLuhnDigits(digit) {
    let doubleDigit = digit * 2;
    if (doubleDigit > 9) {
      doubleDigit -= 9;
    }
    return doubleDigit;
  }

  stripSpaces(str) {
    let stringWithoutSpaces = '';
    for (let idx = 0; idx < str.length; idx++) {
      let char = str[idx];
      if (char !== ' ') {
        stringWithoutSpaces += char;
      }
    }
    return stringWithoutSpaces;
  }

  valid() {
    if (this.luhnNumber.length < 2 || 
      this.containsInvalidCharacter(this.luhnNumber)) {
      return false;
    }
    let reversedLuhn = this.luhnNumber
      .split("")
      .reverse()
      .join("");

      let luhnDigits = [];

    for (let idx = 0; idx < reversedLuhn.length; idx++) {
      let num = +reversedLuhn[idx];

      if (idx % 2 !== 0) {
        let doubleNum = this.doubleLuhnDigits(num);
        luhnDigits.push(doubleNum);
      }
      else {
        luhnDigits.push(num);
      }
    }
    let sum = luhnDigits.reduce((accum, digit) => accum + digit);
    return sum % 10 === 0;
  }
}

module.exports = Luhn;