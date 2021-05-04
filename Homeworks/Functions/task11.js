// Write a function, which receives two numbers as arguments and finds all numbers between them such
// that each digit of the numberis even. The numbers obtained should be printed in a comma-separated
// sequence on a single line.

function evenNum(num1, num2) {
  let res = "";
  for (let i = num1; i <= num2; i++) {
    if (i % 2 === 0) {
      res += `${i}, `;
    }
  }
  return res;
}
console.log(evenNum(19, 32))
