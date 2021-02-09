// asyncBreeds.js
const fs = require('fs');
const { callbackify } = require('util');

const breedDetailsFromFile = function(breed, callbackDone) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    if (!error) { return callbackDone(data)
    }
    else {
      return callbackDone(undefined)
    }
  });

};

const printOutCatBreed = breed => {
  console.log('Return Value: ', breed)
};

breedDetailsFromFile('saphir',printOutCatBreed);

module.exports = breedDetailsFromFile
