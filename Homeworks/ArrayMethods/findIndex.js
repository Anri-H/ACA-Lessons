const array = ["hello", "javascript", 77];
function findIndex(arr, str) {
  for (let index = 0; index < arr.length; index++) {
    const element = array[index];
    if (element === str) {
      return index;
    }
  }
  return undefined;
}

console.log(findIndex(array, 77));
