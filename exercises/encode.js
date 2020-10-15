function encode(str) {

  if (str.length === 1 || str.length === 0) {
    return str;
  } else {
    let subs = [];
    let strArr = str.split('');
    while (strArr.length > 0) {
      let subStr = '';
      while (strArr[0] === strArr[1]) {
        subStr += strArr.shift();
      }
      subStr += strArr.shift();
      subs.push(subStr);
    }
    return subs.map(sub => {
    if (sub.length > 1) {
      return `${sub.length}` + sub[0];
    }
    return sub;
    }).join('');
  }
}

function decode(str) {
  if (str.length === 0) {
    return str;
  } else {
    let subStr = '';
    let strArr = str.split('');
    while (strArr.length > 0) {
      if (strArr[0].match(/[0-9]/) !== null
       && strArr[1].match(/[0-9]/) !== null) {
        subStr += strArr[2].repeat(parseInt(strArr[0] + strArr[1], 10));
        strArr.splice(0, 3);
      } else if (strArr[0].match(/[0-9]/) !== null) {
        subStr += strArr[1].repeat(parseInt(strArr[0], 10));
        strArr.splice(0, 2);
      } else {
        subStr += strArr.shift();
      }
    }
    return subStr;
  }
}

module.exports = { encode, decode };