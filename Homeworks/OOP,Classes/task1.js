class Author {
  constructor(name, email, gender) {
    this._name = name;
    this.email = email;
    this.gender = gender;
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
    this._title = val;
  }
  get title() {
    return this._title;
  }
  set author(val) {
    this._author = val;
  }
  get author() {
    return this._author;
  }
  set price(val) {
    if (typeof val === "number" && val > 0) {
      this._price = val;
    }
  }
  get price() {
    return this._price;
  }
  set quantity(val) {
    if (typeof val === "number" && val > 0) {
      this._quantity = val;
    }
  }
  get quantity() {
    return this._quantity;
  }
}
let author1 = new Author("J. K. Rowling", "abc@gmail.com", "fEmaLe");
let book1 = new Book("js", author1, 10, 50);
console.log(author1.gender); // female
console.log(author1.name); // J. K. Rowling
console.log(author1.toString()); // Ms. J. K. Rowling
// author.name = 12;
console.log(book1);
book1.price = "12";
console.log(book1);
console.log(book1.getProfit());
