let str = "     35.56.65 ghd 43";
let res = "";
let point;
for (let i = 0; i < str.length; i++) {
  if (str[i] === " ") {
    continue;
  } else if (str[i] === "." && point === undefined) {
    point = ".";
    res += point;
  } else if (isNaN(str[i])) {
    if (res[0] === undefined) {
      res = NaN;
      break;
    }
    break;
  } else res += str[i];
}

console.log(Number(res));
console.log(parseFloat(" 24.5.43"));
