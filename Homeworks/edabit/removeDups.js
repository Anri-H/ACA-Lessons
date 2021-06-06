// Create a function that takes an array of items, removes all duplicate items and
// returns a new array in the same sequential order as the old array (minus duplicates).

function removeDups(arr) {
  let newArr = new Set();
  arr.forEach((el) => {
    newArr.add(el);
  });
  return Array.from(newArr);
}

console.log(removeDups([1, 0, 1, 0]));
