//Write a function, which willreceive a number between 0 to 999,999 and spell out that numberin English.

function spellOutNumber(num) {
  let result = "";
  if (num >= 1000000 && num < 0) {
    return "Your number must be from 0-999999";
  }
  if (Math.floor(Math.floor(num / 1000) / 100) % 10 !== 0) {
    result += hundred(num);
  }
  if (Math.floor((Math.floor(num / 1000) % 100) / 10) !== (0 || 1)) {
    result += tens(num);
  }
  Math.floor((Math.floor(num / 1000) % 100) / 10) === 1
    ? (result += tenTwenty(num))
    : (result += numbers(num));

  return result;
}

function hundred(num) {
  result = "";
  if (Math.floor(Math.floor(num / 1000) / 100) % 10 === 1) {
    result += "one hundred ";
  } else if (Math.floor(Math.floor(num / 1000) / 100) % 10 === 2) {
    result += "two hundred ";
  } else if (Math.floor(Math.floor(num / 1000) / 100) % 10 === 3) {
    result += "three hundred ";
  } else if (Math.floor(Math.floor(num / 1000) / 100) % 10 === 4) {
    result += "four hundred ";
  } else if (Math.floor(Math.floor(num / 1000) / 100) % 10 === 5) {
    result += "five hundred ";
  } else if (Math.floor(Math.floor(num / 1000) / 100) % 10 === 6) {
    result += "six hundred ";
  } else if (Math.floor(Math.floor(num / 1000) / 100) % 10 === 7) {
    result += "seven hundred ";
  } else if (Math.floor(Math.floor(num / 1000) / 100) % 10 === 8) {
    result += "eight hundred ";
  } else if (Math.floor(Math.floor(num / 1000) / 100) % 10 === 9) {
    result += "nine hundred ";
  }
  return result;
}

function tens(num) {
  result = "";
  if (Math.floor((Math.floor(num / 1000) % 100) / 10) === 2) {
    result += "twenty ";
  } else if (Math.floor((Math.floor(num / 1000) % 100) / 10) === 3) {
    result += "thirty ";
  } else if (Math.floor((Math.floor(num / 1000) % 100) / 10) === 4) {
    result += "forty ";
  } else if (Math.floor((Math.floor(num / 1000) % 100) / 10) === 5) {
    result += "fifty ";
  } else if (Math.floor((Math.floor(num / 1000) % 100) / 10) === 6) {
    result += "sixty ";
  } else if (Math.floor((Math.floor(num / 1000) % 100) / 10) === 7) {
    result += "seventy ";
  } else if (Math.floor((Math.floor(num / 1000) % 100) / 10) === 8) {
    result += "eighty ";
  } else if (Math.floor((Math.floor(num / 1000) % 100) / 10) === 9) {
    result += "ninety ";
  }
  return result;
}

function tenTwenty(num) {
  result = "";
  if (Math.floor(Math.floor(num / 1000) % 100) === 10) {
    result += "ten ";
  } else if (Math.floor(Math.floor(num / 1000) % 100) === 11) {
    result += "eleven ";
  } else if (Math.floor(Math.floor(num / 1000) % 100) === 12) {
    result += "twelve ";
  } else if (Math.floor(Math.floor(num / 1000) % 100) === 13) {
    result += "thirteen ";
  } else if (Math.floor(Math.floor(num / 1000) % 100) === 14) {
    result += "fourteen ";
  } else if (Math.floor(Math.floor(num / 1000) % 100) === 15) {
    result += "fifteen ";
  } else if (Math.floor(Math.floor(num / 1000) % 100) === 16) {
    result += "sixteen ";
  } else if (Math.floor(Math.floor(num / 1000) % 100) === 17) {
    result += "seventeen ";
  } else if (Math.floor(Math.floor(num / 1000) % 100) === 18) {
    result += "eighteen ";
  } else if (Math.floor(Math.floor(num / 1000) % 100) === 19) {
    result += "nineteen ";
  }
  return result;
}

function numbers(num) {
  result = "";
  if (Math.floor(Math.floor(num / 1000)) % 10 === 1) {
    result += "one ";
  } else if (Math.floor(Math.floor(num / 1000)) % 10 === 2) {
    result += "two ";
  } else if (Math.floor(Math.floor(num / 1000)) % 10 === 3) {
    result += "three ";
  } else if (Math.floor(Math.floor(num / 1000)) % 10 === 4) {
    result += "four ";
  } else if (Math.floor(Math.floor(num / 1000)) % 10 === 5) {
    result += "five ";
  } else if (Math.floor(Math.floor(num / 1000)) % 10 === 6) {
    result += "six ";
  } else if (Math.floor(Math.floor(num / 1000)) % 10 === 7) {
    result += "seven ";
  } else if (Math.floor(Math.floor(num / 1000)) % 10 === 8) {
    result += "eight ";
  } else if (Math.floor(Math.floor(num / 1000)) % 10 === 9) {
    result += "nine ";
  }
  return result;
}
console.log(spellOutNumber(814080));
