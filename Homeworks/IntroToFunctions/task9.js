// Write a function which receives an array and a number as arguments and returns a new array from the
// elements of the given array which are largerthan the given number.

function largeNum(arr, num) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(largeNum([10, 25, 16, -5, 30, 15, 24], 16));
