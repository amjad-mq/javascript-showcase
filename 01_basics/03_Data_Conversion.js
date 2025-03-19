// How to convert input into integer in JS

// 1. using parseInt()

let input = "20px"
let number = parseInt(input)
console.log(number)
console.log(typeof number)

let str = "px20"  //  NaN (not a number)
let num = parseInt(str)
console.log(num)
console.log(typeof num)

let score = null
let scoreResult = parseInt(score)
console.log(scoreResult)

// 2. Using Number()

let a = "30"
let n = Number(a)
console.log(n)

let b = "a20px" // can't handle
let n2 = Number(b)
console.log(n2)


let score2 = null // It will convert null into zero
let scoreResult2 = Number(score2)
console.log(scoreResult2)

// 3. Using + (Unary Plus)

let one = "1one" // behaves like number also its Fastest
let ans = +one  // Uniary+
console.log(ans)

// 4. Using Math.floor(), Math.ceil(), or Math.round()

let val = "20"
let result = Math.floor(val)
console.log(result)

// ==> We can also convert boolean too

let is = ""
is = Boolean(is)
console.log(is)

let notEmpty = "Amjad"
notEmpty = Boolean(notEmpty)
console.log(notEmpty)

// Also string too

let value = 45
value = String(value)
console.log(value)
console.log(typeof value)
