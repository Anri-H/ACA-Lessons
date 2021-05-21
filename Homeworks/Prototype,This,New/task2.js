function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
  this.eat = (food) => {
    if (this.stomach.length < 10) {
      this.stomach.push(food);
    }
  };
  this.poop = () => {
    this.stomach = [];
  };
  this.toString = () => {
    return `${this.name},${this.age}`;
  };
}

const p1 = new Person("Samuel", 24);
const p2 = new Person("Joel", 36);
const p3 = new Person("Lily", 24);
p1.eat("duck");
p1.poop();
console.log(p1.toString());
