// Given an array of numbers which is almost sorted in ascending order. Find the index
// where sorting order is violated.

function sortingViolated(arr, i = 0) {
  if (arr[i] > arr[i + 1]) {
    return i + 1;
  }
  if (i + 1 === arr.length - 1) {
    return -1;
  }
  return sortingViolated(arr, i + 1);
}

console.log(sortingViolated([2, 12, 15, 48, 64]));
console.log(sortingViolated([-9, -4, -4, 3, 12, 4, 5]));
