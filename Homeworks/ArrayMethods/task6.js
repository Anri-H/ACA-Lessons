// - Write a function which returns array of usernames.

const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
  },
];

function getUserNames(arr) {
  return arr.map((el) => {
    return el.username;
  });
}

console.log(getUserNames(users));

//Write a function which returns array of lengths of user names

function getUserNameLengths(arr) {
  return arr.map((el) => {
    return el.username.length;
  });
}

console.log(getUserNameLengths(users));

// - Write a function which parses string integers. If it's not possible to
// parse, then add null

function parseInteger(arr) {
  return arr.map((el) => {
    return parseInt(el) ? parseInt(el) : null;
  });
}
console.log(parseInteger(["1", "px", "2323"]));
