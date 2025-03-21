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

// Another way to declear a string.

const country = new String('Pakistan')
console.log(country)

console.log(country[0], country[2])

console.log(country.__proto__)
console.log(country.indexOf("i"))
console.log(country.toUpperCase())

// SubString

const subName = country.slice(0,3)
console.log(subName)

// We can give negative index values in slice method.

console.log(country.slice(-4, -1))

// Trim method.

const password = "     12345    "
console.log(password)
console.log(password.trim())

// Replace method.

const url = "https//github.com/amjad%20mq"
console.log(url.replace('%20', '-'))