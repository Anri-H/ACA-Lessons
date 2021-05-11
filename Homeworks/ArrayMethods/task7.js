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
  return arr.filter(el => el.lang !== "ru");
}
console.log(filterUsers(users));
