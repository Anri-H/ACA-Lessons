// Given a word and a list of possible anagrams, select the correct sublist.

function correctSublist(txt, arr) {
  result = [];
  let word = txt.split("").sort();
  let list;
  for (let i = 0; i < arr.length; i++) {
    list = arr[i].split("").sort();
    if (word.join() === list.join()) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(
  correctSublist("pencil", ["licnep", "circular", "pupil", "nilcpe", "leppnec"])
);
