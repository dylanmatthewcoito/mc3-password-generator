/*
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria

WHEN prompted for password criteria
THEN I select which criteria to include in the password

WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters

WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected

WHEN all prompts are answered
THEN a password is generated that matches the selected criteria

WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
*/
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var userLowercase = ["a", "b", "c"]

var userNumb = ["1", "2", ]

var finalArr = []

var userpassword = ""

function generatePassword(){
  var passLength = prompt("Choose password length between 8-128 characters", "");
  console.log(passLength)
  var passLowercase = prompt("Include Lowercase letters?", "");

  var passUppercase = prompt("Include Uppercase letters?", "");
  var passNumbers = prompt("Include numbers?", "");
  var passSpecialChar = prompt("Include Special Characters?", "");

  return userpassword
}
  
    
  //passLength.input().value
  //passLowercase.imput().value
  //passUppercase.input().value
  //passNumbers.input().value
  //passSpecialChar.input().value


// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
