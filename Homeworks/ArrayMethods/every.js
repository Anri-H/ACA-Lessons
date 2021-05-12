const array = [];

function every(arr, func) {
  for (let index = 0; index < arr.length; index++) {
    const element = array[index];
    if (!func(element)) {
      return false;
    }
  }
  return true;
}

console.log(every(array, (foo) => foo > 18));
