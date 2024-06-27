// Primitive
// 7 types : String, Number, boolean, 
// null, undefined, Symbol,BigInt

const score = 100
const scoreValue = 10.23

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('1234')
const anotherId = Symbol('1234')

console.log(id=== anotherId);

const bigNumber = 136287325767n


// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["rahul", "ravi", "ramu"]; // Array
let myObj = {
    name: "Akash",
    age:22,
} // Objects

const myFunction = function(){
    console.log("Hello World");
}

// The typeof Operator

console.log(typeof  score);//Number
console.log(typeof isLoggedIn); // Boolean
console.log(typeof   outsideTemp); // Object
console.log(typeof  anotherId); // Symbol
console.log(typeof  bigNumber); //bigint
console.log(typeof  myFunction); // ObjectFunction
console.log(typeof heros); // Objects
