##UserStory

As a software developer I'am required to create an application that an employee can use to generate a random password

##AcceptanceCriteria

- It is done when generats a password when the button is clicked.

- It is done when it present a series of prompts for password criteria.

- It is done when there are least 8 characters but no more than 128.

- It is done when password contains any of the Character types - Lowercase - Uppercase - Numeric - Special characters ($@%&\*, etc)

- It is done when validate for each input and at least one character type should be selected

- It is done when once prompts are answered then the password should be generated and displayed in an alert or written to the page

##Pseudocode

- Star by creating a variable that will store the generated password in a variable.

- Create a function getPasswordOptions - inside the fuction ask the user for a pasword with caracters lenght between 8 and 128 .

- If password does't have minim 8 caracters and max 128 the alert the user. If the user's input is out of range, either return out of the function or call the function again

- confirm with the user if the password has special caracters using confirm method.

- If it doesn't have special caracters alert them then return to the fucntion getPasswordOptions().

- Create a function that generate a random index using math.random()

- Create a function that generates the actual password, inside create a variable that will store the generated password in a variable and an array that will store the selected characters.

- Check what character the user chose and if true then push into selecteCharacters array.

- Loop throuhh obtions and select a random character then apend it to the password string

- Create variables that selects from the DOM the textarea and the button and the password area

- Handle the password generation and update the displayed password when the button is clicked.

- When button is clicked call the function writePassword

##ShootScreen

![screencapture-127-0-0-1-3000-index-html-2023-12-20-19_26_37](https://github.com/IIosub/Password-Generator-Project/assets/114613610/dc8d8ca2-c4bc-4c03-bc05-4b14df4f26ba)

##ProjectURL

https://iiosub.github.io/Password-Generator-Project/
