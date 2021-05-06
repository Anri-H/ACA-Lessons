//Create a function that implements partial sum
function sum(num) {
  let part = num;
  return (num) => {
    return num + part;
  };
}
console.log(sum(1)(2));

const addOne = sum(1);
console.log(addOne(6));

const addTen = sum(10);
console.log(addTen(2));
