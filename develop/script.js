// When the generate password is clicked, the first prompt will apear.
var generateBtn = document.querySelector("#generate");

//lowercase, uppercase, numeric and special character arreys.
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "M", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "*", "#", "~", "&", "^", "@", "`", ")", "?"];

// Using the id #password in the <textarea> of our html file will  help this function to display the generated password on the desired part of the webpage. 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// This function will help the user specify what type of characters they want in their password.
function generatePassword() {
  var passwordCharacters = [];
  var length = parseInt(window.prompt("How many characters would you like your password to contain?"));

  var specialCharacters = confirm("Click OK to confirm adding special characters.");
  

  var lowerCharacters = confirm("Click OK to confirm adding lowercase characters.");


  var upperCharacters = confirm("Click OK to confirm adding uppercase characters.");


  var numericCharacters = confirm("Click OK to confirm adding numbers.");


 
  if (specialCharacters) {
 
    passwordCharacters = passwordCharacters.concat(specialCharacters);
  }
  if (lowerCharacters) {
    passwordCharacters = passwordCharacters.concat(lowerCase);

  }
  if (upperCharacters) {
    passwordCharacters = passwordCharacters.concat(upperCase);
  }

  if (numericCharacters) {
    passwordCharacters = passwordCharacters.concat(numeric);
  }

// The below variable will combine a random selection of characters based off of the user's specific password needs.
  var passwordString = "";
  for (let i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * passwordCharacters.length);
    passwordString = passwordString + passwordCharacters[randomIndex];
  }
  return passwordString;

}


// Below is the the event listener, listening for a click on the "generate password button."
generateBtn.addEventListener("click", writePassword); 
