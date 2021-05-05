// Given a phone number. Write a function to clean it up, so it is valid. The rules are as follows:
// If the phone numberis less than 10 digits assume that it is a bad number
// If the phone numberis longerthan 10, then it is a bad number
// If the phone numberis 10 digits assume that it is good
// If the phone number consists of 11 symbols and the first one is + and others are numbers, then trim +
// and return remaining 10 digits.
// If the phone number contains + symbol more than one, considerit as a bad number.
// If the phone number contains + symbol not as the first character, considerit as a badnumber.

function phoneNumber(num) {
  let str = String(num).replace(/\s/g, "").split("");
  for (let i = 1; i < str.length; i++) {
    if (str[i] === "+") {
      return "bad number";
    }
  }
  if (str.length === 11) {
    if (str[0] ? "-" : "+") {
      str.shift();
    }
    return Number(str.join(""));
  }
  if (str.length !== 10) {
    return "bad number";
  } else if (str.length === 10) {
    return "good";
  }
}

console.log(phoneNumber("+456 7911116"));
