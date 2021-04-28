let admin;
let name = "John";
admin = name;
console.log(admin);

//What will be output of i and n?
let i = 10;
let n = i++ % 5; // i = 11 , n = 0
/*
//Swap two variables
let a = 10,
  b = 3;
let c = a;
a = b;
b = c;
console.log("a = " + a + ", b = " + b);
// a = 3, b =10
*/

//Swap two variables without using the third one
let a = 10,
  b = 3;
b = a + b;
a = b - a;
b = b - a;
console.log("a = " + a + ", b = " + b);
// a = 3, b =10


