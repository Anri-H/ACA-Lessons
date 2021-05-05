// Write a function, which receives two numbers as arguments and finds all numbers between them such
// that each digit of the numberis even. The numbers obtained should be printed in a comma-separated
// sequence on a single line.

function evenNum(num1, num2) {
  let res = "";

  for (let i = num1; i <= num2; i++) {
    for (let j = 0; j < toString(i).length; j++) {
      
      if (toString(i)[j] % 2 !== 0) {
        continue;
      }
      if (i % 2 === 0) {
        res += `${i}, `;
      }
    }
    if (res === "") {
      return "Such numbers does not exist.";
    }
    }
    
    
  return res;
}
console.log(evenNum(150, 230));
