// There are mainly three types of variables which are let, const and var.

// const, let -> local scope{}
// var -> global scope{}
// Prefer not to use var due to its issue with block scope and functional scope

const name = "udit";
let age = 23;
var profession = "software engineering"
status = "not known"

// This prints only one thing at a time
console.log(name);

// console.table([]) => print a table where everything which is inside the square brackets are printed
console.table([name, age, profession, status])


/*
Multiple
Line 
Comment
*/

let surname;
console.log(surname)
// if we leave a variable without assigning a value by default it is "undefined"