'use strict';
// -  Create an array variable named `nimals`
//    with the following content: `["kuty", "macsk", "cic"]`
// -  Add all elements an `"a"` at the end

let nimals: string[] = ["kuty", "macsk", "cic"];


nimals.map(function (value: string , index: number){
    nimals[index] += 'a' ;
    })
console.log(nimals)