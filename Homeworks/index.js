let user = {
  name: "fdsf",
  age: 23,
  email: ["cdsfdsf", "fcsfcsc"],
};

let keys = Object.assign({},user);

user.age = 12;
user.email[2] = 15;

console.log(user);
console.log(keys);
