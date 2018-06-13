'use strict';

export { };
// Write a function that copies a file to an other
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful
declare function require(path: string): any;

const fs = require('fs');

function copies(file1: string, file2: string) {
  try {
    
    fs.writeFileSync(file1, (fs.readFileSync(file2, 'utf-8')));
    return true;
  } catch (err) {
    return false
  }
}


copies('tx3.txt', 'tx1.txt');



export function readFileSync(filenema, type){
  fancy code here
  return whatever
}