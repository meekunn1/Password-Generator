// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var length = prompt("Lets begin the password creation process. Please input length of password.");
  var cap = confirm("Include upper case?");
  var number = confirm("include numbers?");
  var specialCharacter = confirm("Include special characters?");
  var poolBase = "abcdefghijklmnopqrstuvwxyz0123456789";
  var poolAddNumber = "0123456789";
  var poolAddUppercase = test1.toUpperCase();
  var poolAddSpecialCharacter = "\ \!\"\#\$\%\/\&'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\]\^\_\`\{\|\}\~";

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




//test
var obj = { 
  foo: "bar", 
  baz: 42 };
console.log(Object.values(obj)); // ['bar', 42]

// Array-like object
var arrayLikeObj1 = { 0: "a", 1: "b", 2: "c" };
console.log(Object.values(arrayLikeObj1)); // ['a', 'b', 'c']

// Array-like object with random key ordering
// When using numeric keys, the values are returned in the keys' numerical order
var arrayLikeObj2 = { 100: "a", 2: "b", 7: "c" };
console.log(Object.values(arrayLikeObj2)); // ['b', 'c', 'a']

// getFoo is a non-enumerable property
var myObj = Object.create(
  {},
  {
    getFoo: {
      value() {
        return this.foo;
      },
    },
  },
);
myObj.foo = "bar";
console.log(Object.values(myObj)); // ['bar']

var arrayLikeObj3 = ["a", "b", "c" ];
console.log(Object.values(arrayLikeObj3));
console.log(arrayLikeObj3);

// for n loop from previous lecture
// We use a for-loop to execute code more than once
for (var i = 0; i < 5; i++) {
  // This is the block of code that will run each time
  console.log("This is the current value of i: " + i + ".");
}

// For-loops are often used to iterate over arrays
var zooAnimals = ["Bears", "Giraffes", "Penguins", "Meerkats"];

//To determine how many times the loop should execute, we use the array's length
for (var i = 0; i < zooAnimals.length; i++) { 
  console.log("I am going to zoo to see " + zooAnimals[i] + ".");
}


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