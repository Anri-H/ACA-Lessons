// Write a function to find longest substring in a given a string withoutrepeating characters except space
// character. If there are several,return the last one. Considerthat all letters are lowercase.

function findSubStr(sentence) {
  let str = sentence.toLowerCase().split(" ");
  let longStr = str[0].length;
  let index = 0;
  for (let i = 0; i < str.length; i++) {
    if (longStr <= str[i].length) {
      longStr = str[i].length;
      index = i;
    }
  }
  return str[index];
}

console.log(
  findSubStr(
    'there are no two words in the english language more harmful than "good job".'
  )
);
//kisat