'use strict';
// When saving this quote a disk error has occured. Please fix it.
// Add "always takes longer than" to between the words "It" and "you"
let quote: string = 'Hofstadter\'s Law: It you expect, even when you take into account Hofstadter\'s Law.';

//suttyó style
let quote2 :string = quote.replace('It you' , 'It always takes longer than you');
console.log(quote2);