function generatePassword() {
  //Ask the user to choose a length
  var passwordLength = window.prompt("Choose the length of your password. The length must be at least 8 characters and no more than 128 characters.");
  console.log(passwordLength);
  if(passwordLength < 8 || passwordLength > 128){
    window.alert("Please provide a valid length.");
    return generatePassword()}
  //Ask the user what type of characters they want to include
  var includeSpecialCharacters=window.confirm("Would you like to include Special Characters?");
  var includeUpperCaseLetters=window.confirm("Would you like to include upper case letters?");
  var includeLowerCaseLetters=window.confirm("Would you like to include lower case letters?")
  var includeNumbers=window.confirm("Would you like to include numbers?")
  var password="";
  //Generate a random position in the array
  function getRandomPositionInArray(arrayLength){
    var randomNumber=Math.random();
    var randomValue=randomNumber*arrayLength;
    return Math.floor(randomValue);
  }
  //Generate a random Upper Case Letter
  function generateRandomUpperCaseLetter() {
    var upperCaseLetters=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var randomPosition=getRandomPositionInArray(upperCaseLetters.length)
    return upperCaseLetters[randomPosition];
  }
  //Generate a random lower Case Letter
  function generateRandomLowerCaseLetter() {
    var lowerCaseLetters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var randomPosition=getRandomPositionInArray(lowerCaseLetters.length)
    return lowerCaseLetters[randomPosition];
  }
  //Generate a random Number
  function generateRandomNumber() {
    var numbers=[0,1,2,3,4,5,6,7,8,9];
    var randomPosition=getRandomPositionInArray(numbers.length);
    return numbers[randomPosition];
  }
  //Generate a random Special Character
  function generateRandomSpecialCharacter() {
    var specialCharacters=["!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];
    var randomPosition=getRandomPositionInArray(specialCharacters.length)
    return specialCharacters[randomPosition];
  }
  
  function generateRandomPassword() {
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
  generateRandomPassword();
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

writePassword();

var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);