// Numbers types in JS

let num1 = 42;       // Integer
let num2 = 3.14;     // Floating-point number
let num3 = 1e5;      // Exponential notation (100000)

let bigNumber = 123456789012345678901234567890n; // BigInt

console.log(10 / 0);    // Infinity
console.log(-10 / 0);   // -Infinity
console.log("hello" * 3); // NaN


console.log(Math.abs(-10)); // 10
console.log(Math.round(4.7)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.ceil(4.1)); // 5
console.log(Math.trunc(4.9)); // 4


console.log(Math.pow(2, 3)); // 8
console.log(Math.sqrt(25)); // 5
console.log(Math.cbrt(27)); // 3

let num = 123
console.log(num.toString().length)

let pi = Math.PI
console.log(pi.toFixed(2))

let num5 = 123.456;
console.log(num.toPrecision(2)); // "1.2e+2" (scientific notation)
console.log(num.toPrecision(4)); // "123.5"
console.log(num.toPrecision(6)); // "123.456"

let num4 = 5000;
console.log(num.toExponential(2)); // "5.00e+3"
console.log(num.toExponential(3)); // "5.000e+3"

console.log(Number("42")); // 42
console.log(Number("3.14")); // 3.14
console.log(Number("hello")); // NaN (Not a Number)


console.log(isNaN("hello")); // true
console.log(isNaN(42)); // false
console.log(isNaN(NaN)); // true
console.log(isNaN("123")); // false


console.log(isFinite(100)); // true
console.log(isFinite(Infinity)); // false
console.log(isFinite("50")); // true (converted to number)
console.log(isFinite("hello")); // false

console.log(Number.isInteger(10)); // true
console.log(Number.isInteger(3.14)); // false
console.log(Number.isInteger("100")); // false


console.log(((Math.random()*100) + 1).toFixed(0))