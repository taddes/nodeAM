console.log('Starting notes.js');

let addNote = (title, body) => {
  console.log(`Adding Note = title: ${title}. body: ${body}.`)
}

let getAll = () => {
  console.log('Getting all notes');
}

let readNote = (note) => {
  console.log(`Reading Note: ${note}`)
}

let removeNote = (note) => {
  console.log(`Removing note: ${note}`)
}

module.exports = {addNote, getAll, readNote, removeNote}