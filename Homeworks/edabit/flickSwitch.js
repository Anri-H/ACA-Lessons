function flickSwitch(arr) {
  let bool = true;
  return arr.map((el) => {
    if (el === "flick") {
      bool = !bool;
    }
    return bool;
  });
}
console.log(flickSwitch(["flick", "edabit", "flick", "eda", "bit"]));
