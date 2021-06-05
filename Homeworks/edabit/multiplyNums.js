//Given a string of numbers separated by a comma and space, return the product of the numbers.

function multiplyNums(str) {
  let sum = 1;
  str.split(", ").forEach((el) => {
    sum *= el;
  });
  return sum;
}

console.log(multiplyNums("54, 75, 453, 0"));
