//Given an array. Determine whetherit consists only from uniques or not.

function uniquesConsists(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        continue;
      }
      if (arr[i] === arr[j]) {
        return false;
      }
    }
  }
  return true;
}

console.log(uniquesConsists(["food", "sdcc", "ssa", "sdcc"]));
