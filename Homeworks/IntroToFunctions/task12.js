//Write a function, which willreceive a number between 0 to 999,999 and spell out that numberin English.

function spellOutNumber(num) {
  let result = "";
  if (num >= 1000000 && num < 0) {
    return "Your number must be from 0-999999";
  }
  const hundred = Math.floor(num / 1000);
  const tenTwenty = Math.floor(hundred / 100);
  const tens = (hundred % 100) / 10;
  const numbers = hundred % 10;
  if (hundred !== 0) {
    result += `${numbersNum(tenTwenty)} hundreed `;
  }
  if (Math.floor(tens) === 1) {
    result += tenTwentyNum(hundred % 100);
  } else {
    result += tensNum(Math.floor(tens)) + numbersNum(numbers);
  }

  return result;
}

// function hundredNum(num) {
//   result = "";

//   if (hundred === 1) {
//     result += "one hundred ";
//   } else if (hundred === 2) {
//     result += "two hundred ";
//   } else if (hundred === 3) {
//     result += "three hundred ";
//   } else if (hundred === 4) {
//     result += "four hundred ";
//   } else if (hundred === 5) {
//     result += "five hundred ";
//   } else if (hundred === 6) {
//     result += "six hundred ";
//   } else if (hundred === 7) {
//     result += "seven hundred ";
//   } else if (hundred === 8) {
//     result += "eight hundred ";
//   } else if (hundred === 9) {
//     result += "nine hundred ";
//   }
//   return result;
// }

function tensNum(num) {
  result = "";

  if (num === 2) {
    result += "twenty ";
  } else if (num === 3) {
    result += "thirty ";
  } else if (num === 4) {
    result += "forty ";
  } else if (num === 5) {
    result += "fifty ";
  } else if (num === 6) {
    result += "sixty ";
  } else if (num === 7) {
    result += "seventy ";
  } else if (num === 8) {
    result += "eighty ";
  } else if (num === 9) {
    result += "ninety ";
  }
  return result;
}

function tenTwentyNum(num) {
  result = "";

  if (num === 10) {
    result += "ten ";
  } else if (num === 11) {
    result += "eleven ";
  } else if (num === 12) {
    result += "twelve ";
  } else if (num === 13) {
    result += "thirteen ";
  } else if (num === 14) {
    result += "fourteen ";
  } else if (num === 15) {
    result += "fifteen ";
  } else if (num === 16) {
    result += "sixteen ";
  } else if (num === 17) {
    result += "seventeen ";
  } else if (num === 18) {
    result += "eighteen ";
  } else if (num === 19) {
    result += "nineteen ";
  }
  return result;
}

function numbersNum(num) {
  result = "";

  if (num === 1) {
    result += "one ";
  } else if (num === 2) {
    result += "two ";
  } else if (num === 3) {
    result += "three ";
  } else if (num === 4) {
    result += "four ";
  } else if (num === 5) {
    result += "five ";
  } else if (num === 6) {
    result += "six ";
  } else if (num === 7) {
    result += "seven ";
  } else if (num === 8) {
    result += "eight ";
  } else if (num === 9) {
    result += "nine ";
  }
  return result;
}
console.log(spellOutNumber(657680));
