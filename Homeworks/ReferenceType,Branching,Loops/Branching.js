// Given a number. Print “odd” if the numberis odd and “even” if itʼs even.

let number = +prompt("Please enter number ");
if (isNaN(number)) {
  alert("NaN");
} else if (number % 2 === 0) {
  alert("odd");
} else alert("even");
