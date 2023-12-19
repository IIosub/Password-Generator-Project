// Array of special characters to be included in password
const specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
const numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
const upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
//Star by creating a variable that will store the generated password in a variable:

const generatePass = " ";

// Function to prompt user for password options
function getPasswordOptions() {
  //inside the fuction  ask the user for a pasword with caracters lenght between 8 and 128 .

  let passwordLenght = parseInt(
    prompt(
      "Enter the password lenght(make sure it's not less then 8 caracters and no more than 128):"
    )
  );

  //If password does't have minim 8 caracters and max 128 the alert the user. If the user's input is out of range, either return out of the function or call the function again

  if (passwordLenght < 8 || passwordLenght > 128 || isNaN(passwordLenght)) {
    alert("Your entered password length is not valid. Try again!");
    return getPasswordOptions();
  }

  //Confirm with the user if the password has special caracters using confirm method.

  const includeSpecialCharacter = confirm(
    "Does the password include special characters?"
  );
  const includeNumericCharacter = confirm(
    " Does the password include numeric characters?"
  );
  const includeLowercaseCharacter = confirm(
    " Does the password include lowercase characters?"
  );
  const includeUppercaseCharacter = confirm(
    "Does the password include uppercase characters?"
  );

  //If it doesn't have special caracters alert them then return to the fucntion getPasswordOptions().

  if (
    !includeLowercaseCharacter &&
    !includeUppercaseCharacter &&
    !includeSpecialCharacter &&
    !includeNumericCharacter
  ) {
    alert(
      "Enter a  character type (lower case, numerical, special characrter, or upper case)"
    );
    return getPasswordOptions();
  }

  const passwordOptions = {
    passwordLenght,
    includeSpecialCharacter,
    includeNumericCharacter,
    includeLowercaseCharacter,
  };
  return passwordOptions;
}

// Generate a random index.
function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
