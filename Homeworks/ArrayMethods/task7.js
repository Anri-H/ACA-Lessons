// Given an array, return a new array that only includes the numbers.

const arr = [1, 2, "a", true, {}, undefined, 55, false, "hi", null, 166, NaN];

function numbersInclude(arr) {
  return arr.filter((el) => {
    if (typeof el === "number") {
      return el;
    }
  });
}
console.log(numbersInclude(arr));
