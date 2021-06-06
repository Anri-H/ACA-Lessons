// An array is special if every even index contains an even number
// and every odd index contains an odd number. Create a function that
// returns true if an array is special, and false otherwise.

function isSpecialArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if ((el % 2 !== 0 && i % 2 === 0) || (el % 2 === 0 && i % 2 !== 0)) {
      return false;
    }
  }
  return true;
}

console.log(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]));
console.log(isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]));
