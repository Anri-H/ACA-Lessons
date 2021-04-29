let a = 40;
let b = 60;
console.log(180 - a - b);


let num = [-4, 3, 7];
let result = 1;
for (let i = 0; i < num.length; i++) {
  result *= num[i];
}
if (result < 0) {
  console.log("-");
} else if (result > 0) {
  console.log("+");
} else console.log("unsigned");