function makeList() {
  let items = []
  return {

    list: function() {
        if (items.length === 0) {
          console.log('The lsit is empty');
        }
        else {
          items.forEach(item => console.log(item));
        }
      },

    add: function(message) {
      items.push(message);
      console.log(`${message} added!`);
    },

    remove: function(message) {
      let index = items.indexOf(message);
      items.splice(index, 1);
      console.log(`${message} removed!`);
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

console.log(list.items);
console.log(items);
