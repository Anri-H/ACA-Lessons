//Add brackets between letters.

function addBrackets(str, i = 0, last = str.length - 1) {
  if (str.length / 2 === last) {
    return str[i] + str[last];
  }
  if (i === last) {
    return str[i];
  }
  return str[i] + "(" + addBrackets(str, i + 1, last - 1) + ")" + str[last];
}

let s = "LItBeoFLcSGBOFQxMHoIuDDWcqcVgkcRoAseocXO";
console.log(addBrackets(s));
