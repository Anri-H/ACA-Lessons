// Given an array and a number N. Write a recursive function that rotates an array N
// places to the left. (Hint: to add element to the beginning use arr.unshift())

function rotate(arr, i) {
  if (i === 0) {
    return arr;
  }
  if (i > 0) {
    let first = arr.shift();
    arr.push(first);
    return rotate(arr, i - 1);
  }
  if (i < 0) {
    let last = arr.pop();
    arr.unshift(last);
    return rotate(arr, i + 1);
  }
}

console.log(rotate(["a", "b", "c", "d", "e", "f", "g", "h"], 3));
console.log(rotate(["a", "b", "c", "d", "e", "f", "g", "h"], -2));
