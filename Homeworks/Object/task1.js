//Write function that will do reverse operation for Object.entries

function fromPairs(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
      const [key, value] = arr[i];
      obj[key] = value;
  }
  return obj;
}

console.log(
  fromPairs([
    ["a", 1],
    ["b", 2],
  ])
);


