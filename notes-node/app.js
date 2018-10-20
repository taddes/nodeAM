console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes')

// OS Module
let user = os.userInfo();
console.log({user})

// FS Module
fs.appendFile('greetings.txt', `Hello there ${user.username} `, function Error(err) {
  if (err) {
    console.log(`Unable to write to file: ${err}`);
  } else {
    console.log('Completed appending the file');
  }
});


