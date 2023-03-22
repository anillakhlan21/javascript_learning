// hoisting for functions
sum(5,6);

function sum(a,b){
 console.log(a+b);
}

// hoisting for variables (var, let , const)
// console.log(name);
// var name="sony";

console.log(name);
var name="sony";
//var name;
// console.log(name);
// name="sony";


// hoisting with let keyword 
// console.log(age);
// let age=6;
age=6;
console.log(age);
let age;
/*
let age;
console.log(age);
age=6;
*/