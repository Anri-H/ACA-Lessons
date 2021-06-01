// Given a number. Write a function that calculates its sum of the digits and if that sum has
// more than 1 digit find the sum of digits of that number. Repeat that process if needed
// and return the result.

function sumOfDigits(num) {
  if (typeof num === "number") {
    num = `${num}`.split("");
  }
  let sum = 0;
  num.forEach((el) => {
    sum += el;
  });
}
