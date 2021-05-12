function slice(arr, start, end) {
  let newArr = [];
  if (end < 0) {
    end = arr.length + end;
  }
  if (end === undefined) {
    end = arr.length;
  }
  if (start < 0) {
    start = arr.length - 1 + start;
  }
  if (start === undefined) {
    start = 0;
  }

  for (let i = start; i < end; i++) {
    const element = arr[i];
    newArr.push(element);
  }
  return newArr;
}

console.log(slice([1, 4, 3, 2, 5, 67], -3, 4));
