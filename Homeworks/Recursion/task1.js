//Write a recursive function to determine whether all digits of the number are odd or not.

function allDigitsOdd(num) {
  num1 = `${num}`.split("");
  if (num1[0] % 2 === 0) {
    return false;
  }
  if (num1.length === 1) {
    return true;
  }
  return allDigitsOdd(num1.unshift());
}

console.log(allDigitsOdd(79519));
