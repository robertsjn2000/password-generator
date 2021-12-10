// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
  'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
  'Y', 'Z']
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specialCharacters = [" ", "!", "#", "$", "%", "&", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "{", "}", "~",]

// Added arrays for letters both capital and lowercase. Also added arrays for numbers and special characters for the password selector. 

// Added code to ranomize arrays

var lowerCaseRandom = Math.floor(Math.random(lowercaseLetters) * lowercaseLetters.length)
console.log(lowerCaseRandom);
var upperCaseRandom = Math.floor(Math.random(upperCaseLetters) * upperCaseLetters.length)
console.log(upperCaseRandom)
var numbersRandom = Math.floor(Math.random(numbers) * numbers.length)
console.log(numbersRandom)
var specialCharactersRandom = Math.floor(Math.random(specialCharacters) * specialCharacters.length)
console.log(specialCharactersRandom)


// got the value of the randomized numbers in terms of letters, numbers, and special symbols.

var lowValue = lowercaseLetters[lowerCaseRandom];
console.log(lowValue)
var upperValue = upperCaseLetters[upperCaseRandom];
console.log(upperValue)
var numbersValue = numbers[numbersRandom];
console.log(numbersValue)
var specialCharactersValue = specialCharacters[specialCharactersRandom];
console.log(specialCharactersValue)

// Switched to using charcode to achieve random numbers letters and symbols
// function getRandomLower(){
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }

// function getRandomUpper(){
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// }

// function getRandomNumber(){
//   return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// }

// function getRandomSymbol(){
//   const symbols = "!@#$%&*?+="
//   return String.fromCharCode[Math.floor(Math.random() * symbols.length)];
// }
// console.log(getRandomNumber)


function generateLowLetter() {
  var randomLowLetter = Math.floor(Math.random() * lowValue.length);
  var chosenLowLetter = lowValue(randomLowLetter);

  return chosenLowLetter
}

function generateUpperLetter() {
  var randomUpperLetter = Math.floor(Math.random() * upperValue.length);
  var chosenUpperLetter = upperValue(randomUpperLetter);
  return chosenUpperLetter
}

function generateNumber() {
  var randomNum = Math.floor(Math.random() * numbersValue.length);
  var chosenNum = numbersValue(randomNum)
  return chosenNum
}

function generateSymbol() {
  var randomSymbol = Math.floor(Math.random() * specialCharactersValue.length);
  var chosenSymbol = specialCharactersValue(randomSymbol)
  return chosenSymbol
}

function generatePassword(totalCharacters, upperCase, lowerCase, totalNumbers, totalSpecialCharacters) {
  
  var randomPassword = [];

  var randomArr = []
  // Used spread symtax to push arrays together.
  if (lowerCase) {
    randomArr = randomArr.concat(lowercaseLetters)
  }
  if (upperCase) {
    randomArr = randomArr.concat(upperCaseLetters)
  }
  if (totalNumbers) {
    randomArr = randomArr.concat(numbers)
  }
  if (totalSpecialCharacters) {
    randomArr = randomArr.concat(specialCharacters)
  }

  // This for loop will push a random charcter from the random array to the password array.
console.log(randomArr)

  for (let i = 0; i < totalCharacters; i++) {
    var randomArrIndex = Math.floor(Math.random() * randomArr.length)
    var randomArrValue = randomArr[randomArrIndex];
    randomPassword.push(randomArrValue)
  }
console.log(randomPassword)
console.log(totalCharacters)
  var randomPasswordString = randomPassword.join("")

  return randomPasswordString
}
// created input prompts so that the user can set the parameters of their password.
function inputPrompts() {
  var firstPrompt = prompt("Please enter your desired number of characters. (8-128):");
  if (firstPrompt != null && !(firstPrompt < 8) && !(firstPrompt > 128)) {
    alert("Number of Characters: " + firstPrompt);

  } else {
    alert("Passwords must be between 8 and 128 characters");
    return;
  }
  var seconPrompt = window.confirm(
    "Do you wish to include lowercase letters?"
  );
  if (seconPrompt) {
    alert("Password will contain lowercase letters.")
  } else {
    alert("password will not contain lowercase letters.");
  }
  var thirdPrompt = window.confirm(
    "Do you wish to include uppercase letters?"
  )
  if (thirdPrompt) {
    alert("Password will contain uppercase letters.")
  }
  else {
    alert("Password will not contain uppercase letters.")
  }
  var fourthPrompt = window.confirm(
    "Do you wish to include numbers?"
  );
  if (fourthPrompt) {
    alert("Password will contain numbers.")
  }
  else {
    alert("Password will not contain numbers.")
  }
  var fifthPrompt = window.confirm(
    "Do you wish to include special characters?"
  )
  if (fifthPrompt) {
    alert("Password will contain special characters.")
  }
  else {
    alert("Password will not contain special characters.")
  }

  return [firstPrompt, seconPrompt, thirdPrompt, fourthPrompt, fifthPrompt];

}

// Write password to the #password input
function writePassword() {

  var passwordText = document.querySelector("#password");
  var inputArr = inputPrompts();
  var input1 = inputArr[0];
  var input2 = inputArr[1];
  var input3 = inputArr[2];
  var input4 = inputArr[3];
  var input5 = inputArr[4];

  var password = generatePassword(input1, input2, input3, input4, input5,);


  passwordText.value = password;

}
console.log(writePassword)

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// for(let i >= 8; i >= 128;)
