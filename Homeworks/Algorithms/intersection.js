let setA = new Set([1, 2, 3, 4]);
let setB = new Set([2, 3]);
let setC = new Set([3, 4]);

const intersection = (setA, setB) => {
  let arr = [];
  setA.forEach((el) => {
    if (setB.has(el)) {
      arr.push(el);
    }
  });
  return arr;
};

console.log(intersection(setA, setC));
