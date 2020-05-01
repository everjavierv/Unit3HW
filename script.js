// Assignment Code

var generateBtn = document.querySelector("#generate");

//

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();

  //Pswd criteria
  var pswdLength = prompt(
    "How many characters would you like your password to contain?"
  );

  if (pswdLength <= 128 && pswdLength >= 16) {
    var numType = confirm("Click OK to confirm including numeric characters.");
  } else {
    alert("Password needs to be between 16 and 128 characters long, try again");
  }

  if (numType === true) {
    var lowType = confirm(
      "Click OK to confirm including lowercase characters."
    );
  } else if (numType === false) {
    alert("Need to agree to include numerical characters, try again.");
  }

  if (lowType === true) {
    var uppType = confirm(
      "Click OK to confirm including uppercase characters."
    );
  } else if (lowType === false) {
    alert("Need to agree to include lowercase characters, try again.");
  }

  if (uppType === true) {
    var spcType = confirm("Click OK to confirm including special characters.");
  } else if (uppType === false) {
    alert("Need to agree to include uppercase characters, try again.");
  }

  if (spcType === false) {
    alert("Need to agree to include special characters, try again.");
  }

  if (
    pswdLength <= 128 &&
    pswdLength >= 16 &&
    numType === true &&
    lowType === true &&
    uppType === true &&
    spcType === true
  ) {
    var pCount = 0;
    var passBank =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ/*-+=()[]!@#$%^&<>`~,.:;'|{}";

    console.log("Passbank Length");
    console.log(passBank.length);

    var passFinal = "";
    console.log("different indexes");

    for (var i = 0; i < pswdLength; i++) {
      pCount++;
      var passTemp = passBank[Math.floor(Math.random() * passBank.length)];
      console.log(passTemp);
      passFinal = passFinal + passTemp;
    }
    console.log("pswd length");
    console.log(pCount);

    console.log("password");
    console.log(passFinal);

    var passwordText = document.querySelector("#password");

    passwordText.value = passFinal;
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
