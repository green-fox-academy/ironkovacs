'use strict';

// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
let codeHours = 6;
let semesterLenght = 17;
let workDays = 5;
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
console.log (codeHours * semesterLenght * workDays)
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52
let workHoursWeekly = 52;

let codePrec =( (workDays * codeHours) / workHoursWeekly * 100);
console.log ( codePrec + "%");