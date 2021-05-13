const array = ["hello", "javascript", 77];
function find(arr, fn) {
  for (let index = 0; index < arr.length; index++) {
    const element = array[index];
    if (fn(element, index, array)) {
      return true;
    }
  }
  return false;
}

console.log(
  find(array, (f) => {
    return f === 77;
  })
);
