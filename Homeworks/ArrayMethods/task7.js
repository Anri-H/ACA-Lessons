// Given an array, return a new array that only includes the numbers.

const arr = [1, 2, "a", true, {}, undefined, 55, false, "hi", null, 166, NaN];

function numbersInclude(arr) {
  return arr.filter((el) => {
    if (typeof el === "number") {
      return el;
    }
  });
}
console.log(numbersInclude(arr));

//- Write a function which remove users with language equals to 'ru'.

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

function filterUsers(arr) {
  return arr.filter((el) => el.lang !== "ru");
}
console.log(filterUsers(users));

//Write a function which filters object by field.

const users1 = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    isAstronaut: true,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    isAstronaut: true,
  },
  {
    username: "Elon Musk",
    isAstronaut: false,
  },
];

function filterByField(arr, field) {
  return arr.filter((el) => el[field]);
}
console.log(filterByField(users1, "isAstronaut"));
