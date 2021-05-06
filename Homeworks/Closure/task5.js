//Write a function that implements filtering in array

function filterFalsyValues(val) {
  let trueValue = [];
  for (let i = 0; i < val.length; i++) {
    if (val[i]) {
      trueValue.push(val[i]);
    }
  }
  return trueValue;
}
const values = [null, true, {}, { name: "Elon" }, "", NaN, 0];
console.log(filterFalsyValues(values));
