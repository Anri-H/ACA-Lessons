const array = ["hello", "javascript", 77];
function find(arr, str) {
  for (let index = 0; index < arr.length; index++) {
    const element = array[index];
    if (element === str) {
      return element;
    }
  }
  return undefined;
}

console.log(find(array, 77));
