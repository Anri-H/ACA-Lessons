// Given an array of numbers. Write a recursive function to find its minimal positive
// element. (if such element does not exist, return -1).

function minPositive(arr) {
  let minNum = -1;
  function min(arr, i = 0) {
    const item = arr[i];
    if (i === arr.length) {
      return minNum;
    }
    if (item >= 0) {
      if (minNum < 0 || item < minNum) {
        minNum = item;
        return min(arr, i + 1);
      }
    }
    return min(arr, i + 1);
  }
  return min(arr);
}

console.log(minPositive([56, -9, 87, -23, 0, -105, 55, 1]));
console.log(minPositive([45, -9, 15, 5, -78]));
console.log(minPositive([-5, -9, -111, -1000, -7]));
