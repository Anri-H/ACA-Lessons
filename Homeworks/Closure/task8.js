// Determine if a word or phrase is an isogram. An isogram (also known as a "non pattern word") is a word
// or phrase without a repeating letter.

function isogram(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (i === j) {
        continue;
      }
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
}

console.log(isogram("qwertyuq"));
