class Person {
  constructor(firstName, lastName, gender, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._gender = gender;
    this._age = age;
  }
  set firstName(val) {
    this._firstName = val;
  }
  get firstName() {
    return this._firstName;
  }
  set lastName(val) {
    this._lastName = val;
  }
  get lastName() {
    return this._lastName;
  }
  set gender(val) {
    this._gender = val;
  }
  get gender() {
    return this._gender;
  }
  set age(val) {
    this._age = val;
  }
  get age() {
    return this._age;
  }
  toString() {
    return `${this.firstName} ${this.lastName}, ${this.age} years old.`;
  }
}

let user1 = new Person("Name", "Surname", "female", 23);
console.log(user1.toString());

class Student {
  constructor(year, fee, program) {
    this._year = year;
    this._fee = fee;
    this._program = program;
    this.__proto__ = Person;
  }
  set year(val) {
    this._year = val;
  }
  get year() {
    return this._year;
  }
  set fee(val) {
    this._fee = val;
  }
  get fee() {
    return this._fee;
  }
  set program(val) {
    this._program = val;
  }
  get program() {
    return this._program;
  }
}

let student1 = new Student();
