
'use strict';
// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.
let far: string[] = ['kuty', 'macsk', 'kacs', 'rók', 'halacsk'];

function appendA (item: string[]){
  item = item.map(a => a + 'a')

  /*for (let i = 0; i < far.length; i++ ){
    item[i] += 'a';
  }*/
  return item.toString();
}
console.log(appendA(far));

// The output should be: 'kutya', 'macska', 'kacsa', 'róka', 'halacska'