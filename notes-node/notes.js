console.log('Starting notes.js');

let addNote = (title, body) => {
  console.log(`Adding Note = title: ${title}. body: ${body}.`)
}

let getAll = () => {
  console.log('Getting all notes');
}

let readNote = (title) => {
  console.log(`Reading Note: ${title}`)
}

let removeNote = (title) => {
  console.log(`Removing note: ${title}`)
}

module.exports = {addNote, getAll, readNote, removeNote}