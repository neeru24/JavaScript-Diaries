//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const num = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
// const bigNumber = 3456543576654356754n


// Reference (Non primitive)

// Array, Objects, Functions

const names = ["neeru", "sanchit", "armaan", "Manjot"];
console.log(names);

let myObj = {
    name: "neeru",
    age: 19,
}

const myFunction = function(){
    console.log("Hello world");
}
myFunction();

console.log(typeof anotherId);
