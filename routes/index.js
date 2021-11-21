// dependencies
const express = require('express');

// import modular route for ./notes
const notesRoute = require('./notes');

const app = express();

app.use('/notes', notesRoute);



// export module
module.exports = app;