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
