let str = "  -0xFdf";
let res = "";
for (let i = 0; i < str.length; i++) {
  if (str[i] === " ") {
    continue;
  } else if (str[i] === "-" && res[0] === undefined) {
    res += str[i];
  } else if (
    (str[i] ? "x" : "X" && str[i - 1] === "0") ||
    (str[i] <= "f" && res[1] ? "x" : "X" || res[2] ? "x" : "X")
  ) {
    if (isNaN(str[i]) && (res[0] !== "0" || res[1] !== "0")) {
      break;
    }
    res += str[i];
  } else if (isNaN(str[i])) {
    if (res[0] === undefined) {
      res = NaN;
      break;
    }
    break;
  } else res += str[i];
}

console.log(Number(res));
console.log(parseInt("   -56.343"));
