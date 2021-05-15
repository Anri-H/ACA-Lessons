//Write function that will zip arrays into object

function zipObject(key, val) {
  return key.reduce((acc, el, index) => {
    let value = val[index];
    value === undefined ? (value = null) : value;
    acc[el] = value;
    return acc;
  }, {});
}
console.log(zipObject(["a", "b", "c"], [1, 2]));
