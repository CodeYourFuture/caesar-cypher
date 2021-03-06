/* This is a skeleton for the program, with the function already defined for you.
The implementation is missing except for the first one as an example.
At the end of the file, commented out, there is the code to call all functions
in order and (hopefully) get the right result */

var fs = require('fs');  // fs is a built-in module of Node, used to read and manipulate files.

function readStringFromFile() {   // implemented for you. Can be improved.
  var fileName = 'secret_message.txt';  // the name of the file we want to read.
  var fileContent = fs.readFileSync(fileName);  // read the file as a 'Buffer' object. Sync is for syncronous, avoids using promises or callbacks.
  var encryptedMessage = fileContent.toString().trim(); // convert to a String, and remove the trailing new line (`\n`)
  return encryptedMessage
}

function decryptCharacter(encryptedCharacter) {
  // implement. Careful about only changing letters and not spaces or symbols :)
  //
  // hint: you will need to convert the character from a string type to a
  // "character code" number, before you can use '-' or '+' on it.
  //
  return // a decrypted character
}

function decryptMessage(encryptedMessage) {
  // implement by using decryptCharacter
  return // a decrypted message
}

// Main functionality.

var encryptedMessage = readStringFromFile();
var decryptedMessage = decryptMessage(encryptedMessage);
console.log(decryptedMessage);

// All done!
