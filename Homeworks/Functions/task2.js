// Write a function that calculates sum, difference, multiplication and division between given array elements
// depending on passed operation symbol. Write appropriate function for each operation

function calculate(aperation, arr) {
  switch (aperation) {
    case "+":
      return sum(arr);
    case "-":
      return difference(arr);
    case "*":
      return multiplication(arr);
    case "/":
      return division(arr);
    default:
      break;
  }
}

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

function division(arr) {
  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    result /= arr[i];
  }
  return result;
}

console.log(calculate("*", [45, 12, 3, 6, 17]));
