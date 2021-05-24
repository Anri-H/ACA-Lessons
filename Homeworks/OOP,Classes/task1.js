class Author {
  constructor(name, email, gender) {
    this._name = name;
    this.email = email;
    this.gender = gender;
  }
  set name(val) {
    throw Error("You can't changed Author name");
  }
  get name() {
    return this._name;
  }
  toString() {
    return `Ms: ${this.name}`;
  }
}

class Book {
  constructor(title, author, price, quantity) {
    this._title = title;
    this._author = author;
    this._price = price;
    this._quantity = quantity;
  }
  getProfit() {
    return this._quantity * this._price;
  }
  toString() {
    return `${this._title}`;
  }
  set title(val) {
    throw Error("You can't changed Book title");
  }
  get title() {
    return this._title;
  }
  set author(val) {
    throw Error("You can't changed Book author");
  }
  get author() {
    return this._author;
  }
  set price(val) {
    throw Error("You can't changed Book price");
  }
  get price() {
    return this._price;
  }
  set quantity(val) {
    throw Error("You can't changed Book quantity");
  }
  get quantity() {
    return this._quantity;
  }
}
let author1 = new Author("J. K. Rowling", "abc@gmail.com", "fEmaLe");
console.log(author1.gender); // female
console.log(author1.name); // J. K. Rowling
console.log(author1.toString()); // Ms. J. K. Rowling
author.name = 12; 