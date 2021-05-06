//Check whether string is palindrome, or not.

function palindrome(str) {
  const string = str.split("").reverse().join("");
  return str === string ? "String is palindrome" : "String is not palindrome";
}
console.log(palindrome("asddsa"));
