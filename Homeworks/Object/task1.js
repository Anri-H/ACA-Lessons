//Write function that will do reverse operation for Object.entries

function fromPairs(arr) {
  let obj = {};
  arr.forEach(([key, value]) => {
      obj[key] = value;
  });   
  return obj;
}

console.log(
  fromPairs([
    ["a", 1],
    ["b", 2],
  ])
);


