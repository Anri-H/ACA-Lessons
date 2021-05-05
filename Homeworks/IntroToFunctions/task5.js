// Write a function, which receives a string, finds possible largest numbers in the string and returns their
// sum.

function findNumSum(str) {
  let numbers = 0;
  let num = "";
  for (let i = 0; i < str.length; i++) {
    if (isNaN(str[i]) && !isNaN(str[i - 1])) {
      numbers += Number(num);
      num = "";
    }
    if (!isNaN(str[i])) {
      num += str[i];
    }
  }
  return numbers;
}
console.log(findNumSum("drtdg3hdsd32 jj 6hbghj23hv"));
