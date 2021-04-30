//Enter a number. Reverse its first and last digits. Print the new number.

let reverse = 1423464635;
let reverseNum = reverse.toString().split("");
let first = reverseNum.shift();
let end = reverseNum.pop();
reverseNum.push(first);
reverseNum.unshift(end);
console.log(reverseNum.join());




