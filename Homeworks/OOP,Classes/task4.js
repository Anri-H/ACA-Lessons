class Book {
  constructor(title, author) {
    this._title = title;
    this._author = author;
  }

  get title() {
    return this._title;
  }

  get author() {
    return this._author;
  }

  toString() {
    return `title: ${this.title}, author: ${this.author}`;
  }

  isTheSameBook(book) {
    if (this.title === book.title && this.author === book.author) {
      return true;
    } else false;
  }
}

class LibraryBookBase extends Book {
  constructor(title, author, bookId) {
    super(title, author);
    this.bookId = bookId;
  }

  toString() {
    return `title: ${this.title}, 
      author: ${this.author}`;
  }
}

class LibraryBook extends LibraryBookBase {
  constructor(title, author, bookId, quantity) {
    super(title, author, bookId);
    this._quantity = quantity;
  }

  set title(val) {
    if (typeof val === "string") {
      this._title = val;
    }
  }
  get title() {
    return this._title;
  }

  set author(val) {
    if (typeof val === "string") {
      this._author = val;
    }
  }
  get author() {
    return this._author;
  }

  set quantity(val) {
    if (typeof val === "number" && !isNaN()) {
      this._quantity = val;
    }
  }
  get quantity() {
    return this._quantity;
  }

  toString() {
    return `title: ${this.title},
    author: ${this.author},
    quantity: ${this.quantity}`;
  }

  increaseQuantityBy(amount) {
    this.quantity += amount;
  }

  decreaseQuantityBy(amount) {
    this.quantity -= amount;
  }
}

class ReaderBook extends LibraryBookBase {
  constructor(title, author, expirationDate, isReturned) {
    super(title, author);
    this._expirationDate = expirationDate;
    this._isReturned = isReturned;
    this.bookId = Math.random();
  }

  set title(val) {
    if (typeof val === "string") {
      this._title = val;
    }
  }
  get title() {
    return _title;
  }

  set author(val) {
    if (typeof val === "string") {
      this._author = val;
    }
  }
  get author() {
    return _author;
  }

  set expirationDate(val) {
    if (typeof val === "string") {
      this._expirationDate = val;
    }
  }
  get expirationDate() {
    return _expirationDate;
  }

  set isReturned(val) {
    if (typeof val === "boolean") {
      this._isReturned = val;
    }
  }
  get isReturned() {
    return this._isReturned;
  }

  toString() {
    return `title: ${this.title},
    author: ${this.author},
    expirationDate: ${this._expirationDate},
    isReturned: ${this._isReturned}`;
  }
}

class Reader {
  constructor(firstName, lastName, books, readerId) {
    this._firstName = firstName;
    this._lastName = lastName;
    this.readerId = readerId;
    this._books = books;
  }

  set firstName(val) {
    if (typeof val === "string") {
      this._firstName = val;
    }
  }
  get firstName() {
    return this._firstName;
  }

  set lastName(val) {
    if (typeof val === "string") {
      this._lastName = val;
    }
  }
  get lastName() {
    return this._lastName;
  }

  set books(val) {
    this._books = val;
  }
  get books() {
    return this._books;
  }

  toString() {
    return `firstName: ${this.firstName},
      lastName: ${this.lastName},
      `;
  }
}

class Library extends LibraryBook {
  constructor(title, author, expirationDate, isReturned, books, readers) {
    super(title, author, expirationDate, isReturned);
    this._books = [books];
    this._readers = [readers];
  }

  get books() {
    return this._books;
  }
  get readers() {
    return this._readers;
  }

  doHaveBook(request) {
    let req = JSON.stringify(request);
    for (let i = 0; i < this.books.length; i++) {
      const element = this.books[i];
      if (req === JSON.stringify(element)) {
        return true;
      }
      return false;
    }
  }

  addBook(newBook) {
    let book = JSON.stringify(newBook);
    for (let i = 0; i < this.books.length; i++) {
      const element = this.books[i];
      if (book === JSON.stringify(element)) {
        this.quantity++;
      } else {
        this.books.push(JSON.parse(book));
      }
    }
  }

  addBooks(newBook) {
    let book = JSON.stringify(newBook);
    for (let i = 0; i < this.books.length; i++) {
      const element = this.books[i];
      if (book === JSON.stringify(element)) {
        this.quantity++;
      } else {
        this.books.push(JSON.parse(book));
      }
    }
    return this.books;
  }

  checkReaderId(id) {
    for (let i = 0; i < this.books.length; i++) {
      if (id === this.readers[i].readerId) {
        return true;
      } else {
        return false;
      }
    }
  }

  lendBook(book) {
    this.books.forEach((elem) => {
      if (JSON.stringify(book) === JSON.stringify(elem)) {
        return true;
      }
    });
    return false;
  }
}

let book1 = new Book("Sherlock Holms", "Arthur Conan Doyle");
let book2 = new Book("She", "Arthur Conan Doyle");
let libok = new LibraryBook("Sherlock Holms", "Arthur Conan Doyle", 12);
let libBook1 = new LibraryBook("Sherlock Holms", "Arthur Conan Doyle", 12);
let libBook2 = new LibraryBook("Sherlock Holms", "Arthur Conan Doyle", 12);
let reed1 = new Reader("Sat", "Kars", "Sherlock", 1);
let reed2 = new Reader("aaaaaa", "rs", "Sherlock", 2);
let lib = new Library("Sherlock Holms", "Arthur Conan Doyle", 1, book1, reed2);

lib.addBook(book1);
console.log(lib);
