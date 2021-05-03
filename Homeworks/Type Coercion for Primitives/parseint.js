let str = "   0xffhhh";
let res = "";
for (let i = 0; i < str.length; i++) {
  if (isNaN(str[0])) {
    res = NaN;
    break;
  } else if ((str[i] === "x" && str[i - 1] === "0") || str[i] <= "f") {
    res += str[i];
  } else if (isNaN(str[i])) {
    break;
  } else res += str[i];
}

console.log(Number(res));
console.log(parseInt("0xffhhh"));
