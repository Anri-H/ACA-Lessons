//Write function that will zip arrays into object

function zipObject(key, val) {
  const obj = key.reduce((acc, el, index) => {
    if (val[index] === undefined) {
      val[index] = null;
    }
    acc[el] = val[index];
    return acc;
  }, {});
  return obj;
}

console.log(zipObject(["a", "b", "c"], [1, 2]));

