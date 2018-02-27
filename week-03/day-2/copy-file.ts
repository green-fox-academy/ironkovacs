'use strict';
// Write a function that copies a file to an other
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

const fs = require('fs');

function copies(file1: string, file2: string) {
  try {
    fs.writeFileSync(file1, (fs.readFileSync(file2, 'utf-8')));
    return true;
  } catch (err) {
    return false
  }
}
console.log(copies('tx1.txt', 'tx3.txt'));
