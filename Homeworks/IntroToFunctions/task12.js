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
    if (Math.floor(tens) === 1) {
      result += tenTwentyNum(hundred % 100);
    } else {
      result += tensNum(Math.floor(tens)) + numbersNum(numbers);
    }
    result += "thousand";
  }

  return result;
}

function tensNum(num) {
  switch (num) {
    case 2:
      return "twenty ";

    case 3:
      return "thirty ";

    case 4:
      return "forty ";

    case 5:
      return "fifty ";

    case 6:
      return "sixty ";

    case 7:
      return "seventy ";

    case 8:
      return "eighty ";

    case 9:
      return "ninety ";

    default:
      break;
  }
}

function tenTwentyNum(num) {
  switch (num) {
    case 10:
      return "ten ";

    case 11:
      return "eleven ";

    case 12:
      return "twelve ";

    case 13:
      return "thirteen ";

    case 14:
      return "fourteen ";

    case 15:
      return "fifteen ";

    case 16:
      return "sixteen ";

    case 17:
      return "seventeen ";

    case 18:
      return "eighteen ";

    case 19:
      return "nineteen ";

    default:
      break;
  }
}

function numbersNum(num) {
  switch (num) {
    case 1:
      return "one ";

    case 2:
      return "two ";

    case 3:
      return "three ";

    case 4:
      return "four ";

    case 5:
      return "five ";

    case 6:
      return "six ";

    case 7:
      return "seven ";

    case 8:
      return "eight ";

    case 9:
      return "nine ";

    default:
      break;
  }
}
console.log(spellOutNumber(567680));
