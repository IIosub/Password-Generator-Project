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

// Function to prompt user for password options
function getPasswordOptions() {
  //inside the fuction  ask the user for a pasword with caracters lenght between 8 and 128 .

  let passwordLenght = parseInt(
    prompt(
      "Enter the password lenght(make sure it's not less then 8 caracters and no more than 128):"
    )
  );

  //If password does't have minim 8 caracters and max 128 the alert the user. If the user's input is out of range, either return out of the function or call the function again

  if (isNaN(passwordLenght) || passwordLenght < 8 || passwordLenght > 128) {
    alert("Your entered password length is not valid. Try again!");
    return getPasswordOptions();
  }

  //Confirm with the user if the password has special caracters using confirm method.

  const characterPrompts = {
    special: confirm("Should include special characters?"),
    numeric: confirm("Should include numeric characters?"),
    lowercase: confirm("Should include lowercase characters?"),
    uppercase: confirm("Should include uppercase characters?"),
  };

  //If it doesn't have special caracters alert them then return to the function getPasswordOptions().
  if (
    !characterPrompts.special &&
    !characterPrompts.numeric &&
    !characterPrompts.lowercase &&
    !characterPrompts.uppercase
  ) {
    alert(
      "Enter a  character type (lowercase, numerical, special characrter, or uppercase)"
    );
    return getPasswordOptions();
  }

  return {
    length: passwordLenght,
    characterPrompts,
  };
}

// Generate a random index.
function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

//Function that gegenerates

function generatePassword() {
  const options = getPasswordOptions();
  //create a variable that will store the generated password in a variable
  let password = "";
  //create a array that will store the selected characters
  const selectedCharacters = [];

  //Check what character the user chose and if true then push into selecteCharacters  array.
  if (options.characterPrompts.special) {
    selectedCharacters.push(...specialCharacters);
  }
  if (options.characterPrompts.numeric) {
    selectedCharacters.push(...numericCharacters);
  }
  if (options.characterPrompts.lowercase) {
    selectedCharacters.push(...lowerCasedCharacters);
  }
  if (options.characterPrompts.uppercase) {
    selectedCharacters.push(...upperCasedCharacters);
  }

  //Loop throuhh obtions and select a random character then apend it to the password string/
  for (let i = 0; i < options.length; i++) {
    password += getRandom(selectedCharacters);
  }
  return password;
}

//create variables that selects from the DOM the textarea and the button and the password area
const generateBtn = document.querySelector("#generate");
const passwordText = document.querySelector("#password");

function writePassword() {
  const password = generatePassword();
  passwordText.value = password;
}

//When button is clicked call the function writePassword
generateBtn.addEventListener("click", writePassword);
