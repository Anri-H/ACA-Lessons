//Given two objects. Write a function that performs shallow compare.

let a = { a: "1" };
let b = { a: "1" };

function shallowCompare(a, b) {
  for (let key in a) {
    if (a[key] !== b[key]) {
      return false;
    }
  }
  return true;
}

shallowCompare(a, b);
