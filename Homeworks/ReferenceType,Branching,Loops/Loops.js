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
        if (number[i] == digit) {
            return console.log("Yes");
    
  }     

}
return console.log("No")
}
digitNumber(7, 245)
