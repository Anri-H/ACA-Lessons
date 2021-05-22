function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}

Person.prototype.eat = function (food) {
  if (this.stomach.length < 10) {
    this.stomach.push(food);
  }
};

Person.prototype.poop = function () {
  this.stomach = [];
};

Person.prototype.toString = function () {
  return `${this.name},${this.age}`;
};

Person.prototype.compareAge = function (person) {
  if (this.age === person.age) {
    return `${person.name} is the same age as me.`;
  }
  if (this.age > person.age) {
    return `${person.name} is younger than me.`;
  }
  if (this.age < person.age) {
    return `${person.name} is older than me.`;
  }
};

const p1 = new Person("Samuel", 24);
const p2 = new Person("Joel", 36);
const p3 = new Person("Lily", 24);
p1.eat("duck");
console.log(p1);
console.log(p1.compareAge(p2));
