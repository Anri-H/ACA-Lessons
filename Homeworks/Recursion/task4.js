// Given an array. Write a recursive function that removes the first element and returns the
// given array. (without using arr.shift())

function removeFirst(arr) {
  let newArr = [];
  function removeFirstEl(arr, i = 0) {
    if (i === arr.length - 1) {
      return newArr;
    }
    newArr[i] = arr[i + 1];
    return removeFirstEl(arr, i + 1);
  }
  return removeFirstEl(arr);
}

console.log(removeFirst([6, 78, "n", 0, 1]));
