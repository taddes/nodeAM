
const fs = require('fs');

let fetchNotes = () => {
  try {
    let notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

let saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes))
};

const addNote = (title, body) => {
  let notes = fetchNotes();
  let note = {
    title,
    body
  };
    
  let duplicateNotes = notes.filter((note) => note.title === title);
  
  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  } 
};

const getAll = () => {
  return fetchNotes();
}

const getNote = (title) => {
  let notes = fetchNotes();
  let matchingNote = notes.filter((note) => note.title === title);
  console.log({matchingNote});
  return matchingNote[0];
}

let removeNote = (title) => {
  // fetch notes
  //let notes = fetchNotes();
  let notes = fs.readFileSync('notes-data.json');
  notes = JSON.parse(notes);
  // filter out note, remove one passed in (as title arg)
  let filteredNotes = notes.filter((note) => note.title !== title);
  // save new notes array
  //saveNotes(filteredNotes);
  fs.writeFileSync('notes-data.json', JSON.stringify(filteredNotes));
  return notes.length !== filteredNotes.length;
}

let logNote = (note) => {
  console.log('Note found');
  console.log(`----`);
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
}

module.exports = {addNote, getAll, getNote, removeNote, logNote }