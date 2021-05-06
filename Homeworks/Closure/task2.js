//Write a function redundant that takes in a string str and returns a function thatreturns str.

function redundant(str) {
  const foo = () => {
    return str;
  };
  return foo(str);
}

const f1 = redundant("apple");
console.log(f1);
