//Write functions that willreturn head and tail of Array

function getTail([head, ...tail]) {
  return tail;
}

function getHead(arr) {
    return arr[0]
}

console.log(getHead([1, 2, 3]))
console.log(getTail([1, 2, 3]));
