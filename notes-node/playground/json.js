/*let obj = {
  name: 'Taddes'
};

let stringObj = JSON.stringify(obj);
console.log({stringObj});

let personString = '{"name": "Taddes", "age":29}';

let person = JSON.parse(personString);
console.log({person});
*/

const fs = require('fs');

let originalNote = {
  title: 'Some title',
  body: 'Some body'
}

let convertedNote = JSON.stringify(originalNote);
console.log({convertedNote})

fs.writeFileSync('notes.json', convertedNote, error = (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('write file!')
  }
})


let noteString = fs.readFileSync('notes.json', error = (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('read file!')
  }
})

let note = JSON.parse(noteString)
console.log({note})