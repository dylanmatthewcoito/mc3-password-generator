var generateBtn = document.querySelector("#generate");


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var passwordLength = prompt("Enter the length of the password (between 8 and 128):");
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  if (
    isNaN(passwordLength) || 
    passwordLength < 8 ||    
    passwordLength > 128 ||  
    !(includeLowercase || includeUppercase || includeNumeric || includeSpecial) 
  ) {
    alert("Invalid input. Please try generating a password again.");
    return null; 
  }

  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

  var selectedChars = "";

  if (includeLowercase) {
    selectedChars += lowercaseChars;
  }

  if (includeUppercase) {
    selectedChars += uppercaseChars;
  }

  if (includeNumeric) {
    selectedChars += numericChars;
  }

  if (includeSpecial) {
    selectedChars += specialChars;
  }

  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * selectedChars.length);
    password += selectedChars[randomIndex];
  }

  return password; 
}


generateBtn.addEventListener("click", writePassword);