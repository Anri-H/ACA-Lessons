function map(arr, func) {
  let newArr = [];
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    newArr.push(func(element, index, arr));
  }
  return newArr;
}

const array = [10, 366, "h"];

console.log(map(array, (el) => el + 2));
console.log(array);
