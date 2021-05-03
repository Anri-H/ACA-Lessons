let str = "0x";
let res = "";
for (let i = 0; i < str.length; i++) {
  if (isNaN(str[0])) {
    res = NaN;
  } else if (isNaN(str[i])) {
    break;
  } else res += str[i];
}

console.log(res);
