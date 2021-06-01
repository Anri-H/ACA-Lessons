//Given an array of nested arrays. Write a recursive function that flattens it. (Hint create
// function that concats arrays).

function nested(arr, newArr = []) {
  arr.forEach((el) => {
    if (Array.isArray(el)) {
      return nested(el, newArr);
    } else newArr.push(el);
  });
  return newArr;
}

console.log(nested([1, [3, 4, [1, 2]], 10]));
