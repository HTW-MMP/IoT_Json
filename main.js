var data;

var path = require('path');
var fs = require('fs');

// The path to the JSON file
var JSONFile = path.join(__dirname, 'data.json');

try {
  // Try to load the data from data.json. require automatically transforms the JSON into a JS object
  data = require(JSONFile);
} catch(err) {
  console.log('The file "data.json" does not exists yet.');

  // Create the data object if it didn't exist before yet
  data = {
    counter: 0
  };
}

// Increment the counter
data.counter += 1;

console.log('The new counter value is: ' + data.counter);

// Turn the data object into a JSON string
var JSONData = JSON.stringify(data);

// Save the JSON string to the data.json file
fs.writeFileSync(JSONFile, JSONData);
