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

// Function to prompt user for password options, I declared the following variables with a global scope because I will need them in the generatePassword function too, as I need the length of the password and which type of characters the user decides to use. In these variables it is stored the user choice and it is fundamental to create the password in the next function.

let length;
let hasNumbers, hasCapital, hasLower, hasSpecialChar;

function getPasswordOptions() {

  
  do {
    length = parseInt(prompt('Choose the length of your Password: type a number between 8 and 128 '));
  
    // This checks if the input from the user is a number and if it is included in the range required between 8 and 128, I decided to include 8 and 128 as valid numbers as well.
    if (!isNaN(length) && length >= 8 && length <= 128) {
      // If the above are true the user's input is valid so we exit the loop and ask the Character types to be included in the password, otherwise we alert that the input is invalid and we repeat the loop asking again for the length of the password. we exit this loop only whe the length is a number between 8 and 128.
      break;
    } else {
      alert("Invalid input. Please enter a number between 8 and 128.");
    }
  } while (true);

  // When we exited the previous loop, we have the correct length for the password we need to ask for at least one Character type among the 4 options of arrays we have. I decided to do a first do/while loop where the variable hasAtLeastOneType become true only when one of the global boolean variables hasNumbers, hasCapital, hasLower, or hasSpecialChar is true through the confirm.

  let hasAtLeastOneType;

  do {
     // Inner loop until the user selects at least one character type
    // I started with the variable as false so we keep looping until it is true
       hasAtLeastOneType= false;
    do {
      hasNumbers = confirm('Do you want to include Numbers in your Password? ');
      hasCapital = confirm('Do you want to include Capital Letters? ');
      hasLower = confirm('Do you want to include Lower Case Letters? ');
      hasSpecialChar = confirm('Do you want to include Special Characters? ');

      // Here I check if at least one character type has been selected, then the variable hasAtLeastOneType becomes true and we can exit both loops, otherwise we alert the user to inform that at least one character type must be selected and we go back up in the loop representing all the confirms. We finish the loop only when at least one of the variables hasNumber, hasCapital, hasLower, or hasSpecialChar is true.
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

// Function to generate password with user input. I declared a temporary password called tempPass, an array where I will store the random element from the character type chosen by the user.

function generatePassword() {
  let tempPass = [];

  // The following loop runs until the tempPass array reaches the length chosen by the user. At every loop, it checks if the four boolean variables hasNumbers, hasCapital etc are true or false. If they are true, it means the user wants to include that specific type of character so, with a getRandom function I temporary store the random character from that array inside randomNum, randomCapital etc and then I update the tempPass by adding those characters, one after the other in the temporary password array using the push metod. So, for example, if the user selects a length of 8 and chooses to include numbers and lower cases, an impotetical temporary password inside tempPass could look like this 1a4h6j2t.

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

  // At this point I could have just returned the temp password using the join and slice metods, to turn it into a string of the length chosen by the user( return tempPass.join('').slice(0, length); ). The only issue with this, even if the password is functinal and consists of random elements from the character arrays is that the characters will always appear in the same order, which is the order of the ifs in the loop above. This means that if the user click the generate password button again, and if he chose lower cased characters, and special character, he will always have a random lower cased character as first character, followed by a random special character, then another random lower cased. Even if they are random, this alternance doen't provide a deep security level as the algorithm is following an evident pattern, so I decided to store the tempPass into the finalPassword variable, which will be shuffled once again giving every time random characters in random positions of the array.

  // The following joins the characters in the tempPass array and slices it to the desired length before storing it in the finalPassword variable. Then finalPassword is shuffled using the Fisher-Yates algorithm. The three dots ... before finalPassword are the spread syntax, which is used to convert the string to an array temporarily for the purpose of shuffling.
  
  let finalPassword = tempPass.join('').slice(0, length);
  finalPassword = [...finalPassword].sort(() => Math.random() - 0.5).join('');

  return finalPassword;
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


// Finally I run the function to get all the necesary input from the user, the user then will press the Generate Button on the web page to generate the password by calling the writePassword function, which calls the generatePassword function.

getPasswordOptions();
