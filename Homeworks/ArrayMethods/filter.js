const array = [10, 21, 77];

function filter(arr, func) {
  let newArr = [];
  for (let index = 0; index < arr.length; index++) {
    const element = array[index];
    if (func(element)) {
      newArr.push(element);
    }
  }
  return newArr;
}

console.log(filter(array, (foo) => foo > 18));
