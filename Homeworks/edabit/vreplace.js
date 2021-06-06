// Write a function, .vreplace() that extends the String prototype
// by replacing all vowels in a string with a specified vowel

String.prototype.vreplace = function (vowel) {
  let vowels = new Set([
    "A",
    "E",
    "I",
    "O",
    "U",
    "Y",
    "a",
    "e",
    "i",
    "o",
    "u",
    "y",
  ]);
  let newStr = "";
  for (let i = 0; i < this.length; i++) {
    vowels.has(this[i]) ? (newStr += vowel) : (newStr += this[i]);
  }

  return newStr;
};

console.log("apples and bananas".vreplace("u"));
