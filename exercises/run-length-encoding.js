function encodedCharacter(charArr) {
  let element = charArr[0];
  if (charArr.length === 1) {
    return element;
  } else {
    return `${charArr.length}${element}`;
  }
}

function encode(str){
  let encodedStr = '';
  let currentCharArr = [];
  for (let index = 0; index < str.length; index += 1) {
    let currentChar = str[index];
    if (currentCharArr.length === 0 || currentChar === currentCharArr[0]) {
      currentCharArr.push(currentChar);
    } else {
      encodedStr += encodedCharacter(currentCharArr);
      currentCharArr = [currentChar];
    }
    if (index === str.length - 1) {
      encodedStr += encodedCharacter(currentCharArr);
    }
  }

  return encodedStr;
};

const isDigit = (str) => {
  const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  return DIGITS.includes(str);
}

function decode(str) {
  let decodedStr = ''
  let count = '';
  for (let idx = 0; idx < str.length; idx += 1) {
    if (isDigit(str[idx])) {
      count += str[idx];
    } else {
      count = +count || 1;
      decodedStr += str[idx].repeat(count);
      count = '';
    }
  }
  return decodedStr;
}



module.exports = {encode, decode};
