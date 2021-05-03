// Write a function that calculates sum, difference, multiplication and division between given array elements
// depending on passed operation symbol. Write appropriate function for each operation

function sum(arr) {
  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}

function difference(arr) {
  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    result -= arr[i];
  }
  return result;
}

function multiplication(arr) {
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
      result *= arr[i];
    }
    return result;
  }