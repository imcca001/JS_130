//Create a function named makeCounterLogger that takes a 
// number as an argument and returns a function. When we 
// invoke the returned function with a second number, 
// it should count up or down from the first number to the 
// second number, logging each number to the console:

// function makeCounterLogger(num1) {
//   return function(num2) {
//     if ((num1 - num2) > 0) {
//       while (num1 >= num2) {
//         console.log(num1);
//         num1 -= 1;
//       }
//       return
//     }
//     else {
//       while (num2 >= num1) {
//         console.log(num1);
//         num1 += 1;
//       }
//       return
//     }
//   }
// }


function makeCounterLogger(start) {
  return function(finish) {
    let number;

    if (start > finish) {
      for (number = start; number >= finish; number -= 1) {
        console.log(number);
      }
    } else {
      for (number = start; number <= finish; number += 1) {
        console.log(number);
      }
    }
  };
}


let countlog = makeCounterLogger(5);
countlog(8);
// 5
// 6
// 7
// 8

countlog(2);
// 5
// 4
// 3
// 2