// - Create a function that takes an array of numbers arr, a string str
// and return an array of numbers as per the following rules:
// - "Asc" returns a sorted array in ascending order.
// - "Desc" returns a sorted array in descending order.

function sortBy(arr, str) {
  if (str === "Desc") {
    const desc = (a, b) => a > b;
    return arr.sort(desc);
  }
  if (str === "Asc") {
    const asc = (a, b) => a - b;
    return arr.sort(asc);
  }
}

console.log(sortBy([4, 14, 2, 1], "Asc"));
