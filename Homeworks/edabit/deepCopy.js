const obj = {
  name: "Vzg",
  age: 777,
  friends: {
    kyaj: {
      name: "kyaj",
      age: 1234,
      friends: {
        name: "Vzg",
        age: 777,
      },
    },
    klep: {
      name: "Vaspur",
      age: "no age",
      friends: "no friends",
    },
  },
};

function cloneObject(obj) {
  const clone = {};
  for (const key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null)
      clone[key] = cloneObject(obj[key]);
    else clone[key] = obj[key];
  }
  return clone;
}

const clone = cloneObject(obj);
obj.friends.kyaj.name = "hajox";
console.log(clone);
console.log(obj);
