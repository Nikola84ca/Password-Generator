// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options

let length;
let hasNumbers, hasCapital, hasLower, hasSpecialChar;

function getPasswordOptions() {
  
  do {
    length = parseInt(prompt('Choose the length of your Password: type a number between 8 and 128 '));
  
    // Check if the input from the user is a number and if it is included in the range required
    if (!isNaN(length) && length >= 8 && length <= 128) {
      // The input is valid so we exit the loop and ask the Character types to be included in the password
      break;
    } else {
      alert("Invalid input. Please enter a number between 8 and 128.");
    }
  } while (true);


  // Loop until the user selects at least one character type
  do {
    // Reset the value for each iteration
    let hasAtLeastOneType = false;

    // Inner loop until the user selects at least one character type
    do {
      hasNumbers = confirm('Do you want to include Numbers in your Password? ');
      hasCapital = confirm('Do you want to include Capital Letters? ');
      hasLower = confirm('Do you want to include Lower Case Letters? ');
      hasSpecialChar = confirm('Do you want to include Special Characters? ');

      // Check if at least one character type is selected
      if (hasNumbers || hasCapital || hasLower || hasSpecialChar) {
        hasAtLeastOneType = true;
      } else {
        alert("You must select at least one character type.");
      }
    } while (!hasAtLeastOneType);

  } while (!hasAtLeastOneType);

}

// Function for getting a random element from an array
function getRandom(arr) {
  let randomElement = arr[Math.floor(Math.random()*arr.length)];
  return randomElement;
}

// Function to generate password with user input
function generatePassword() {
  let tempPass = [];

  // Loop until the password reaches the specified length
  while (tempPass.length < length) {
    if (hasNumbers) {
      let randomNum = getRandom(numericCharacters);
      tempPass.push(randomNum);
    }
    if (hasCapital) {
      let randomCapital = getRandom(upperCasedCharacters);
      tempPass.push(randomCapital);
    }
    if (hasLower) {
      let randomLower = getRandom(lowerCasedCharacters);
      tempPass.push(randomLower);
    }
    if (hasSpecialChar) {
      let randomSpecialChar = getRandom(specialCharacters);
      tempPass.push(randomSpecialChar);
    }
  }

  // Join the characters in the tempPass array and return the generated password
  return tempPass.join('').slice(0, length);
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


getPasswordOptions();
writePassword();