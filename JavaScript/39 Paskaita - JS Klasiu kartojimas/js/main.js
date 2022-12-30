const menu = [
  { item: "Cappuccino", type: "drink", price: 3.5 },
  { item: "Latte", type: "drink", price: 2.5 },
  { item: "Filter Coffee", type: "drink", price: 2.0 },
  { item: "Muffin", type: "food", price: 3.5 },
  { item: "Croissant", type: "food", price: 2.5 },
  { item: "Brownie", type: "food", price: 2.0 },
];

class CoffeeShop {
  constructor(name, menu) {
    this.name = name;
    this.menu = menu;
    this.orders = [];
  }

  addOrder(item) {
    if (this.menu.find(el => el.item === item)) {
      this.orders.push(item);
      return "Order added!";
    } else {
      return "This item is currently unavailable!";
    }
  }



  fulfillOrder() {
    if (this.orders.length) {
      return `The ${this.orders.shift()} is ready!`;
    } else {
      return "All orders have been fulfilled!";
    }
  }

  listOrders() {
    return this.orders;
  }

  dueAmount() {
    let sum = 0;
    for (let i = 0; i < this.orders.length; i++) {
      sum += this.menu.find(el => el.item === this.orders[i]).price;
    }
    return sum;
  }


  cheapestItem() {
    let cheapest = this.menu[0];
    for (let i = 1; i < this.menu.length; i++) {
      if (this.menu[i].price < cheapest.price) {
        cheapest = this.menu[i];
      }
    }
    return cheapest.item;
  }

  drinksOnly() {
    return this.menu.filter(el => el.type === "drink").map(el => el.item);
  }

  foodOnly() {
    return this.menu.filter(el => el.type === "food").map(el => el.item);
  }
}



const coffeeShop = new CoffeeShop("Starbucks", menu);

console.log(coffeeShop.addOrder("Cappuccino"));
//fulfillOrder: if the orders array is not empty, return "The {item} is ready!". If the orders array is empty, return "All orders have been fulfilled!"
console.log(coffeeShop.fulfillOrder());
console.log(coffeeShop.fulfillOrder());
//listOrders: returns the list of orders taken, otherwise, an empty array.
console.log(coffeeShop.listOrders());
//dueAmount: returns the total amount due for the orders taken.
console.log(coffeeShop.dueAmount());
//cheapestItem: returns the name of the cheapest item on the menu.
console.log(coffeeShop.cheapestItem());
//drinksOnly: returns only the item names of type drink from the menu.
console.log(coffeeShop.drinksOnly());
//foodOnly: returns only the item names of type food from the menu.
console.log(coffeeShop.foodOnly());

