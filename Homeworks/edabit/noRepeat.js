function noRepeat(arr) {
  let newArr = new Set();
  arr.forEach((el) => {
    newArr.add(JSON.stringify(el));
  });
  newArr = Array.from(newArr);
  newArr.forEach((el, i) => (newArr[i] = JSON.parse(el)));
  return newArr;
}

const array = [
  { x: 5, y: 10 },
  { x: 1, y: 10 },
  { x: 1, y: 5 },
  { x: 1, y: 10 },
  { x: 5, y: 10 },
];

console.log(noRepeat(array));
