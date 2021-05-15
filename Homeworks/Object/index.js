let users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

function groupById(users) {
  return users.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {});
}
console.log(groupById(users));
