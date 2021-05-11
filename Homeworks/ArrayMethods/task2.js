
function sum() {
    let arr = Array.from(arguments)
    return arr.reduce((sum, current) => {
      return sum + current;
    }, 0);
  }
  console.log(sum(1, 2));
  