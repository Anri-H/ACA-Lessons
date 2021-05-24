function Author(name, email, gender) {
  this._name;
  this.email = email;
  this.gender = gender;
  set _name(name) {
    throw 
  },
  get _name() {
    return this._name;
  },
}

Author.prototype.toString = function () {
  return `Ms: ${this.name}`;
};


function Book(title, author, price, quantity) {
  this.title = title;
  this.author = author;
  this.price = price;
  this.quantity = quantity;
}

Book.prototype.getters = ;

Book.prototype.setters = ;

Book.prototype.getProfit = function () {
  return this.quantity * this.price;
};

Book.prototype.toString = function () {
    return `${this.title}`
}