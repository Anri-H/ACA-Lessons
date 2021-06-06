//Create a function that takes a string str and modifies the given string as per the below examples

function mumbling(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    const el = str[i].toUpperCase();
    newStr += el;
    for (let j = 0; j < i; j++) {
      newStr += el.toLowerCase();
    }
    if (i === str.length - 1) {
      return newStr;
    }
    newStr += "-";
  }
}

console.log(mumbling("maTT"));
