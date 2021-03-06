// Write a function, which receives an array as an argument which elements arrays of numbers. Find
// product of biggest negative number of each array. If there is not any negative number, ignore that array.
// Check that items of the given array are arrays.

function biggestNegativeNum(arr) {
  let result;
  for (let i = 0; i < arr.length; i++) {
    let negativeNumber;
    for (let j = 0; j < arr[i].length; j++) {
      let itsNumber = arr[i][j];
      if (Array.isArray(itsNumber)) {
        return "Invalid Argument";
      }
      if (
        (negativeNumber === undefined && itsNumber < 0) ||
        (itsNumber < 0 && negativeNumber < itsNumber)
      ) {
        negativeNumber = itsNumber;
      }
    }
    if (negativeNumber !== undefined) {
      !result ? (result = negativeNumber) : (result *= negativeNumber);
    }
  }
  return result ? result : "No negatives";
}

console.log(
  biggestNegativeNum([
    [2, -9, -3, 0],
    [1, 2],
    [-4, 11, 0],
  ])
);
