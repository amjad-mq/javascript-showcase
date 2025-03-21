// Strins are combination of characters
// We can define strings by using single quotes double quotes and backticks(``)

let singleQuoteString = 'Hi'
let doubleQuoteString = "Hello"
let backticksString = `hey` // Backticks allow you to embed expressions (variables or operations)

// --> Strings Concatination

let greeting = "Hello"
let name = 'Amjad'
let message = greeting + " " + name + "!"
console.log(message)

// By Using Tempelate Literals (Backticks)

message = `${greeting} ${name}!`
console.log(message)