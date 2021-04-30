//Given a number. Print “odd” if the numberis odd and “even” if itʼs even.

let number = 34;
if (isNaN(number)) {
  console.log("NaN");
} else if (number % 2 === 0) {
  console.log("odd");
} else console.log("even");

// Given a positive integer. Bring the last digit of the numberto the beginning. Print the new number. If the
// last digit of the inserted numberis 0, numberremains the same.

let numChange = 3074;
let arr = numChange.toString().split("");
let lastNum = arr.pop();
if (lastNum !== "0") {
  arr.unshift(lastNum);
  console.log(arr.join(""));
} else console.log(numChange);

//Check if a numberis a multiple of 3, 5 or 7 and output the appropriate message.

const numberA = 21;

if (numberA % 3 === 0 && numberA % 5 === 0 && numberA % 7 === 0) {
  console.log(numberA + " is a multiple of 3, 5 and 7");
} else if (numberA % 3 === 0) {
  console.log(numberA + " is a multiple of 3");
} else if (numberA % 5 === 0 && numberA % 7 === 0) {
  console.log(numberA + " is a multiple of 5 and 7");
} else if (numberA % 3 === 0 && numberA % 7 === 0) {
  console.log(numberA + " is a multiple of 3 and 7");
} else console.log(numberA + " is not a multiple of 3, 5 or 7");

//Insert a number. Print ‘yesʼ if the numberis prime, ‘noʼ otherwise.

function primeNum(num) {
  for (let i = 2; i < num / 2; i++) {
    if (num % i === 0) {
      return "No";
    }
  }
  return "Yes";
}
console.log(primeNum(8));

//Given an array of strings. Find the strings with maximum and minimum lengths in array. Print the sum of
//theirlengths.

let arrStr = ["anymore", "raven", "me", "communicate"];
let maxLength = arrStr[0].length;
let minLength = arrStr[0].length;
for (let i = 1; i < arrStr.length; i++) {
  if (arrStr[i].length > maxLength) {
    maxLength = arrStr[i].length;
  }
  if (arrStr[i].length < minLength) {
    minLength = arrStr[i].length;
  }
}
console.log(maxLength + minLength);

//  Given a sentence as a string. Split it according to space and comma and create an array consisting of the
// words of the array. The last word should not contain the last . or! .

let sent = "May the Force be with you.";
console.log(sent.split(" "));

// Insert a number. Calculate product and sum of the digits of the number. If product is divisible by the sum,
// print the quotient, otherwise print the remainder.

let insNum = 1233;
let toString = "" + insNum;
let sum = 0;
let product = 1;
for (let i = 0; i < toString.length; i++) {
  sum += +toString[i];
  product *= +toString[i];
}
if (product % sum === 0) {
  console.log(`Quotient is ${product / sum}`);
} else console.log(`Remainder is ${product % sum}`);

//Given three numbers. Sort them by the ascending order.
let num1 = 45;
let num2 = 43;
let num3 = -65;

if (num1 > num2 && num1 > num3) {
  if (num2 > num3) {
    console.log(num1, num2, num3);
  } else {
    console.log(num1, num3, num2);
  }
} else if (num2 > num1 && num2 > num3) {
  if (num1 > num3) {
    console.log(num2, num1, num3);
  } else {
    console.log(num2, num3, num1);
  }
} else if (num3 > num1 && num3 > num2) {
  if (num1 > num2) {
    console.log(num3, num1, num2);
  } else {
    console.log(num3, num2, num1);
  }
}
