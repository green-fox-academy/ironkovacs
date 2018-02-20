
'use strict';
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention
// Expected outpt:
// My todo:
//  - Buy milk
//  - Download games
//      - Diablo
let todoText: string = ' - Buy milk\n';
let todo0: string = 'My todo:\n';
let todo1: string = todoText;
let todo2: string = ' - Download games\n';
let todo3: string = '   - Diablo\n';

todoText =  todo0.concat(todo1, todo2, todo3);
console.log(todoText);