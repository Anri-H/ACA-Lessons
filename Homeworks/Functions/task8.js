// Write a function that accepts a string(a sentence) as a parameter and finds the longest word within the
// string. If there are several words which are the longest ones, print the last word(words can be separated
// by space, comma or hyphen).

function findLongestWord(str) {
  let sentence = str.split(" ");
  let longStr = sentence[0].length;
  let index = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (longStr <= sentence[i].length) {
      longStr = sentence[i].length;
      index = i;
    }
  }
  return sentence[index];
}

console.log(
  findLongestWord(
    "A revolution without dancing is a revolution, not worth having."
  )
);
