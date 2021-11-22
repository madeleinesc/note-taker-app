// dependencies
const notes = require('express').Router();
const { readFromFile } = require('../helpers/fsUtils')
const { readAndAppend } = require('../helpers/fsUtils');

// to get unique id's
const uuid = require('../helpers/uuid.js');


// GET route for retrieving notes
notes.get('/', (req, res) =>
// to read notes in db.json
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);


// POST route for submitting notes
notes.post('/', (req, res) => {
    
    if (req.body) {
      // variables for the object to save
      const newNote = {
       title: req.body.title,
        text: req.body.text,
        id: uuid(),
      };
  
      // to add new note to db.json
      readAndAppend(newNote, './db/db.json');
  
      const response = {
        status: 'success',
        body: newNote,
      };
  
      res.json(response);
    } else {
    // if note cannot be save in db.json
      res.error('Oops! Unable to save note!');
    }
  });


// DELETE route for deleting saved notes
notes.delete('/:id', (req, res) => {
    // const created for uuid with the parameter of id
    const noteId = req.params.id;
    // to read all current notes within db.json
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))

    // to let the user know the note has been deleted
    res.json(`${noteId} has been successfully deleted!`);
});



// export module
module.exports = notes;


