// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword (){var passwordLength= prompt("enter password length 8-128 character upper, lower, numeric, & special character required",)
return "passwordLength=" +passwordLength;}

// Write password to the #password input
function writePassword(){
  var password = generatePassword();
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
