const array = ["hello", "javascript", 10];
function findIndex(arr, fn) {
  for (let index = 0; index < arr.length; index++) {
    const element = array[index];
    if (fn(element, index, array)) {
      return index;
    }
  }
  return -1;
}

console.log(
  findIndex(array, (f) => {
    return f % 2 === 0;
  })
);
