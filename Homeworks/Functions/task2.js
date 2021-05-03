// Write a function that calculates sum, difference, multiplication and division between given array elements
// depending on passed operation symbol. Write appropriate function for each operation

function sum(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}
