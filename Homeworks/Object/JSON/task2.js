//Write functions that willreturn head and tail of Array

function getTail([, ...tail]) {
  return tail;
}

function getHead([head]) {
    return head
}

console.log(getHead([1, 2, 3]))
console.log(getTail([1, 2, 3]));
