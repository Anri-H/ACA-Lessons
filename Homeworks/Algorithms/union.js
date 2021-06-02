let setA = new Set([1, 2, 3, 4]);
let setB = new Set([2, 3]);
let setC = new Set([3, 4, 5, 6]);

// add
// has
// values

function union(setA, setB) {
  let set = new Set();
  setA.forEach((el) => set.add(el));
  setB.forEach((el) => set.add(el));
  return set;
}

console.log(union(setA, setC)); // => Set [1, 2, 3, 4, 5, 6]
