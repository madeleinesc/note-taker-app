// dependencies
const notes = require('express').Router();
const { readAndAppend } = require('../helpers/fsUtils');

// to get unique id's
const uuid = require('../helpers/uuid.js');


// GET route for retrieving notes
notes.get('/', (req, res) =>
  readFromFile('../db/db.json').then((data) => res.json(JSON.parse(data)))
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
  
      readAndAppend(newNote, '../db/db.json');
  
      const response = {
        status: 'success',
        body: newNote,
      };
  
      res.json(response);
    } else {
      res.json('Oops! Unable to save note!');
    }
  });


// DELETE route for deleting saved notes




// export module
module.exports = notes;


