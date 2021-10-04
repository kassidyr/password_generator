// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function getRandomPositionInArray(arrayLength){
  var randomNumber=Math.random();
  var randomValue=randomNumber*arrayLength;
  return Math.floor(randomValue);
}

function generateRandomUpperCaseLetter() {
  var upperCaseLetters=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var randomPosition=getRandomPositionInArray(upperCaseLetters.lenth)
  return upperCaseLetters[randomPosition];
}

function generateRandomLowerCaseLetter() {
  var lowerCaseLetters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var randomPosition=getRandomPositionInArray(lowerCaseLetters.lenth)
  return lowerCaseLetters[randomPosition];
}

function generateRandomNumber() {
  var numbers=[0,1,2,3,4,5,6,7,8,9];
  var randomPosition=getRandomPositionInArray(numbers.length);
  return numbers[randomPosition];
}

function generateRandomSpecialCharacter() {
  var specialCharacters=["!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];
  var randomPosition=getRandomPositionInArray(specialCharacters.lenth)
  return specialCharacters[randomPosition];
}

function generateRandomPassword() {
  var includeSpecialCharacters=true;
  var includeUpperCaseLetters=true;
  var includeLowerCaseLetters=true;
  var includeNumbers=true;
  var passwordLength=10;
  var password="";

  if(includeSpecialCharacters){
    password+=generateRandomSpecialCharacter();
  }
  if(includeUpperCaseLetters){
    password+=generateRandomUpperCaseLetter();
  }
  if (includeLowerCaseLetters){
    password+=generateRandomLowerCaseLetter();
  }
  if (includeNumbers){
    password+=generateRandomNumber();
  }

  for(var i=password.length; i<passwordLength; i++) {
    var typeOfCharacterToGenerate="special character"; //Randomly choose the type of character to generate
    if(typeOfCharacterToGenerate==="special character"){
      password+=generateRandomSpecialCharacter();
    }
  }
  for(var i=password.length; i<passwordLength; i++) {
    var typeOfCharacterToGenerate="upper case"; //Randomly choose the type of character to generate
    if(typeOfCharacterToGenerate==="upper case"){
      password+=generateRandomUpperCaseLetter();
    }
  }     
  for(var i=password.length; i<passwordLength; i++) {
    var typeOfCharacterToGenerate="lower case"; //Randomly choose the type of character to generate
    if(typeOfCharacterToGenerate==="lower case"){
      password+=generateRandomLowerCaseLetter();
    }
  }         
  for(var i=password.length; i<passwordLength; i++) {
    var typeOfCharacterToGenerate="number"; //Randomly choose the type of character to generate
    if(typeOfCharacterToGenerate==="number"){
      password+=generateRandomNumber();
    }
  }
}

console.log(generateRandomSpecialCharacter());
console.log(generateRandomUpperCaseLetter());
console.log(generateRandomLowerCaseLetter());
console.log(generateRandomNumber());