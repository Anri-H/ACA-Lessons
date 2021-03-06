//What's the result?

5 > 4; //true
"apple" > "pineapple"; //false
"2" > "12"; //true
undefined == null; //true
undefined === null; //false
null == "\n0\n"; //false
null === +"\n0\n"; //false

// alert(null || 2 || undefined); //2

/*
Write the code which asks for a login with prompt.

If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

The password is checked as follows:

If it equals “TheMaster”, then show “Welcome!”,
Another string – show “Wrong password”,
For an empty string or cancelled input, show “Canceled”
*/

let login = prompt("Who's there? ");
if (login === "") {
  alert("Canceled");
} else if (login === "Admin") {
  let password = prompt("Password? ");
  if (password === "TheMaster") {
    alert("Welcome!");
  } else if (password === "") {
    alert("Canceled");
  } else alert("Wrong password");
} else alert("I don't know you");

// Create a function which prompts for a number until the visitor enters a valid numeric value.readNumber
// The resulting value must be returned as a number.
// The visitor can also stop the process by entering an empty line or pressing “CANCEL”. In that case, the function should return .null

function readNumber() {
  let num = prompt("Enter a number");
  if (num === null || num === "") {
    return null;
  } else return +num;
}
//alert(readNumber());

//Write a function that returns the string with the uppercased first character, for instance:ucFirst(str)str

function ucFirst(str) {
  if (!str) {
    return str;
  }
  return str[0].toUpperCase() + str.slice(1);
}
console.log(ucfirst("chapter"));
