const fs = require('fs');
const util = require('../helpers/fsUtils.js');

// fs.readFile (Promises)
const readFromFile = util.promisify(fs.readFile);
/**
 *  function that writes the data to the JSON file
 *  @param {string} destination file to write to
 *  @param {object} content content to write to file
 *  @returns {void} nothing
 */
const writeToFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${destination}`)
  );
/**
 *  function to read the data from specific file and add content
 *  @param {object} content content to add
 *  @param {string} file path to the file 
 *  @returns {void} nothing
 */
const readAndAppend = (content, file) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
      parsedData.push(content);
      writeToFile(file, parsedData);
    }
  });
};

module.exports = { readFromFile, writeToFile, readAndAppend };