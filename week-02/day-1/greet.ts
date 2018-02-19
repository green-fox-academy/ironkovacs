
// -  Create variable named `name` and assign the value `Greenfox` to it
// -  Create a function called `greet` that greets it's input parameter
//     -  Greeting is printing e.g. `Greetings, dear Greenfox`
//     -  Prepare for the special case when no parameters are given
// -  Greet `name`

let Name: string = '';
let NameOut = '';
function greet(NameOut){
    if (Name == ''){
        NameOut = '`name`';
    }else {
        NameOut = Name;
    }
    let Greetings: string = 'Greetings, dear ' + `${NameOut}` + '!';
    console.log (Greetings)
}

greet(Name);
