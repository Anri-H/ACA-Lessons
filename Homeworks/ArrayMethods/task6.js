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

console.log(getUserNameLengths(users))
