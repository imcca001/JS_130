// The function returned by makeList lets the user perform three 
// different actions (adding, removing, and listing) 
// by calling the function with appropriate arguments. 
// It works, but the interface isn't clear. Astonishingly, 
// the single call list('make breakfast') performs two 
// entirely different operations based on the current 
//state of the list!

// We can improve the interface by returning an Object from 
// makeList instead of a function. That lets us create an 
// API that is easy to use and understand:

// function makeList() {
//   let list = [];

//   return function(newItem) {
//     if (!newItem) {
//       if (list.length === 0) {
//         console.log(`The List is Empty`);
//       }
//       else {
//         list.forEach(item => console.log(item));
//       }
//     }
//     else if (list.includes(newItem)) {
//       let index = list.indexOf(newItem);
//       list.splice(index, 1);
//       console.log(`${newItem} was removed!`);
//     }
//     else {
//       list.push(newItem);
//       console.log(`${newItem} was added!`);
//     }
//   };
// }

function makeList() {
  let items = [];

  return {
    // items: [], -- this line removed

    add: function(item) {
      let index = items.indexOf(item);
      if (index === -1) {
        items.push(item);
        console.log(item + " added!");
      }
    },

    list: function() {
      if (items.length === 0) {
        console.log("The list is empty.");
      } else {
        items.forEach(function(item) {
          console.log(item);
        });
      }
    },

    remove: function(item) {
      let index = items.indexOf(item);
      if (index !== -1) {
        items.splice(index, 1);
        console.log(item + " removed!");
      }
    },
  };
}



let list = makeList();
list.add("peas");
// peas added!

list.list();
// peas

list.add("corn");
// corn added!

list.list();
// peas
// corn

list.remove("peas");
// peas removed!

list.list();
// corn