//Write a recursive function to find the sum of a given array.

function sum(arr, index) {
  if (index === arr.length - 1) {
    return arr[index];
  }
  return arr[index] + sum(arr, index + 1);
}

console.log(sum([12, 3, 2, 1, 4, 54], 0));
