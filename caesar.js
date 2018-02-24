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
  return // a decrypted character
}

function decryptMessage(encryptedMessage) {
  // implement by using decryptCharacter
  return // a decrypted message
}

function logReplyToConsole() {
  // implement
}

function writeToFile(decryptedMessage) {
  // implement
}

function compareToPassPhrase(decryptedMessage) {
  // implement

  // no `return`, we want to either call logReplyToConsole or writeToFile depending on the message
}


// code to bring all the function together and execute the program.
// You shouldn't need to modify this.

// var encryptedMessage = readStringFromFile();
// var decryptedMessage = decryptMessage(encryptedMessage);
// compareToPassPhrase(decryptedMessage);

/* all done */
