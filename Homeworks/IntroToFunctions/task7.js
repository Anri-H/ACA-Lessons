// Write a function to compute a new string from the given one by moving the first charto come afterthe
// next two chars, so "abc" yields "bca". Repeat this process for each subsequent group of 3 chars. Ignore
// any group of fewerthan 3 chars at the end.

function repeatThreeChars(str) {
  let newStr = "";
  let firstStr = str[0];
  for (let i = 1; i < str.length; i++) {
    if (i % 3 === 0) {
      newStr += firstStr;      
      firstStr = str[i];
    } else newStr += str[i];
  }
  return newStr;
}
console.log(repeatThreeChars("aweyoolpm"));
