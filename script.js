var length = document.getElementById("length")
var uppercase = document.getElementById("uppercase")
var lowercase = document.getElementById("lowercase")
var numbers = document.getElementById("numbers")
var symbols = document.getElementById("symbols")
// Assignment Code
var generateBtn = document.getElementById("generate");


// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#p~assword");

  var passwordLength = length.value
  var isUppercase = uppercase.checkedls
  var isLowerCase = lowercase.checked
  var isNumbers = numbers.checked
  var isSymbols = symbols.checked

  console.log("passwordLength: ", passwordLength);
  console.log("isUppercase: ", isUppercase);
  console.log("isLowerCase: ", isLowerCase);
  console.log("isNumbers: ", isNumbers);
  console.log("isSymbols: ", isSymbols);


  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
