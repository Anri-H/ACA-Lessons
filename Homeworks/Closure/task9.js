//Given an array of numbers. Find the sum of numbersʼ quadratic which are even.

function sumQuadraticEven(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result += Math.pow(arr[i]);
    }
  }
  return result;
}

console.log(sumQuadraticEven([12, 43, 22, 1]));
