//Write a recursive function to determine whether all digits of the number are odd or not.

function allDigitsOdd(num) {
  if (typeof num === "number") {
    return allDigitsOdd(`${num}`.split(""));
  }
  if (num[0] % 2 === 0) {
    return false;
  }
  if (num.length === 1) {
    return true;
  }
  num.shift();
  return allDigitsOdd(num);
}

console.log(allDigitsOdd(79519132));
