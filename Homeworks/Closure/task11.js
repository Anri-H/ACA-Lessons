// Given an array of integers, find the pair of adjacent elements that has the largest product and return that
// product.

function largestProd(arr) {
  let firstMax = Math.max(...arr);
  let max = -Infinity;
  arr.forEach((element) => {
    if (element !== firstMax) {
      if (element > max) {
        max = element;
      }
    }
  });
  return (firstMax *= max);
}

console.log(largestProd([8, 5, 1, 4]));
