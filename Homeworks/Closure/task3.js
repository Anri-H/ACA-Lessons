// Write a function thatreturns an anonymous function, which transforms its input by adding a particular
// suffix at the end.

function add_suffix(str) {
  let part = str;
  return (str) => {
    return str + part;
  };
}

const add_ly = add_suffix("ly");
console.log(add_ly("hopeless"));

add_less = add_suffix("less");
console.log(add_less("fear"));
