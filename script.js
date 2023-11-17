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
function getPasswordOptions() {
  
  do {
    var length = parseInt(prompt('Choose the length of your Password: type a number between 8 and 128 '));
  
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
      var hasNumbers = confirm('Do you want to include Numbers in your Password? ');
      var hasCapital = confirm('Do you want to include Capital Letters? ');
      var hasLower = confirm('Do you want to include Lower Case Letters? ');
      var hasSpecialChar = confirm('Do you want to include Special Characters? ');

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
  var randomElement = math.floor(math.random());
}

// Function to generate password with user input
function generatePassword() {

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