(function count(number) {
  console.log(number);
  if (number !== 0) {
        count(number - 1);
  } 
})(7);