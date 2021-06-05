// Create a function that takes an array of items and checks
// if the last item matches the rest of the array concatenated together

function matchLastItem(arr) {
  let last = arr.pop();
  let str = arr.join("");
  return last === str;
}

console.log(matchLastItem(["rsq", "6hi", "g", "rsq6hig"]));
