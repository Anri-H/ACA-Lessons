function splice(arr, start, deleteCount, ...item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (!deleteCount && index === start) {
      newArr.push(...item);
    } else if (index === start) {
      newArr.push(...item);
      newArr.push(element);
    } 
    else newArr.push(element);
  }
  return newArr;
}

console.log(splice([1, 4, 3, 2, 5, 67], 3, 1, "ad", "dasda"));
