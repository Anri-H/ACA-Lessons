// Write a function to compute a new string from the given one by moving the first charto come afterthe
// next two chars, so "abc" yields "bca". Repeat this process for each subsequent group of 3 chars. Ignore
// any group of fewerthan 3 chars at the end.

function repeatThreeChars(str) {
  str.split("");
  let newStr = "";
  let index = 0;
  for (let i = 0; i < str.length; i += 3) {
    let first = str[i].shift();
    index++;
  }
  return str;
}
console.log(repeatThreeChars("aweyoolp"));
//kisat
