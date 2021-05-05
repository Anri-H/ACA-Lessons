// Write a function, which receives an array as an argument which elements arrays of numbers. Find
// product of biggest negative number of each array. If there is not any negative number, ignore that array.
// Check that items of the given array are arrays.

function biggestNegativeNum(arr) {
  let result = 1;
  for (let i = 0; i < arr.length; i++) {
    let negativeNumber;

    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === undefined) {
        return "Invalid Argument";
      }
      if (
        (negativeNumber === undefined && arr[i][j] < 0) ||
        0 > arr[i][j] > negativeNumber
      ) {
        negativeNumber = arr[i][j];
      }
      //   if (arr[i][j] > negativeNumber) {
      //     negativeNumber = arr[i][j];
      //   }
    }
    if (negativeNumber !== undefined) {
    }
    result *= negativeNumber;
  }

  return result;
}

console.log(
  biggestNegativeNum([
    [2, -9, -3, 0],
    [1, 2],
    [-4, -11, 0],
  ])
);
