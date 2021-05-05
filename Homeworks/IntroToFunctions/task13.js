// Write a JavaScript function to get all possible subsets of length 3 of the given array. Assume that all
// elements in the array are unique.

function possibleSubsets(arr) {
  let result_set = [],
    result;

  for (let i = 0; i < arr.length; i++) {
    result = [];

    for (let j = i + 1; j < arr.length; j++) {
      result.push(arr[j]);
      if (result.length === 3) {
        result_set.push(result);
      }
    }
  }
  return result_set;
}

console.log(possibleSubsets([5, 9, 23, 0, -2, -1]));
