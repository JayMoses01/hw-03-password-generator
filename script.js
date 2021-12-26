//JRM: Password options
var passwordOptions = {
  lowerCase: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
  uppercase: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
  numeric: ['1','2','3','4','5','6','7','8','9','0'],
  specialCharacters: ['!','@','#','$','%','^','&','*','(',')','-','=','+','[',']','{','}']
}

//JRM: PASSWORD BANKS BASED ON THE VARIOUS USER SELECTION SCENARIOS (01-15). UNWANTED CRITERIA ARE COMMENTED-OUT FROM EACH SCENARIO BASED ON USER SELECTIONS BUT KEPT IN THE CODE FOR BETTER READABILITY.
//JRM: Selection scenario: true-true-true-true
var getPassword01 = [
  function randomLowerCase() {
    return passwordOptions.lowerCase[Math.floor(Math.random() * passwordOptions.lowerCase.length)];
  },
  function randomUpperCase() {
    return passwordOptions.uppercase[Math.floor(Math.random() * passwordOptions.uppercase.length)];
  },
  function randomNumeric() {
    return passwordOptions.numeric[Math.floor(Math.random() * passwordOptions.numeric.length)];
  },
  function randomSpecialChar() {
    return passwordOptions.specialCharacters[Math.floor(Math.random() * passwordOptions.specialCharacters.length)];
  }
]

//JRM: Selection scenario: false-true-true-true
var getPassword02 = [
  /*function randomLowerCase() {
    return passwordOptions.lowerCase[Math.floor(Math.random() * passwordOptions.lowerCase.length)];
  },*/
  function randomUpperCase() {
    return passwordOptions.uppercase[Math.floor(Math.random() * passwordOptions.uppercase.length)];
  },
  function randomNumeric() {
    return passwordOptions.numeric[Math.floor(Math.random() * passwordOptions.numeric.length)];
  },
  function randomSpecialChar() {
    return passwordOptions.specialCharacters[Math.floor(Math.random() * passwordOptions.specialCharacters.length)];
  }
]

//JRM: Selection scenario: true-false-true-true
var getPassword03 = [
  function randomLowerCase() {
    return passwordOptions.lowerCase[Math.floor(Math.random() * passwordOptions.lowerCase.length)];
  },
  /*function randomUpperCase() {
    return passwordOptions.uppercase[Math.floor(Math.random() * passwordOptions.uppercase.length)];
  },*/
  function randomNumeric() {
    return passwordOptions.numeric[Math.floor(Math.random() * passwordOptions.numeric.length)];
  },
  function randomSpecialChar() {
    return passwordOptions.specialCharacters[Math.floor(Math.random() * passwordOptions.specialCharacters.length)];
  }
]

//JRM: Selection scenario: true-true-false-true
var getPassword04 = [
  function randomLowerCase() {
    return passwordOptions.lowerCase[Math.floor(Math.random() * passwordOptions.lowerCase.length)];
  },
  function randomUpperCase() {
    return passwordOptions.uppercase[Math.floor(Math.random() * passwordOptions.uppercase.length)];
  },
  /*function randomNumeric() {
    return passwordOptions.numeric[Math.floor(Math.random() * passwordOptions.numeric.length)];
  },*/
  function randomSpecialChar() {
    return passwordOptions.specialCharacters[Math.floor(Math.random() * passwordOptions.specialCharacters.length)];
  }
]

//JRM: Selection scenario: true-true-true-false
var getPassword05 = [
  function randomLowerCase() {
    return passwordOptions.lowerCase[Math.floor(Math.random() * passwordOptions.lowerCase.length)];
  },
  function randomUpperCase() {
    return passwordOptions.uppercase[Math.floor(Math.random() * passwordOptions.uppercase.length)];
  },
  function randomNumeric() {
    return passwordOptions.numeric[Math.floor(Math.random() * passwordOptions.numeric.length)];
  },
  /*function randomSpecialChar() {
    return passwordOptions.specialCharacters[Math.floor(Math.random() * passwordOptions.specialCharacters.length)];
  }*/
]

//JRM: Selection scenario: true-false-false-false
var getPassword06 = [
  function randomLowerCase() {
    return passwordOptions.lowerCase[Math.floor(Math.random() * passwordOptions.lowerCase.length)];
  }/*,
  function randomUpperCase() {
    return passwordOptions.uppercase[Math.floor(Math.random() * passwordOptions.uppercase.length)];
  },
  function randomNumeric() {
    return passwordOptions.numeric[Math.floor(Math.random() * passwordOptions.numeric.length)];
  },
  function randomSpecialChar() {
    return passwordOptions.specialCharacters[Math.floor(Math.random() * passwordOptions.specialCharacters.length)];
  }*/
]

//JRM: Selection scenario: false-true-false-false
var getPassword07 = [
  /*function randomLowerCase() {
    return passwordOptions.lowerCase[Math.floor(Math.random() * passwordOptions.lowerCase.length)];
  },*/
  function randomUpperCase() {
    return passwordOptions.uppercase[Math.floor(Math.random() * passwordOptions.uppercase.length)];
  },
  /*function randomNumeric() {
    return passwordOptions.numeric[Math.floor(Math.random() * passwordOptions.numeric.length)];
  },
  function randomSpecialChar() {
    return passwordOptions.specialCharacters[Math.floor(Math.random() * passwordOptions.specialCharacters.length)];
  }*/
]

//JRM: Selection scenario: false-false-true-false
var getPassword08 = [
  /*function randomLowerCase() {
    return passwordOptions.lowerCase[Math.floor(Math.random() * passwordOptions.lowerCase.length)];
  },
  function randomUpperCase() {
    return passwordOptions.uppercase[Math.floor(Math.random() * passwordOptions.uppercase.length)];
  },*/
  function randomNumeric() {
    return passwordOptions.numeric[Math.floor(Math.random() * passwordOptions.numeric.length)];
  },
  /*function randomSpecialChar() {
    return passwordOptions.specialCharacters[Math.floor(Math.random() * passwordOptions.specialCharacters.length)];
  }*/
]

//JRM: Selection scenario: false-false-false-true
var getPassword09 = [
  /*function randomLowerCase() {
    return passwordOptions.lowerCase[Math.floor(Math.random() * passwordOptions.lowerCase.length)];
  },
  function randomUpperCase() {
    return passwordOptions.uppercase[Math.floor(Math.random() * passwordOptions.uppercase.length)];
  },
  function randomNumeric() {
    return passwordOptions.numeric[Math.floor(Math.random() * passwordOptions.numeric.length)];
  },*/
  function randomSpecialChar() {
    return passwordOptions.specialCharacters[Math.floor(Math.random() * passwordOptions.specialCharacters.length)];
  }
]

//JRM: Selection scenario: true-true-false-false
var getPassword10 = [
  function randomLowerCase() {
    return passwordOptions.lowerCase[Math.floor(Math.random() * passwordOptions.lowerCase.length)];
  },
  function randomUpperCase() {
    return passwordOptions.uppercase[Math.floor(Math.random() * passwordOptions.uppercase.length)];
  },
  /*function randomNumeric() {
    return passwordOptions.numeric[Math.floor(Math.random() * passwordOptions.numeric.length)];
  },
  function randomSpecialChar() {
    return passwordOptions.specialCharacters[Math.floor(Math.random() * passwordOptions.specialCharacters.length)];
  }*/
]

//JRM: Selection scenario: false-false-true-true
var getPassword11 = [
  /*function randomLowerCase() {
    return passwordOptions.lowerCase[Math.floor(Math.random() * passwordOptions.lowerCase.length)];
  },
  function randomUpperCase() {
    return passwordOptions.uppercase[Math.floor(Math.random() * passwordOptions.uppercase.length)];
  },*/
  function randomNumeric() {
    return passwordOptions.numeric[Math.floor(Math.random() * passwordOptions.numeric.length)];
  },
  function randomSpecialChar() {
    return passwordOptions.specialCharacters[Math.floor(Math.random() * passwordOptions.specialCharacters.length)];
  }
]

//JRM: Selection scenario: false-true-false-true
var getPassword12 = [
  /*function randomLowerCase() {
    return passwordOptions.lowerCase[Math.floor(Math.random() * passwordOptions.lowerCase.length)];
  },*/
  function randomUpperCase() {
    return passwordOptions.uppercase[Math.floor(Math.random() * passwordOptions.uppercase.length)];
  },
  /*function randomNumeric() {
    return passwordOptions.numeric[Math.floor(Math.random() * passwordOptions.numeric.length)];
  },*/
  function randomSpecialChar() {
    return passwordOptions.specialCharacters[Math.floor(Math.random() * passwordOptions.specialCharacters.length)];
  }
]

//JRM: Selection scenario: true-false-true-false
var getPassword13 = [
  function randomLowerCase() {
    return passwordOptions.lowerCase[Math.floor(Math.random() * passwordOptions.lowerCase.length)];
  },
  /*function randomUpperCase() {
    return passwordOptions.uppercase[Math.floor(Math.random() * passwordOptions.uppercase.length)];
  },*/
  function randomNumeric() {
    return passwordOptions.numeric[Math.floor(Math.random() * passwordOptions.numeric.length)];
  },
  /*function randomSpecialChar() {
    return passwordOptions.specialCharacters[Math.floor(Math.random() * passwordOptions.specialCharacters.length)];
  }*/
]

//JRM: Selection scenario: true-false-false-true
var getPassword14 = [
  function randomLowerCase() {
    return passwordOptions.lowerCase[Math.floor(Math.random() * passwordOptions.lowerCase.length)];
  },
  /*function randomUpperCase() {
    return passwordOptions.uppercase[Math.floor(Math.random() * passwordOptions.uppercase.length)];
  },
  function randomNumeric() {
    return passwordOptions.numeric[Math.floor(Math.random() * passwordOptions.numeric.length)];
  },*/
  function randomSpecialChar() {
    return passwordOptions.specialCharacters[Math.floor(Math.random() * passwordOptions.specialCharacters.length)];
  }
]

//JRM: Selection scenario: false-true-true-false
var getPassword15 = [
  /*function randomLowerCase() {
    return passwordOptions.lowerCase[Math.floor(Math.random() * passwordOptions.lowerCase.length)];
  },*/
  function randomUpperCase() {
    return passwordOptions.uppercase[Math.floor(Math.random() * passwordOptions.uppercase.length)];
  },
  function randomNumeric() {
    return passwordOptions.numeric[Math.floor(Math.random() * passwordOptions.numeric.length)];
  },
  /*function randomSpecialChar() {
    return passwordOptions.specialCharacters[Math.floor(Math.random() * passwordOptions.specialCharacters.length)];
  }*/
]


//JRM: Function to obtain user selections and then create the actual password using password banks 01-15.
function generatePassword() {
    var wantsLowerCase = confirm('Include lowercase characters? (OK = "Yes"; Cancel = "No")');
    var wantsUpperCase = confirm('Include uppercase characters? (OK = "Yes"; Cancel = "No")');
    var wantsNumbers = confirm('Include numbers? (OK = "Yes"; Cancel = "No")');
    var wantsSpecialCharacters = confirm('Include special characters? (OK = "Yes"; Cancel = "No")');
    var passwordLength = prompt("How many characters would you like your new password to be? Please enter a number between 8 and 128.");


    //JRM: While loop to not let user proceed until they enter an actual number, not any special characters.
    while (!/^[0-9]+$/.test(passwordLength)) {
      alert("Please enter a number between 8 and 128.");
      var passwordLength = prompt("How many characters would you like your new password to be? Please enter a number between 8 and 128.");
    }

    //JRM: For good measure, another while loop to not let user proceed until they enter an actual number, not any special characters.
    while (isNaN(passwordLength)) {
      alert("Please enter a number between 8 and 128.");
      var passwordLength = prompt("How many characters would you like your new password to be? Please enter a number between 8 and 128.");
    }

    //JRM: While loop to not let user proceed until they enter a non-negative number between 8 and 128.
    while (passwordLength > 128 || passwordLength < 8) {
      alert("Please enter a number between 8 and 128.");
      var passwordLength = prompt("How many characters would you like your new password to be? Please enter a number between 8 and 128.");
    }
    

    //JRM: While loop and if statements to create user's password based on their selected password criteria.
    currentPassword = ""
    while(currentPassword.length < passwordLength) {
      var passwordToAdd01 = getPassword01[Math.floor(Math.random() * getPassword01.length)];
      var passwordToAdd02 = getPassword02[Math.floor(Math.random() * getPassword02.length)];
      var passwordToAdd03 = getPassword03[Math.floor(Math.random() * getPassword03.length)];
      var passwordToAdd04 = getPassword04[Math.floor(Math.random() * getPassword04.length)];
      var passwordToAdd05 = getPassword05[Math.floor(Math.random() * getPassword05.length)];
      var passwordToAdd06 = getPassword06[Math.floor(Math.random() * getPassword06.length)];
      var passwordToAdd07 = getPassword07[Math.floor(Math.random() * getPassword07.length)];
      var passwordToAdd08 = getPassword08[Math.floor(Math.random() * getPassword08.length)];
      var passwordToAdd09 = getPassword09[Math.floor(Math.random() * getPassword09.length)];
      var passwordToAdd10 = getPassword10[Math.floor(Math.random() * getPassword10.length)];
      var passwordToAdd11 = getPassword11[Math.floor(Math.random() * getPassword11.length)];
      var passwordToAdd12 = getPassword12[Math.floor(Math.random() * getPassword12.length)];
      var passwordToAdd13 = getPassword13[Math.floor(Math.random() * getPassword13.length)];
      var passwordToAdd14 = getPassword14[Math.floor(Math.random() * getPassword14.length)];
      var passwordToAdd15 = getPassword15[Math.floor(Math.random() * getPassword15.length)];


      if (wantsLowerCase == true && wantsUpperCase == true && wantsNumbers == true && wantsSpecialCharacters == true) {
        currentPassword += passwordToAdd01();
        
      } else if (wantsLowerCase == false && wantsUpperCase == true && wantsNumbers == true && wantsSpecialCharacters == true) {
        currentPassword += passwordToAdd02();

      } else if (wantsLowerCase == true && wantsUpperCase == false && wantsNumbers == true && wantsSpecialCharacters == true) {
        currentPassword += passwordToAdd03();

      } else if (wantsLowerCase == true && wantsUpperCase == true && wantsNumbers == false && wantsSpecialCharacters == true) {
        currentPassword += passwordToAdd04();

      } else if (wantsLowerCase == true && wantsUpperCase == true && wantsNumbers == true && wantsSpecialCharacters == false) {
        currentPassword += passwordToAdd05();

      } else if (wantsLowerCase == true && wantsUpperCase == false && wantsNumbers == false && wantsSpecialCharacters == false) {
        currentPassword += passwordToAdd06();

      } else if (wantsLowerCase == false && wantsUpperCase == true && wantsNumbers == false && wantsSpecialCharacters == false) {
        currentPassword += passwordToAdd07();

      } else if (wantsLowerCase == false && wantsUpperCase == false && wantsNumbers == true && wantsSpecialCharacters == false) {
        currentPassword += passwordToAdd08();

      } else if (wantsLowerCase == false && wantsUpperCase == false && wantsNumbers == false && wantsSpecialCharacters == true) {
        currentPassword += passwordToAdd09();

      } else if (wantsLowerCase == true && wantsUpperCase == true && wantsNumbers == false && wantsSpecialCharacters == false) {
        currentPassword += passwordToAdd10();

      } else if (wantsLowerCase == false && wantsUpperCase == false && wantsNumbers == true && wantsSpecialCharacters == true) {
        currentPassword += passwordToAdd11();

      } else if (wantsLowerCase == false && wantsUpperCase == true && wantsNumbers == false && wantsSpecialCharacters == true) {
        currentPassword += passwordToAdd12();

      } else if (wantsLowerCase == true && wantsUpperCase == false && wantsNumbers == true && wantsSpecialCharacters == false) {
        currentPassword += passwordToAdd13();

      } else if (wantsLowerCase == true && wantsUpperCase == false && wantsNumbers == false && wantsSpecialCharacters == true) {
        currentPassword += passwordToAdd14();

      } else if (wantsLowerCase == false && wantsUpperCase == true && wantsNumbers == true && wantsSpecialCharacters == false) {
        currentPassword += passwordToAdd15();

      } else {
        alert("You must make at least one password preference selection. Please try again.");
        return;
      }

    }

}



// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  //passwordText.value = password; //JRM: I commented-out this line of assignment code and added the below line instead
  passwordText.value = currentPassword;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
