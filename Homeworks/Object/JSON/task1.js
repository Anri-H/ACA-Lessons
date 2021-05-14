//Write function that will do reverse operation for Object.entries

function fromPairs(arr) {
  let newObj = {};
  arr.foreach(([key, value]) => {
    newObj[key], newObj[value];
  });
  return newObj;
}

console.log(
  fromPairs([
    ["a", 1],
    ["b", 2],
  ])
);
