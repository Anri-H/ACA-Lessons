// Task 1. Given a number. Print “odd” if the numberis odd and “even” if itʼs even.

let number = +prompt("Please enter number ");
if (isNaN(number)) {
  alert("NaN");
} else if (number % 2 === 0) {
  alert("odd");
} else alert("even");


// Given a positive integer. Bring the last digit of the numberto the beginning. Print the new number. If the
// last digit of the inserted numberis 0, numberremains the same.

let num = 3074;
let arr = num.toString().split("");
let lastNum = arr.pop();
if (lastNum !== "0") {
  arr.unshift(lastNum);
  console.log(arr.join(""));
} else console.log(num);


