// Create a function that moves all capital letters to the front of a word.

function capToFront(str) {
  let capital = str.split(/[a-z]/).join("");
  let lower = str.split(/[A-Z]/).join("");
  return capital + lower;
}

console.log(capToFront("hApPy"));
