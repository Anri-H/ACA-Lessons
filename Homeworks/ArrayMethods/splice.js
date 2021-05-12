function splice(arr, start = 0, deleteCount = arr.length, ...item) {
  let newArr = [];
  let spliceArr = [];
  if (start < 0) {
    start += arr.length;
  }
  let end = start + deleteCount;
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (index >= start && index < end) {
      spliceArr.push(element);
    } else if (index === end) {
      newArr.push(...item);
      newArr.push(element);
    } else newArr.push(element);
  }
  
  return newArr;
}

let arr = [1, 4, 3, 2, 5, 67];
console.log(splice(arr, -3, 2, "ada", 24));
