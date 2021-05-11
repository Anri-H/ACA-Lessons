const array = [10, 21, 77];

function every(arr, func) {
  for (let index = 0; index < arr.length; index++) {
    const element = array[index];
    if (func(element)) {
      return true;
    }
  }
  return false;
}

console.log(every(array, (foo) => foo > 18));
