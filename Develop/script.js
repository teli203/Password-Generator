// Assignment Code
function generatepassword(){

  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var special = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

var lowercaseInput=document.getElementById("lowercase");
var uppercaseInput=document.getElementById("uppercase");
var specialInput=document.getElementById("special");
var numbersInput=document.getElementById("numbers");

var passlenght = prompt("Password length between 8-128 characters"); {
  if (passlenght < 0 || passlenght > 128) alert("ERROR");
}
var userpassword = "";
  var passwordCharSet = "";


  if (lowercaseInput.checked){
    passwordCharSet += lowercase
  }
  if (uppercaseInput.checked){
    passwordCharSet += uppercase
  }
  if (numbersInput.checked){
    passwordCharSet += numbers
  }
  if (specialInput.checked){
    passwordCharSet += special
  }
  for (var i = 0; i < passlenght; i++) {
    userpassword += passwordCharSet.charAt(Math.floor(Math.random() * passwordCharSet.length));
  }

document.getElementById("password").value=userpassword;
}

