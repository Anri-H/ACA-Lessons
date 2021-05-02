function sum(val) {
  return val > 18 ? true : false;
}

function reverse(arr) {
  let result = [];
  let c = arr.length - 1;
  for (let i = 0; c >= 0; i++) {
    result[c] = arr[i];
    c--;
  }
  return result;
}
console.log(reverse([1, 2, 3, 4]));

function factorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(5));

function cylinderSurface(r, h) {
  const p = 3.14;
  return 2 * p * r * r * h;
}
console.log(cylinderSurface(5, 10));
