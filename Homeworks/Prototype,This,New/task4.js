function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Baby(name, age, favoriteToy) {
  Person.call(this, name, age);
  this.favoriteToy = favoriteToy;
}
Baby.prototype.play = function () {
  return `Playing with ${this.favoriteToy}`;
};

const lyusi = new Baby("Lyusi", 4, "tigr");

console.log(lyusi.play());
console.log(lyusi);
