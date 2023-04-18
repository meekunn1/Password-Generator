// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var poolBase = "abcdefghijklmnopqrstuvwxyz";
  var poolAddNumber = "0123456789";
  var poolAddUppercase = poolBase.toUpperCase();
  var poolAddSpecialCharacter = "\ \!\"\#\$\%\/\&'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\]\^\_\`\{\|\}\~";
  var scope = {
    characterLength: prompt("Lets begin the password creation process. \n Please input length of password. \n Please input a number between 8 and 128."),
    cap: confirm("Include upper case?"),
    number: confirm("Include numbers?"),
    specialCharacter: confirm("Include special characters?"),
  }
  console.log(scope.characterLength)
  var characterConfirm = {
    cap: "Capital Letters ❌",
    number: "Numbers ❌",
    specialCharacter: "Special Characters ❌",
  }
  if (scope.characterLength >= 8 && scope.characterLength <= 128){
    // do nothing
  }
  else {
    alert("Value entered for length of password was invalid. \n Please try again.");
    return;
  }
  if (scope.cap){
    characterConfirm.cap = "Capital Letters ✅";
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
  var settingCheck = confirm("Password will be " + scope.characterLength + " characters long and will have the following features:\n" + characterConfirm.cap + "\n" + characterConfirm.number + "\n" + characterConfirm.specialCharacter)
  console.log(poolBase);

  function generatePassword() {
  var result = "";
  var counter = 0;
  while (counter < scope.characterLength) {
    result += poolBase.charAt(Math.floor(Math.random() * poolBase.length));
    counter += 1;
  }
  return result;
}
console.log(generatePassword());

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





//test

function makeid(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

console.log(makeid(50));


//loop test
  // Creates an array containing names of five student in the class
  var students = ["Sarah", "Orlando", "Heather", "Ismael", "Hung"];

  // Logs length of the array
  console.log(students.length);

  // For loop starts at 0, runs while i is less than length of student array
  // Increments by 1
  for(var i=0; i < students.length; i++) {
    // This statement will run each time the loop is executed
    console.log("Great to see you, " + students[i] + "!");
  }


//test work by keiji

  
// var random = Math.floor(Math.random() * against.length);
  
//  console.log("player choose " + action)
//  console.log("computer random generate " + random + " so computer choose " + against[random]);
  
//  var computer = against[random]

// "\ \!\"\#\$\%\/\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\_\`\{\|\}\~"
var test1 = "abcdefghijklmnopqrstuvwxyz0123456789";
var test4 = "0123456789";
var test5 = test1.toUpperCase();
var test2 = "\ \!\"\#\$\%\/\&'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\]\^\_\`\{\|\}\~";
var test3 = test1.concat(test2, test4, test5);
console.log(test1);
console.log(test2);
console.log(test4);
console.log(test5);
console.log(test3);