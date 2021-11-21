// basic syntax to get server to run in browser

// dependecies - to bring in express
const express = require('express');

// to initialise express
const app = express();

// to set port
const PORT = 3000;

// to listen on port
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);

