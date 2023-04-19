// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var poolBase = "";
  var poolAddLowercase = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
  var poolAddNumber = "01234567890123456789";
  var poolAddUppercase = poolAddLowercase.toUpperCase();
  var poolAddSpecialCharacter = "\ \!\"\#\$\%\/\&'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\]\^\_\`\{\|\}\~";
  var scope = {
    characterLength: prompt("Lets begin the password creation process. \n Please input length of password. \n Please input a number between 8 and 128."),
    normal: confirm("Include Lower Case Letters?"),
    cap: confirm("Include Upper Case Letters?"),
    number: confirm("Include Numbers?"),
    specialCharacter: confirm("Include Special Characters?"),
  }
  var characterConfirm = {
    normal: "Lower Case Letters ❌",
    cap: "Capital Letters ❌",
    number: "Numbers ❌",
    specialCharacter: "Special Characters ❌",
  }
  if (scope.characterLength >= 8 && scope.characterLength <= 128){
    // do nothing
  }
  else {
    alert("Value entered for length of password was invalid. \n Please try again.");
    return "Your Secure Password";
  }
  if (scope.normal){
    characterConfirm.normal = "Lower Case Letters ✅";
    poolBase = poolBase.concat(poolAddLowercase);
  }
  else {
    // do nothing
  }
  if (scope.cap){
    characterConfirm.cap = "Upper Case Letters ✅";
    poolBase = poolBase.concat(poolAddUppercase);
  }
  else {
    // do nothing
  }
  if (scope.number){
    characterConfirm.number = "Numbers ✅";
    poolBase = poolBase.concat(poolAddNumber);
  }
  else {
    // do nothing
  }
  if (scope.specialCharacter){
    characterConfirm.specialCharacter = "Special Characters ✅";
    poolBase = poolBase.concat(poolAddSpecialCharacter);
  }
  else {
    // do nothing
  }
  if (!scope.normal && !scope.cap && !scope.number && !scope.specialCharacter){
    alert("Your password will not include any character types. \nPlease select at least one type of character to be included in your password next time.");
    return "Your Secure Password";
  }
  var settingCheck = confirm("Password will be generated with " + scope.characterLength + " characters and will include the following characters:\n" + characterConfirm.normal + "\n" + characterConfirm.cap + "\n" + characterConfirm.number + "\n" + characterConfirm.specialCharacter)
  
  //check random pull and length
  console.log(poolBase);
  console.log(scope.characterLength);

  function generatePassword() {
  var result = "";
  var counter = 0;
  while (counter < scope.characterLength) {
    result += poolBase.charAt(Math.floor(Math.random() * poolBase.length));
    counter += 1;
  }

if (settingCheck === true){
  return result;
}
else 
  alert("No Problem. \nPlease try again if you change your mind.");
  return "Your Secure Password";
}
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
