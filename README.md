# Module 5 Challenge: Password Generator

## Overview

This week’s challenge requires you to create an application that an employee can use to generate a random password based on criteria they’ve selected by modifying starter code. This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean and polished user interface that is responsive, ensuring that it adapts to multiple screen sizes.

The password can include special characters. If you’re unfamiliar with these, see this [list of Password Special Characters from the OWASP Foundation](https://www.owasp.org/index.php/Password_special_characters).

## Instructions

The following image shows the web application's appearance and functionality:

![password generator demo](./assets/05-javascript-challenge-demo.png)

- Generate a password when the button is clicked
  - Present a series of prompts for password criteria
    - Length of password
      - At least 8 characters but no more than 128.
    - Character types
      - Lowercase
      - Uppercase
      - Numeric
      - Special characters ($@%&\*, etc)
  - Code should validate for each input and at least one character type should be selected
  - Once prompts are answered then the password should be generated and displayed in an alert or written to the page

## Grading Requirements

This challenge is graded based on the following criteria:

### Technical Acceptance Criteria: 40%

- Satisfies all of the above acceptance criteria plus the following:

  - The challenge should not produce any errors in the console when you inspect it using Chrome DevTools.

### Deployment: 32%

- Application deployed at live URL.

- Application loads with no errors.

- Application GitHub URL submitted.

- GitHub repository that contains application code.

### Application Quality: 15%

- Application user experience is intuitive and easy to navigate.

- Application user interface style is clean and polished.

- Application resembles the mock-up functionality provided in the challenge instructions.

### Repository Quality: 13%

- Repository has a unique name.

- Repository follows best practices for file structure and naming conventions.

- Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

- Repository contains multiple descriptive commit messages.

- Repository contains quality README file with description, screenshot, and link to deployed application.

## Review

You are required to submit the following for review:

- The URL of the deployed application.

- The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

---

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.

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

---

- Create a function that generate a random index.
