
// -  Create a function called `printer`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)
let input: string [] = ['1', '2', '3', '4', 'multiple', 'elements'] //input elements divided by single comma ( , ) !

function printer (a: string []){
    console.log(a.toString());
}
printer (input);