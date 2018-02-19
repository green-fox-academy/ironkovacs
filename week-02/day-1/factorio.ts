'use strict';
// -  Create a function called `factorio`
//    that returns it's input's factorial

let input: number = 4;

function factorio (a: number) {
let fact: number = 1;    
    if (a == 0) {        
        return 1;
    }
    else{
        for (let i: number = 1; i <= a; i++) {
            fact = fact * i ;        
        }
        return fact;     
    }
}
console.log (factorio(input));
    