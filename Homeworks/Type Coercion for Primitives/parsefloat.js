let str = "35.56 ghd 43";
let res = "";

for (let i = 0; i < str.length; i++) {
  if (isNaN(str[0])) {
    res = NaN;
  } else if (isNaN(str[i])) {
    break;
  } else if (str[i] === ".") {
    res += ".";
  } else res += str[i];
}

console.log(str);
