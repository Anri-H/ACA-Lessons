//Given an array of numbers. Write a function to separate odd and even numbers in different arrays.

function separate(arr) {
  let odd = [];
  let even = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      odd.push(arr[i]);
    } else even.push(arr[i]);
  }
  return [odd, even];
}
console.log(separate([45, 12, 3, 6, 17, 0]));
