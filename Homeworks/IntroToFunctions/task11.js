// Write a function, which receives two numbers as arguments and finds all numbers between them such
// that each digit of the numberis even. The numbers obtained should be printed in a comma-separated
// sequence on a single line.

function evenNum(num1, num2) {
  let res = "";

  for (let i = num1; i <= num2; i++) {
    let num = String(i);
    let strNum = "";
    for (let j = 0; j < num.length; j++) {
      if (num[j] % 2 === 0) {
        strNum += num[j];
      } else {
        strNum = "";
        break;
      }
    }
    if (strNum % 2 === 0 && strNum !== "") {
      res += `${strNum},`;
    }
  }
  if (res === "") {
    return "Such numbers does not exist.";
  }
  return res.trim();
}
console.log(evenNum(150, 230));
