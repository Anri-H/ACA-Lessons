//Enter a number. Reverse its first and last digits. Print the new number.

let reverse = 1423464635;
let reverseNum = reverse.toString().split("");
let first = reverseNum.shift();
let end = reverseNum.pop();
reverseNum.push(first);
reverseNum.unshift(end);
console.log(reverseNum.join());

// Given mixed array of numbers, strings, booleans, nulls and undefined. Filter array and get all the numbers
// in a separate array. Arrange them such as from the beginning are the odds and from the ending the
// evens.

let mixArr = [8, 0, 1, "hey", 12, 5, true, "2", null, 7, 3];
let newArr = [];
let j = 0;
for (let i = 0; i < mixArr.length; i++) {
  if (typeof mixArr[i] === "number") {
    newArr[j] = mixArr[i];
    j++;
  }
}
console.log(newArr);

// Given an array of strings and numbers. Print the number of integers and the number of strings in the
// array.

let choose = [1, 4, "i am a string", "456"];
let numbers = 0;
let strings = 0;
for (let i = 0; i < choose.length; i++) {
  if (typeof choose[i] === "number") {
    numbers++;
  }
  if (typeof choose[i] === "string") {
    strings++;
  }
}
console.log(`Numbers: ${numbers}, Strings ${strings}`);

// 19 Given an array consisting from the arrays of numbers (like a two-dimensional array). Find sum of each
//row and print them as an array.

let arrMatrix = [
  [3, 4, 5],
  [1, 0, 0],
  [4, 5, 4],
  [8, 8, -1],
];

for (let i = 0; i < arrMatrix.length; i++) {
  let sum = 0;
  for (let j = 0; j < arrMatrix[i].length; j++) {
    sum += arrMatrix[i][j];
  }
  arrMatrix[i] = sum;
}
console.log(arrMatrix);

// Given an array of numbers and a number. Find the index of a first element which is equal to that number.
//If there is not such a number, that find the index of the first element which is the closest to it.

let chooseArr = [36, -12, 47, -58, 148, -55, -19, 10];
let num = 47;

let maxDiff;
let index;
for (let i = 0; i < chooseArr.length; i++) {
  if (chooseArr[i] === num) {
    index = i;
    break;
  }
  let minus = Math.abs(num - chooseArr[i]);
  if (maxDiff > minus || typeof maxDiff === "undefined") {
    maxDiff = minus;
    index = i;
  }
}

console.log(index);
