//Given an array, return the sum of numbers that are 18 or over.

const arr = [1, 22, 55, 166, 5, 36, 11, 205, 333, 95, 62, 10, 43];

function sumOver18(arr) {
  return arr
    .filter((el) => el >= 18)
    .reduce((acc, item) => {
      return acc + item;
    }, 0);
}

console.log(sumOver18(arr));
