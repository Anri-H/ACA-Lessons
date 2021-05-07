let a = 40;
let b = 60;
console.log(180 - a - b);

//Find the sign of product of three numbers without multiplication operator. Display the specified sign.
let numArr = [-4, 3, 7];
let result = 1;
for (let i = 0; i < numArr.length; i++) {
  result *= numArr[i];
}
if (result < 0) {
  console.log("-");
} else if (result > 0) {
  console.log("+");
} else console.log("unsigned");

//Insert a digit and a number. Check whetherthe digits contains in the number or not.

function digitNumber(digit, number) {
  number = number.toString();
  for (let i = 0; i < number.length; i++) {
    if (+number[i] === digit) {
      return console.log("Yes");
    }
  }
  return console.log("No");
}
digitNumber(7, 245);

//Given a number n ( n >= 0 ) . Print n Fibonacci number.

function fibonacci(val) {
  let a = 1;
  let b = 0;
  let c = 0;
  for (let i = 0; c <= val; i++) {
    console.log(c);
    c = a + b;
    a = b;
    b = c;
  }
}
fibonacci(20);




// Given a sentence with missing words and an array of words. Replace all ‘_ʼ in a sentence with the words
// from the array.

let sentences = "_, we have a _.";
let arr = ["Houston", "problem"];
let newStr = "";

for (let i = 0; i < sentences.length; i++) {
  if (sentences[i] === "_") {
    newStr += arr.shift();
  } else newStr += sentences[i]
}

console.log(newStr);