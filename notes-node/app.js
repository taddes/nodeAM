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

const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};

const bodyOptions = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
};

const argv = yargs
.command('add', 'Add a new note', {
  title: {
    describe: 'Title of note',
    demand: true,
    alias: 't'
  },
  body: {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
  }
})
.command('list', 'list all notes')
.command('read', 'Read a note', {
  title: {
    describe: 'Title of note',
    demand: true,
    alias: 't'
  }
})
.command('remove', 'Remove a note', {
  title: titleOptions
})
.help()
.argv;
console.log({argv, compare})

let command = argv._[0];
console.log(`Command ${command}`)

console.log(process.argv);

if (command === 'add') {
  let note = notes.addNote(argv.title, argv.body);
  if (note) {
    notes.logNote(note);
  } else {
    console.log('Note title taken')
  }
} else if (command === 'list') {
  let allNotes = notes.getAll();
  console.table(allNotes);
  allNotes.forEach((note) => {
    notes.logNote(note);
  })
} else if (command ==='read') {
  let note = notes.getNote(argv.title);
  if (note) {
    notes.logNote(note);
  } else {
    console.log('Note not found.');
  }
  console.log(note)
} else if (command === 'remove') {
  let noteRemoved = notes.removeNote(argv.title);
  let message = noteRemoved ? `Note:  successfully removed.`: `Unsuccessful note removal. Note not found`;
  console.log(message);
 } else {
  console.log('Command not recognized')
}


