// ✅ Primitive Data Types (Stored by value)
let num = 42;           // Number
let str = "Hello";      // String
let bool = true;        // Boolean
let undef;              // Undefined (default value of uninitialized variables)
let nul = null;         // Null (explicitly represents "nothing")
let sym = Symbol("id"); // Symbol (unique identifier)
let bigInt = 9007199254740991n; // BigInt (large numbers)

// ✅ Non-Primitive Data Types (Stored by reference)
let obj = { name: "John", age: 30 }; // Object
let arr = [1, 2, 3];                 // Array (special type of object)
let func = function() { return "Hi"; }; // Function (a callable object)
let date = new Date();               // Date object
let regex = /abc/;                   // Regular Expression (RegExp object)



// Primitive types are stored by value (copied when assigned).
// Non-primitive types are stored by reference (pointing to the same memory location).