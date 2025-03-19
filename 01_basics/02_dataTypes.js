"use strict"; // treat all js code as newer version.

// aleart("Hello") // aleart do not works in node

// Primitive Data Types (Stored directly in memory)

let num = 42
let price = 99.99

let name = "Amjad"
let Greetings = "Hi"

let isStudent = true
let hasJob = false
 
let y = null // represet an empty or unknown value

let x 
console.log(x) //undefined

let sym = Symbol("id") // unique values or object keys

let bigInt = 9999999999999999999999999999 // for large numbers and used in big companies like facebook redit etc...

console.table(
    [typeof(num), typeof(price), typeof(name), typeof(Greetings), typeof(isStudent), typeof(hasJob), typeof(y), typeof(x), typeof(sym), typeof(bigInt)]
)


// Non-Primitive (also known as Reference) Data Types: (Stored as a Reference in Memory)

let person = {name: "Amjad", Age: "20"} //Object: Collection of key value pairs

console.log(person)
console.log(typeof(person))

let numbers = [1, 2, 3, 4, 5]  // Array: Ordered Collection of elements

console.log(numbers)
console.log(typeof(numbers))

function greet(){  // Function: A block of reuseable code 
    return "Hello!"
}

console.log(greet())
console.log(typeof(greet()))

let today = new Date()
console.log(today)

let pattern = /hello/  // Regular Expression for pattern matching.


// Summary: Checking Types

console.log(typeof 42);         // "number"
console.log(typeof "Hello");    // "string"
console.log(typeof true);       // "boolean"
console.log(typeof undefined);  // "undefined"
console.log(typeof null);       // "object" (this is a known JavaScript bug)
console.log(typeof Symbol());   // "symbol"
console.log(typeof {});         // "object"
console.log(typeof []);         // "object" (arrays are a type of object)
console.log(typeof function(){}); // "function"

