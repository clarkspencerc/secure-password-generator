// define variabels that can be used to generate password 
const alpha = Array.from(Array(26)).map((e, i) => i + 65) ;
const alphabetU = alpha.map((x)=> String.fromCharCode(x));
const alphabetL = alphabetU.map(alphabet => alphabet.toLowerCase()); 
const numbers = Array.from(Array(10).keys()); 
var special = " !#$%& '()*+,-./:;<=>?@[\]^_`{|}~"; 
const specials = Array.from(special); 
const types = ["Lowercase", "Uppercase", "Numbers", "Special Characters"]; 
var characters = 7; 

console.log(numbers);
console.log(alphabetU);
console.log(alphabetL);
console.log(specials);

// random number generator that takes in a min and max varible this will be used to pull from the array
var randomNumber = function (max) {
  var value = Math.floor(Math.random() * (max)); 
  return value; 
};

// make an ask function that will be used to ask how many charactes they'd like to use 
var askTypeOfChars = function(type, chars){
  
  var designated = window.prompt("Out of your " + chars + " remaining characters how many would you like to designate as " + type + " ?");
    if(designated > chars) {
      window.alert("you must provide a valid answer. Please enter a number equal to or less than the number of characters you have remaining.")
      askTypeOfChars(type, chars); 
    }
    return designated; 
}; 
// need to make sure you decrement the chars in the loop and start it out var chars = characters; 

var passwordInputs = function(typeQuantity, arrType, arrLength){
  var inputs = []; 
  for(i = 0; i <= typeQuantity; i++){
    var maxNum = arrLength -1; 
    var numIdx = randomNumber(maxNum); 
    var input = arrType[numIdx];
    inputs.push(input);
    console.log(input); 
  }
  return inputs; 
};

var randomShuffle = function(array){
  var currentIdx = array.length, tempValue, randomIdx; 
  while (0 !== currentIdx){
    randomIdx = Math.floor(Math.random() * currentIdx); 
    currentIdx -= 1; 
    tempValue = array[currentIdx]; 
    array[currentIdx] = array[randomIdx];
    array[randomIdx] = tempValue; 
  }
  return array; 
}


// Assignment code here
var generatePassword = function(){
  console.log("generate password function works")
  // select length 
  characters = window.prompt("Please eneter the number of characters you'd like in your new password. Note Minimum number of charactes for a secure passowrd is 8. If eight enter '8' if twelve enter '12'"); 
  characters =  Number(characters); 
  console.log(characters); 

  if (characters < 8 || characters > 128){
    window.alert("You must provide a valid answer. Please enter a number between 8 and 128");
    return generatePassword() ; 
  }
  var chars = characters;

  while(chars != 0){
    var chars = characters;
    window.alert("You have slected a password with " + characters + " characters. Please select the types and quantites of the characters. We have: Lowercase, Uppercase, Numbers, and Special characters");
  
    // would you like lowercase use make lower to ensure charactes are lowercase 
    var lowercaseNum = askTypeOfChars("Lowercase characters",chars);

      chars = chars - lowercaseNum;
    // would you like uppercase - charactes are initialized as uppercase 
    var uppercaseNum = askTypeOfChars("Uppercase characters", chars); 

    chars = chars - uppercaseNum;
    // would you like numeric values 
    var numericNum = askTypeOfChars("Numebers", chars); 

    chars = chars - numericNum; 
    // would you like special characters  need to update so it just alerts that the remaining characters are special 
    var specialNum = askTypeOfChars("Special characters", chars);; 

    chars = chars - specialNum;

    if (chars == 0){
      break; 
    }else{
      window.alert("You must designate a type for each character in your password. With your current selection you have " + chars + " leftover. Please select the number of each type again");
    }
  }
  // create an array of the different types of charactes we are going to use. 

  var lowercaseIn = passwordInputs(lowercaseNum, alphabetL, alphabetL.length -1); 
  var uppercaseIn = passwordInputs(uppercaseNum, alphabetU, alphabetU.length -1); 
  var numericIn = passwordInputs(numericNum, numbers, numbers.length -1); 
  var specialIn = passwordInputs(specialNum, specials, specials.length -1);
  console.log(lowercaseIn);
  console.log(uppercaseIn);
  console.log(numericIn); 
  console.log(specialIn);
  // concat all of the lowercaseIN uppercaseIN numericIn and specialIN to one array 
  var combinedIn = []
  combinedIn = combinedIn.concat(lowercaseIn);
  combinedIn = combinedIn.concat(uppercaseIn); 
  combinedIn = combinedIn.concat(numericIn); 
  combinedIn = combinedIn.concat(specialIn); 
  //shuffling elements around to create a tougher password 
  combinedIn = randomShuffle(combinedIn); 
  // flattening array to one string 
  var flatword = combinedIn.join(""); 
  console.log(flatword);
  return flatword;
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

// once all prompts are answered then a password will generate that matches the selected criteria 
// display password in an alert or write it to the page. 