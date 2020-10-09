let ItemCreator = (function() {

  function createCode(itemName, category) {
    return itemName.replace(/\s/g, '').slice(0, 3).toUpperCase() +
           category.replace(/\s/g, '').slice(0, 2).toUpperCase();
  }

  function validName(itemName) {
    return itemName.replace(/\s/g, '').length >= 5;
  }

  function validCategory(category) {
    return category.replace(/\s/g, '').length >= 5 && category.split(' ').length === 1;
  }

  function validQuantity(quantity) {
    return quantity !== undefined;
  }

  return function(itemName, category, quantity) {
    if (validName(itemName) && validCategory(category) && validQuantity(quantity)) {
      this.name = itemName;
      this.category = category;
      this.quantity = quantity;
      this.code = createCode(itemName, category);
    }
    else {
      return {
        notValid: true
      };
    }
  };
})();


let ItemManager = {
  items: [],
  getItem: function(sku) {
    return this.items.filter(function(item) {
      return item.code === sku;
    })[0];
  },

  create: function(itemName, category, quantity) {
    let item = new ItemCreator(itemName, category, quantity);
    if(item.notValid) {
      return false;
    } 
    else {
      this.items.push(item);
    }
  },

  update: function(sku, information) {
    Object.assign(this.getItem(sku), information);
  },

  delete: function(sku) {
    this.items.splice(this.items.indexOf(this.getItem(sku)), 1);
  },

  list: function() {
    items.forEach(item => {
      console.log(item.name);
    });
  },

  inStock: function() {
    return this.items.filter(item => item.quantity > 0);
  },

  itemsInCategory: function(category) {
    return this.items.filter(item => item.category === category);
  },
};


let ReportManager = {
  init: function(itemManager) {
    this.items = itemManager;
  },

  createReporter(sku) {
    return (function() {
      let item = this.items.getItem(sku);
      return {
        itemInfo: function() {
          Object.keys(item).forEach(key => {
            console.log(key + ': ' + item[key]);
          });
        },
      };
    }).bind(this)();
  },

  reportInStock() {
    console.log(this.items
                    .inStock()
                    .map(item => item.name)
                    .join(','));
  },
};





ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
// returns list with the 4 valid items
ItemManager.items;

ReportManager.init(ItemManager);
// logs soccer ball,football,kitchen pot
ReportManager.reportInStock();

ItemManager.update('SOCSP', { quantity: 0 });
// returns list with the item objects for football and kitchen pot
ItemManager.inStock();
// football,kitchen pot
ReportManager.reportInStock();

// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.itemsInCategory('sports');

ItemManager.delete('SOCSP');
// returns list the remaining 3 valid items (soccer ball is removed from the list)
ItemManager.items;

let kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10