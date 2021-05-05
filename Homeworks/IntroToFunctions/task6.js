// Write a function which receives two strings and removes appearances of the second string from the first
// one.

function removeStr(sent, word) {
  return sent.replaceAll(word, "");
}
console.log(removeStr("This is some text.", "is"));
