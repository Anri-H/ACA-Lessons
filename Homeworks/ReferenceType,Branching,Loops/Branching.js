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