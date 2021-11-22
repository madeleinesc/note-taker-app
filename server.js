// dependecies - bring in express
const express = require('express'); 
const path = require('path');
// route folder
const api = require('./routes/index.js');
// to initialise express
const app = express(); 

// set port to listen to requests - use with Heroku
const PORT = process.env.PORT || 3000;



// middleware for parsing JSON/urlencoded from data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// to gain access to public folder
app.use(express.static('public')); 

app.use('/api', api);



// GET route for the homepage (index.html)
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, './public/index.html'))
);

// GET route for the mainpage (notes.html)
app.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, './public/notes.html'))
);

// wildcard to redirect back to the homepage (index.html)
app.get('*', (req, res) => res.redirect('/'));



// to listen on port
app.listen(PORT, () =>
    console.log(`App is listening at http://localhost:${PORT}`)
);

