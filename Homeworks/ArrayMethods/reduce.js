const reduce = (array, fn, initialState) => {
  let acc = typeof initialState === "undefined" ? array[0] : initialState;
  const startingIndex = typeof initialState === "undefined" ? 1 : 0;

  for (let index = startingIndex; index < array.length; index++) {
    const element = array[index];
    acc = fn(acc, element, index, array);
  }

  return acc;
};
const arrred = reduce([12, 54, 3, 1], (acc, item) => acc + item, 0);

console.log(arrred);
