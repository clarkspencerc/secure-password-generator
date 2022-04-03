// define variabels that can be used to generate password 
const alpha = Array.from(Array(26)).map((e, i) => i + 65) ;
const alphabet = alpha.map((x)=> String.fromCharCode(x));
const numbers = Array.from(Array(10).keys()); 
var special = " !#$%& '()*+,-./:;<=>?@[\]^_`{|}~"; 
const specials = Array.from(special); 
console.log(numbers);
console.log(alphabet);
console.log(specials);

// used to know how many characters should each critera should be allotted 
var customizations = 0; 

// random number generator that takes in a min and max varible this will be used to pull from the array
var randomNumber = function (max) {
  var value = Math.floor(Math.random() * (max)); 
  return value; 
};

// Assignment code here
var generatePassword = function(){
  console.log("generate password function works")
  // select length 
  var promptLength = window.prompt("Please eneter the number of characters you'd like in your new password. Note Minimum number of charactes for a secure passowrd is 8. If eight enter '8' if twelve enter '12'"); 
      promptLength =  Number(promptLength); 
      console.log(promptLength); 

      if (promptLength < 8 || promptLength > 128){
        window.alert("You must provide a valid answer. Please enter a number between 8 and 128");
        return generatePassword() ; 
      }
  // add + 1 to customizations when the user responds with YES to any of the criteria below
  // would you like lowercase use make lower to ensure charactes are lowercase 
  // would you like uppercase use make upper to ensure characters are uppercase 
  // would you like numeric values 
  // would you like special characters 

  // take length and devide it by customizations so you can generate aproprietly (maybe this is too complicated)
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
console.log("write password function works & this button works");
return password;  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// series of prompts 
// set variables that will be user input 
// select length min 8 max 128 
// asked to include character types: Lowercase, Uppercase, numberic, and/or special characters 
// validate selected input ; prompt again if no character type was selected 
// once all prompts are answered then a password will generate that matches the selected criteria 
// display password in an alert or write it to the page. 