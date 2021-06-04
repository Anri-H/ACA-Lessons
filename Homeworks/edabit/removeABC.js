// Create a function that will remove the letters "a", "b" and "c" from the given string and
// return the modified version. If the given string does not contain "a", "b", or "c", return null

function removeABC(str) {
  let newStr = str.split(/[abc]/).join("");
  return newStr === str ? null : newStr;
}

console.log(removeABC("This might be a bit hard"));
console.log(removeABC("hello world!"));
