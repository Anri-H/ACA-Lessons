//Write function that will group by some rule

function groupBy(arr, func) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const key = func(element);
    const values = arr.filter((el) => key === func(el));
    obj[key] = values;
  }
  return obj;
}

console.log(groupBy([6.1, 4.2, 6.3], Math.floor));
console.log(groupBy(["one", "two", "three"], (i) => i.length));
