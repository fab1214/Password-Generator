// Assignment code here
var lowerAlpha = [
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
var upperAlpha = [
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
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacter = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  " < ",
  "=",
  " > ",
  " ? ",
  "@",
  "[",
  "\\",
  "]",
  " ^ ",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
function generatePassword() {
  //Welcome message
  alert("Welcome to the Password Generator!");
  // Ask for user input; parse string into value for character length
  var characterLength = parseInt(
    prompt(
      "How many characters would you like your password to be? Choose between 8 and 128."
    )
  );
  // First if statement for user validation
  if (!characterLength) {
    alert("You don't want a password :(");
    return;
  } else if (characterLength < 8 || characterLength > 128) {
    // Validates user input
    // Start user input prompts
    characterLength = alert(
      "You must choose a length between 8 and 128 characters."
    );
    return generatePassword();
  } else {
    // Continues once validated
    confirmUppercase = confirm("Will your password contain uppercase letters?");
    confirmLowercase = confirm("Will your password contain lowercase letters?");
    confirmNumber = confirm("Will your password contain numbers?");
    confirmCharacter = confirm(
      "Will your password contain special characters?"
    );
  }

  var choices = [];
  //If no criteria are chosen
  if (
    !confirmUppercase &&
    !confirmLowercase &&
    !confirmNumber &&
    !confirmCharacter
  ) {
    choices = alert("You must choose a criteria!");
    return generatePassword();
  }

  if (confirmUppercase) {
    choices = choices.concat(upperAlpha);
  }

  if (confirmLowercase) {
    choices = choices.concat(lowerAlpha);
  }

  if (confirmNumber) {
    choices = choices.concat(number);
  }

  if (confirmCharacter) {
    choices = choices.concat(specialCharacter);
  }

  //password array to hold new password
  var password = [];

  //loop through variables
  for (var i = 0; i < characterLength; i++) {
    var randomChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(randomChoices);
  }

  //This joins the password array and converts to string
  var password = password.join("");
  //alert box with generated password
  alert("Your secure password is " + password);
}

generateBtn.addEventListener("click", writePassword);