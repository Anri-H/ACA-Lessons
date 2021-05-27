class CoffeeShop {
  constructor(name, menu) {
    this.name = name;
    this.menu = menu;
    this.orders = [];
  }

  addOrder(item) {
    this.menu.forEach((el) => {
      if (el.name === item) {
        return this.orders.push(el);
      }
    });
    return "This item is currently unavailable!";
  }

  fulfillOrder() {
    if (this.orders.length) {
      return `The ${this.orders.shift().name} is ready!`;
    } else return "All orders have been fulfilled!";
  }

  listOrders() {
    return this.orders.map((el) => {
      return el.name;
    });
  }

  dueAmount() {
    let res = 0;
    this.orders.forEach((el) => (res += el.price));
    return res;
  }

  cheapestItem() {
    const res = this.menu.sort((a, b) => {
      return a.price - b.price;
    });
    return res[0].name;
  }

  drinksOnly() {
    let drinks = this.menu.filter((el) => {
      if (el.type === "drink") {
        return el.name;
      }
    });
    return drinks.map((el) => el.name);
  }

  foodOnly() {
    let food = this.menu.filter((el) => {
      if (el.type === "food") {
        return el.name;
      }
    });
    return food.map((el) => el.name);
  }
}

let tcs = new CoffeeShop("shop1", [
  { name: "orange juice", type: "drink", price: 1.1 },
  { name: "lemonade", type: "drink", price: 2.3 },
  { name: "cranberry juice", type: "drink", price: 1.4 },
  { name: "pineapple juice", type: "drink", price: 1.5 },
  { name: "lemon iced tea", type: "drink", price: 2.1 },
  { name: "vanilla chai latte", type: "drink", price: 3.0 },
  { name: "hot chocolate", type: "drink", price: 1.4 },
  { name: "iced coffee", type: "drink", price: 2.0 },

  { name: "tuna sandwich", type: "food", price: 3.1 },
  { name: "ham and cheese sandwich", type: "food", price: 4.3 },
  { name: "bacon and egg", type: "food", price: 3.4 },
  { name: "steak", type: "food", price: 4.3 },
  { name: "hamburger", type: "food", price: 3.1 },
  { name: "cinnamon roll", type: "food", price: 3.3 },
]);
console.log(tcs.addOrder("hot cocoa")); // "This item is currently unavailable!"
// Tesha's coffee shop does not sell hot cocoa
console.log(tcs.addOrder("iced tea")); // "This item is currently unavailable!"
// specifying the variant of "iced tea" will help the process
console.log(tcs.addOrder("cinnamon roll")); // "Order added!"
console.log(tcs.addOrder("iced coffee")); // "Order added!"
console.log(tcs.listOrders()); // ["cinnamon roll", "iced coffee"]
// the list of all the items in the current order
console.log(tcs.dueAmount()); // 2.17
console.log(tcs.fulfillOrder()); // "The cinnamon roll is ready!"
console.log(tcs.fulfillOrder()); // "The iced coffee is ready!"
console.log(tcs.fulfillOrder()); // "All orders have been fulfilled!"
// all orders have been presumably served
console.log(tcs.listOrders()); // []
// an empty array is returned if all orders have been exhausted
console.log(tcs.dueAmount()); // 0.0
// no new orders taken, expect a zero payable
console.log(tcs.cheapestItem()); // "lemonade"
console.log(tcs.drinksOnly()); // ["orange juice", "lemonade", "cranberry juice",
// // "pineapple juice", "lemon iced tea", "vanilla chai latte", "hot chocolate", "iced coffee"]
console.log(tcs.foodOnly()); // ["tuna sandwich", "ham and cheese sandwich", "bacon and egg",
// //"steak", "hamburger", "cinnamon roll"]
