// Given an object containing the names and ages of a group of people, return the name of the oldest person.

function oldest(obj) {
  let ages = Math.max(...Object.values(obj));
  for (const key in obj) {
    if (obj[key] === ages) {
      return key;
    }
  }
}

console.log(
  oldest({
    Max: 9,
    Josh: 13,
    Sam: 48,
    Anne: 33,
  })
);
