// Given a number. Write a function that calculates its sum of the digits and if that sum has
// more than 1 digit find the sum of digits of that number. Repeat that process if needed
// and return the result.

function sumOfDigits(num) {
  if (typeof num === "number") {
    num = `${num}`;
  }
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    const el = num[i];
    sum += +el;
  }
  if (sum > 9) {
    return sumOfDigits(sum);
  }
  return sum;
}

console.log(sumOfDigits(93));
