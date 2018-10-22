console.log('Starting app.js');

const fs = require('fs');
const os = require('os');

const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

// OS Module
let user = os.userInfo();
console.log({user})


console.log(_.isString('ladeda'));
console.log(_.isString(true));

let filteredArray = _.uniq([2, 6, 8, 12, 33, 8, 6, 33, 24])
console.log({filteredArray})

const compare = process.argv;

const argv = yargs.argv;
console.log({argv, compare})


// FS Module
// fs.appendFile('greetings.txt', `Hello there ${user.username}! You are ${notes.age} `, function Error(err) {
//   if (err) {
//     console.log(`Unable to write to file: ${err}`);
//   } else {
//     console.log('Completed appending the file');
//   }
// });

let command = process.argv[2];
console.log(`Command ${command}`)

console.log(process.argv);

if (command === 'add') {
  notes.addNote(argv.title, argv.body)
} else if (command === 'list') {
  notes.getAll();
} else if (command ==='read') {
  notes.readNote(argv.title)
} else if (command === 'remove') {
  notes.removeNote(argv.title)
 } else {
  console.log('Command not recognized')
}


